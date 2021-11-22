import React from 'react';
import {Outlet} from "react-router-dom";

/**
 * A container holding the Client Information Page
 */
export default function ClientInfoContainer() {
    return (
        <div>
            <Outlet />
        </div>
    );
}
