import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from './ActionContainer.module.scss';

/**
 * A button that directs the user to a specific page, depending on what they want to do
 */
export default function ActionButton(props) {
    return (
        <Link className={styles.actionButton} to={props.path}>
            <p>{props.buttonLabel}</p>
            <img src={props.icon} alt="Send Email icon"/>
        </Link>
    );
}

ActionButton.propTypes = {
    path: PropTypes.string,
    buttonLabel: PropTypes.string,
    icon: PropTypes.string,
}