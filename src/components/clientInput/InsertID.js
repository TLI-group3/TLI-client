import React from 'react';
import PropTypes from "prop-types";
import styles from "./ClientInput.module.scss";

export function InsertID(props) {
    return (
        <div>
            <textarea className={styles.textInput} rows={props.inputRows} placeholder={props.placeholderText}/><br/>
            <label htmlFor="clientFile">Or, upload as a .txt file:
                <input className={styles.fileUpload} type="file" name="clientFile" />
            </label>
        </div>
    );
}

InsertID.propTypes = {
    inputRows: PropTypes.string,
    placeholderText: PropTypes.string,
}
