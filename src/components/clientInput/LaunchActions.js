import styles from "./ClientInput.module.scss";
import React from "react";
import PropTypes from "prop-types";

/**
 * A function component that contains the form input fields used only when launching widgets.
 *
 * It consists of the checkboxes choosing the type of result the user wants to launch.
 */
export function LaunchActions(props) {
    return (
        <div className={styles.checkboxes}>
            <input type="checkbox" name="email" checked={props.generateEmail} onChange={props.onChange}/>
            <label htmlFor="email">Generate email markup</label><br/>

            <input type="checkbox" name="widget" checked={props.generateWidget} onChange={props.onChange}/>
            <label htmlFor="widget">Launch targeted widgets</label>
        </div>
    );
}

LaunchActions.propTypes = {
    generateEmail: PropTypes.bool,
    generateWidget: PropTypes.bool,
    onChange: PropTypes.func,
}
