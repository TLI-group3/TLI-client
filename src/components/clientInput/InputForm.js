import {InsertID} from "./InsertID";
import styles from "./ClientInput.module.scss";
import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

/**
 * A form used to input client IDs and request whether to
 * generate emails or widgets.
 */
export function InputForm(props) {
    const navigate = useNavigate();
    const onSubmit = useCallback((e) => {
        if(props.launchWidget) {
            props.handleSubmit(e);
        } else {
            navigate("/client-info/"+props.clientIDs);
        }
    }, [props, navigate]);

    return (
        <form onSubmit={onSubmit}>
            <InsertID
                inputRows={props.inputRows}
                value={props.clientIDs}
                placeholderText={props.placeholderText}
                handleInsertID={props.handleInsertID}
                readFile={props.readFile}
            />
            <input className={styles.submitButton} type="submit" value="GO"/>
        </form>
    );
}

InputForm.propTypes = {
    launchWidget: PropTypes.bool,
    clientIDs: PropTypes.string,
    inputRows: PropTypes.string,
    placeholderText: PropTypes.string,
    handleInsertID: PropTypes.func,
    readFile: PropTypes.func,
    handleSubmit: PropTypes.func,
}
