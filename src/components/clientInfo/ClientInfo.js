import React from 'react';
import CarList from "./CarList";
import {useParams} from "react-router-dom";

export default function ClientInfo() {
    let params = useParams();

    return (
        <React.Fragment>
            Client Number: {params.clientId}
            <CarList clientId={params.clientId} />
        </React.Fragment>
    );
}