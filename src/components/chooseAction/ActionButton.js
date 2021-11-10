import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * A button that directs the user to a specific page, depending on what they want to do
 */
export default function ActionButton(props) {
    return (
        <div>
            <Link to={props.path}>{props.buttonLabel}</Link>
        </div>
    );
}

ActionButton.propTypes = {
    path: PropTypes.string,
    buttonLabel: PropTypes.string,
}