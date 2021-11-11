import React from 'react';
import styles from './ClientInput.module.scss';
import {InsertID} from "./InsertID";
import {LaunchActions} from "./LaunchActions";

export default class ClientInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientIDs: "",
            launchWidget: true,
            success: false,
        }
    }

    handleSubmit = () => {
        console.log("Handle Submit");
    }

    render() {
        let placeholderText, inputRows;
        if (this.state.launchWidget) {
            placeholderText = "Type the ID numbers here, separated by spaces...";
            inputRows = "4";
        } else {
            placeholderText = "Type the ID number here";
            inputRows = "1";
        }

        return (
            <div className={styles.clientInput}>
                <h1>Insert Client ID{this.state.launchWidget && "s"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <InsertID inputRows={inputRows} placeholderText={placeholderText}/>
                    {this.state.launchWidget && <LaunchActions/>}
                    <input className={styles.submitButton} type="submit" value="GO"/>
                </form>
            </div>
        );
    }
}
