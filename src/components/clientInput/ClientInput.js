import React from 'react';
import PropTypes from "prop-types";
import styles from './ClientInput.module.scss';
import {InsertID} from "./InsertID";
import {LaunchActions} from "./LaunchActions";

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
            inputData: {
                clientIDs: "",
                generateEmail: false,
                generateWidget: true,
            },
            success: false,
        }
    }

    /**
     * Saves the inserted client IDs to the state.
     * @param e triggering event, change in input field
     */
    handleInsertID = (e) => {
        this.setState(prevState => ({
            inputData: {
                ...prevState.inputData,
                clientIDs: e.target.value,
            },
        }));
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
            this.setState(prevState => ({
                inputData: {
                    ...prevState.inputData,
                    clientIDs: ids.join(" "),
                },
            }));
        };
        reader.readAsText(e.target.files[0]);
    }

    /**
     * Update either the generateEmail or generateWidget states to
     * reflect checkbox state
     * @param e triggering event, checkbox changed
     */
    handleSelectAction = (e) => {
        if(e.target.name === "email") {
            this.setState(prevState => ({
                inputData: {
                    ...prevState.inputData,
                    generateEmail: e.target.checked,
                },
            }));
        } else if(e.target.name === "widget") {
            this.setState(prevState => ({
                inputData: {
                    ...prevState.inputData,
                    generateWidget: e.target.checked,
                },
            }));
        }
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
            body: JSON.stringify(this.state.inputData)
        };
        fetch('https://cb.caravantage.tech/input',requestOptions)
            // Handle success
            .then(response => response.json())  // convert to json
            .then(result => this.setState({success: result}))
            .catch(err => console.log('Request Failed', err)); // Catch errors
    }

    /**
     * Resets the input fields of the form to default state
     */
    reset = () => {
        this.setState({
            inputData: {
                clientIDs: "",
                generateEmail: false,
                generateWidget: true,
            },
        });
    }

    /**
     * Prints a message upon submission of form, reflecting success or failure
     * @returns {JSX.Element} message
     */
    printMessage = () => {
        // when an error occurs, the response is a json error message, not boolean
        if (typeof this.state.success != "boolean") {
            return <p className={styles.successMessage}>Something went wrong</p>;
        } else if (this.state.success) {
            return <p className={styles.successMessage}>Success! Widgets have been launched.</p>;
        }
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
                    <form onSubmit={this.handleSubmit}>
                        <InsertID
                            inputRows={inputRows}
                            value={this.state.inputData.clientIDs}
                            placeholderText={placeholderText}
                            handleInsertID={this.handleInsertID}
                            readFile={this.readFile}
                        />
                        {this.props.launchWidget &&
                            <LaunchActions
                                generateEmail={this.state.inputData.generateEmail}
                                generateWidget={this.state.inputData.generateWidget}
                                onChange={this.handleSelectAction}
                            />
                        }
                        <input className={styles.submitButton} type="submit" value="GO"/>
                    </form>
                </div>
                {this.printMessage()}
            </div>
        );
    }
}

ClientInput.propTypes = {
    launchWidget: PropTypes.bool,
}
