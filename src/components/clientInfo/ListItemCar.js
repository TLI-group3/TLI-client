import React from 'react';
import PropTypes from 'prop-types';

export default function ListItemCar(props) {
    return (
        <li key={props.key}>
            <button className="car" onClick={props.onClick}>
                <h2>{props.model}</h2>
                <p>Price: {props.price}</p>
            </button>
        </li>
    );
}

ListItemCar.propTypes = {
    key: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.number,
    imageURL: PropTypes.string,
    onClick: PropTypes.func,
}
