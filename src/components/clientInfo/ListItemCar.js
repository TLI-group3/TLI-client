import React from 'react';
import PropTypes from 'prop-types';
import styles from "./ClientInfoContainer.module.scss";

/**
 * Represents a car button in the list of cars
 */
export default function ListItemCar(props) {
    return (
        <button className={styles.car} onClick={() => props.onClick(props.id)}>
            <img src={props.imageURL} alt={"Picture of "+props.name} />
            <h2>{props.name}</h2>
            <p>Price: {props.price}</p>
        </button>
    );
}

ListItemCar.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    imageURL: PropTypes.string,
    onClick: PropTypes.func,
}
