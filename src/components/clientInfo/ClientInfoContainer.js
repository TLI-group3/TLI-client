import React from 'react';
import {Outlet} from "react-router-dom";
import styles from "./ClientInfoContainer.module.scss"

/**
 * A container holding the Client Information Page
 */
export default function ClientInfoContainer() {
    return (
        <div className={styles.clientInfo}>
            <Outlet />
        </div>
    );
}
