import React from 'react';
import ListItemCar from "./ListItemCar";

export default class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsJSON: [],
        }
    }

    componentDidMount() {
        this.getCars();
    }

    getCars = () => {
        const requestOptions = {
            method: 'POST',
            body: "1402110922112412"
        };
        fetch('http://3.138.195.107/cars',requestOptions)
            // Handle success
            .then(response => response.json())  // convert to json
            .then(
                json => {
                    this.setState({carsJSON: json.cars});
                }
            )
            .catch(err => console.log('Request Failed', err)); // Catch errors
    }

    render() {
        return (
            <div className="carslist">
                {this.state.carsJSON?.map(entry => {
                    return (
                        <ListItemCar
                            model={entry.year + " " + entry.make + " " + entry.model}
                            price={entry.price}
                            imageURL={entry.image}
                        />
                    );
                })}
            </div>
        );
    }
}
