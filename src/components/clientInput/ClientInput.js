import React from 'react';
import PropTypes from "prop-types";
import styles from './ClientInput.module.scss';
import {InsertID} from "./InsertID";
import {LaunchActions} from "./LaunchActions";

export default class ClientInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientIDs: "",
            success: false,
        }
    }

    handleSubmit = () => {
        console.log("Handle Submit");
    }

    render() {
        let placeholderText, inputRows;
        if (this.props.launchWidget) {
            placeholderText = "Type the ID numbers here, separated by spaces...";
            inputRows = "4";
        } else {
            placeholderText = "Type the ID number here";
            inputRows = "1";
        }

        return (
            <div className={styles.clientInput}>
                <h1>Insert Client ID{this.props.launchWidget && "s"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <InsertID inputRows={inputRows} placeholderText={placeholderText}/>
                    {this.props.launchWidget && <LaunchActions/>}
                    <input className={styles.submitButton} type="submit" value="GO"/>
                </form>
            </div>
        );
    }
}

ClientInput.propTypes = {
    launchWidget: PropTypes.bool,
}
