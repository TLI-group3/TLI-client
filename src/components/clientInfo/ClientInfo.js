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
            Client Number: {params.clientId}
            <CarList clientId={params.clientId} />
        </React.Fragment>
    );
}