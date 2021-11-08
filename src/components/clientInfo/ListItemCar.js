import React from 'react';
import PropTypes from 'prop-types';

export default function ListItemCar(props) {
    return (
        <div className="car">
            <h2>{props.model}</h2>
            <p>Price: {props.price}</p>
        </div>
    );
}

ListItemCar.propTypes = {
    model: PropTypes.string,
    price: PropTypes.number,
    imageURL: PropTypes.string,
}