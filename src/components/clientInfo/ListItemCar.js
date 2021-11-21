import React from 'react';
import PropTypes from 'prop-types';

export default function ListItemCar(props) {
    return (
        <button className="car" onClick={() => props.onClick(props.id)}>
            <h2>{props.model}</h2>
            <p>Price: {props.price}</p>
        </button>
    );
}

ListItemCar.propTypes = {
    id: PropTypes.number,
    model: PropTypes.string,
    price: PropTypes.number,
    imageURL: PropTypes.string,
    onClick: PropTypes.func,
}
