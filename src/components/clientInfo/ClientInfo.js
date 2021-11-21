import React from 'react';
import CarList from "./CarList";
import CarDetails from "./CarDetails";
import {useParams} from "react-router-dom";

export default function ClientInfo(props) {
    let params = useParams();
    const clientName = "Last Name, First Name";
    const currentCarID = "10001";

    return (
        <React.Fragment>
            {clientName}
            <CarList />
            <CarDetails
                currentCarID={currentCarID}
            />
        </React.Fragment>
    );
}