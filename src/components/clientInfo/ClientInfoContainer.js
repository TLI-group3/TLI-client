import React from 'react';
import CarList from "./CarList";
import CarDetails from "./CarDetails";
import styles from './ClientInfoContainer.module.scss';
import {Outlet} from "react-router-dom";

export default class ClientInfoContainer extends React.Component {
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
                <Outlet />
            </div>
        );
    }
}
