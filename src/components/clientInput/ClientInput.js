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
            clientIDs: "",
            success: false,
        }
    }

    handleInsertID = (e) => {
        this.setState({clientIDs: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({success: true});
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
                            value={this.state.clientIDs}
                            placeholderText={placeholderText}
                            onChange={this.handleInsertID}
                        />
                        {this.props.launchWidget && <LaunchActions/>}
                        <input className={styles.submitButton} type="submit" value="GO"/>
                    </form>
                </div>
                {this.state.success &&
                <p className={styles.successMessage}>Success! Widgets have been launched.</p>
                }
            </div>
        );
    }
}

ClientInput.propTypes = {
    launchWidget: PropTypes.bool,
}
