import React from 'react';
import CarList from "./CarList";
import {useParams} from "react-router-dom";

/**
 * A functional component that holds the client-specific information on the Client Info Page
 */
export default function ClientInfo() {
    let params = useParams(); // parameters in the URL, currently only clientId

    return (
        <React.Fragment>
            <h1>Client Number: {params.clientId}</h1>
            <CarList clientId={params.clientId} />
        </React.Fragment>
    );
}