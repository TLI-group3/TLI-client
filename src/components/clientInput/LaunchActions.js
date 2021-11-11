import styles from "./ClientInput.module.scss";
import React from "react";

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