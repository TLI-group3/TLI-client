import React from 'react';
import ListItemCar from "./ListItemCar";
import PropTypes from "prop-types";
import CarDetails from "./CarDetails";
import styles from "./ClientInfoContainer.module.scss"

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
            method: 'GET',
        };
        fetch('https://cb.caravantage.tech/getCars/?input='+this.props.clientId,requestOptions)
            // Handle success
            .then((response) => {
                if (!response.ok) {
                    throw new Error("HTTP request failed, status="+response.status);
                } else {
                    return response.json();
                }
            })  // convert to json
            .then(json => {
                if (json.cars.length !== 0) {
                    this.setState({carsJSON: json.cars, currentCar: json.cars[0]});
                } else {
                    this.setState({
                        carsJSON: ["Error", "Something went wrong. Received empty car list. Please check that input ID is valid."]
                    });
                }
            })
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
        if (this.state.carsJSON.length === 0) {
            return <div className={styles.loader}/>;
        } else if (this.state.carsJSON[0] === "Error") {
            return <p>{this.state.carsJSON[1]}</p>
        } else {
            return (
                <div className={styles.cards}>
                    <div className={styles.carlist}>
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
                    </div>
                    <CarDetails
                        currentCar={this.state.currentCar}
                    />
                </div>
            );
        }
    }
}

CarList.propTypes = {
    clientId: PropTypes.string,
}
