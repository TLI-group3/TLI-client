import React from 'react';
import PropTypes from "prop-types";

export default class CarDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>

            </div>
        );
    }
}

CarDetails.propTypes = {
    currentCarID: PropTypes.string,
}