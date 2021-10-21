import React from 'react';
import {Car} from "./Car";

export class CarsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsJSON: [],
        }
    }

    componentDidMount() {
        this.getCarsList()
    }

    getCarsList = () => {
        fetch('http://localhost:8080/cars')
            // Handle success
            .then(response => response.json())  // convert to json
            .then(
                json => {
                    this.setState({carsJSON: json.cars});
                }
            )    //print data to console
            .catch(err => console.log('Request Failed', err)); // Catch errors
    }

    render() {
        return (
            <div className="carslist">
                {this.state.carsJSON.map(entry => {
                    return (
                      <Car
                          make={entry.make}
                          model={entry.model}
                          year={entry.year}
                          price={entry.price}
                      />
                    );
                })}
            </div>
        );
    }
}