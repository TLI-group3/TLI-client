import React from 'react';
import PropTypes from "prop-types";
import styles from './ClientInput.module.scss';
import {InputForm} from "./InputForm";

/**
 * A component that handles inputting client IDs.
 *
 * This is used when the user wants to launch targeted widgets for clients,
 * and when the user wants to view the information about a certain client.
 *
 * This component is the one that communicates with the back-end.
 */
export default class ClientInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientIDs: "",
            successMessage: "",
        }
    }

    /**
     * Saves the inserted client IDs to the state.
     * @param e triggering event, change in input field
     */
    handleInsertID = (e) => {
        this.setState({clientIDs: e.target.value});
    }

    /**
     * Reads through an uploaded file and formats the data such that
     * the client ids are separated by spaces.
     * @param e triggering event, upload of file
     * @returns {Promise<void>}
     */
    readFile = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        // once the file is read, reformat the content and update state
        reader.onload = async (e) => {
            const text = (e.target.result);
            const ids = text.split(/\r?\n/);
            this.setState({clientIDs: ids.join(" ")});
        };
        reader.readAsText(e.target.files[0]);
    }

    /**
     * When the form is submitted, send a request to back-end and reset fields
     * @param e
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.sendRequest();
        this.reset();
    }

    /**
     * Sends a PUT request to back-end containing the input data
     */
    sendRequest = () => {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({clientIDs: this.state.clientIDs})
        };
        fetch('https://cb.caravantage.tech/generateCars',requestOptions)
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Something went wrong with the request, Status " + response.status);
                } else {
                    this.setState({successMessage: "Success! Widgets have been launched."});
                }
            })
            .catch((error) => {this.setState({successMessage: "Error: " + error.message})});
    }

    /**
     * Resets the input fields of the form to default state
     */
    reset = () => {
        this.setState({clientIDs: ""});
    }

    render() {
        // Alter text depending on use case
        let placeholderText, inputRows;
        if (this.props.launchWidget) {
            placeholderText = "Type the ID numbers here, separated by spaces...";
            inputRows = "4";
        } else {
            placeholderText = "Type the ID number here";
            inputRows = "1";
        }

        return (
            <div>
                <div className={styles.clientInput}>
                    <h1>Insert Client ID{this.props.launchWidget && "s"}</h1>
                    <InputForm
                        launchWidget={this.props.launchWidget}
                        clientIDs={this.state.clientIDs}
                        inputRows={inputRows}
                        placeholderText={placeholderText}
                        handleInsertID={this.handleInsertID}
                        readFile={this.readFile}
                        handleSelectAction={this.handleSelectAction}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <p className={styles.successMessage}>{this.state.successMessage}</p>
            </div>
        );
    }
}

ClientInput.propTypes = {
    launchWidget: PropTypes.bool,
}
