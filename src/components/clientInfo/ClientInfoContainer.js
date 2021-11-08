import React from 'react';
import CarList from "./CarList";
import CarDetails from "./CarDetails";

class ClientInfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: "",
            carsJSON: {},
            currentCarID: "",
        }
    }

    render() {
        return (
            <div>
                {this.state.clientName}
                <CarList />
                <CarDetails
                    currentCarID={this.state.currentCarID}
                />
            </div>
        );
    }
}