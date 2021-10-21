import React from 'react';
import PropTypes from 'prop-types';

export class Car extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="car">
                <h2>{this.props.make + " " + this.props.model}</h2>
                <p>Price: {this.props.price}</p>
            </div>
        );
    }
}

Car.propTypes = {
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    price: PropTypes.number,
}