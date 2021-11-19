import {InsertID} from "./InsertID";
import {LaunchActions} from "./LaunchActions";
import styles from "./ClientInput.module.scss";
import React from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

/**
 * A form used to input client IDs and request whether to
 * generate emails or widgets.
 */
export function InputForm(props) {
    const navigate = useNavigate();

    return (
        <form onSubmit={props.launchWidget ? props.handleSubmit : navigate("/"+props.inputData.clientIDs)}>
            <InsertID
                inputRows={props.inputRows}
                value={props.inputData.clientIDs}
                placeholderText={props.placeholderText}
                handleInsertID={props.handleInsertID}
                readFile={props.readFile}
            />
            {props.launchWidget &&
                <LaunchActions
                    generateEmail={props.inputData.generateEmail}
                    generateWidget={props.inputData.generateWidget}
                    onChange={props.handleSelectAction}
                />
            }
            <input className={styles.submitButton} type="submit" value="GO"/>
        </form>
    );
}

InputForm.propTypes = {
    launchWidget: PropTypes.bool,
    inputData: PropTypes.object,
    inputRows: PropTypes.string,
    placeholderText: PropTypes.string,
    handleInsertID: PropTypes.func,
    readFile: PropTypes.func,
    handleSelectAction: PropTypes.func,
    handleSubmit: PropTypes.func,
}
