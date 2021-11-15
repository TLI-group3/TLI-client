import styles from "./ClientInput.module.scss";
import React from "react";

/**
 * A function component that contains the form input fields used only when launching widgets.
 *
 * It consists of the checkboxes choosing the type of result the user wants to launch.
 */
export function LaunchActions() {
    return (
        <div className={styles.checkboxes}>
            <input type="checkbox" name="email"/>
            <label htmlFor="email">Generate email markup</label><br/>

            <input type="checkbox" name="widget" defaultChecked="true"/>
            <label htmlFor="widget">Launch targeted widgets</label>
        </div>
    );
}