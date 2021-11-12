import React from 'react';
import PropTypes from "prop-types";
import styles from "./ClientInput.module.scss";

/**
 * A function component that contains the shared form input fields when inserting client IDs.
 */
export function InsertID(props) {
    return (
        <div>
            <textarea
                className={styles.textInput}
                rows={props.inputRows}
                value={props.value}
                placeholder={props.placeholderText}
                onChange={props.onChange}
            /><br/>
            <label htmlFor="clientFile">Or, upload as a .txt file:
                <input className={styles.fileUpload} type="file" name="clientFile" />
            </label>
        </div>
    );
}

InsertID.propTypes = {
    inputRows: PropTypes.string,
    placeholderText: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}
