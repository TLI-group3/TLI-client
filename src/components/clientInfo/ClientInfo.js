import React from 'react';
import CarList from "./CarList";
import CarDetails from "./CarDetails";
import {useParams} from "react-router-dom";

export default function ClientInfo(props) {
    let params = useParams();
    return (
        <React.Fragment>
            {this.state.clientName}
            <CarList />
            <CarDetails
                currentCarID={this.state.currentCarID}
            />
        </React.Fragment>
    );
}