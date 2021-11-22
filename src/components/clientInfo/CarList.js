import React from 'react';
import ListItemCar from "./ListItemCar";
import PropTypes from "prop-types";
import CarDetails from "./CarDetails";

export default class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsJSON: [],
            currentCar: null,
        }
    }

    componentDidMount() {
        this.getCars();
    }

    getCars = () => {
        const requestOptions = {
            method: 'POST',
            body: this.props.clientId
        };
        fetch('https://cb.caravantage.tech/cars',requestOptions)
            // Handle success
            .then(response => response.json())  // convert to json
            .then(json => { this.setState({carsJSON: json.cars}); })
            .catch(err => console.log('Request Failed', err)); // Catch errors
    }

    onClick = (carId) => {
        this.setState({currentCar: this.state.carsJSON[carId]});
    }

    render() {
        return (
            <div className="carslist">
                {this.state.carsJSON?.map((entry, index) => {
                    return (
                        <ListItemCar
                            key={index}
                            id={index}
                            name={entry.year + " " + entry.make + " " + entry.model}
                            price={entry.price}
                            imageURL={entry.image}
                            onClick={this.onClick}
                        />
                    );
                })}
                <CarDetails
                    currentCar={this.state.currentCar}
                />
            </div>
        );
    }
}

CarList.propTypes = {
    clientId: PropTypes.string,
}
