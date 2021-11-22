import React from 'react';
import ListItemCar from "./ListItemCar";
import PropTypes from "prop-types";
import CarDetails from "./CarDetails";

/**
 * Manages the client's list of recommended cars
 */
export default class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsJSON: [],
            currentCar: null,
        }
    }

    /**
     * Once the component loads, fetch the user's recommended cars
     */
    componentDidMount() {
        this.getCars();
    }

    /**
     * Send a POST request to the back-end to get this client's cars
     */
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

    /**
     * When a car in the list is clicked, save that car
     * @param carId the id of the clicked car
     */
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
