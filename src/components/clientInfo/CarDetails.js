import React from 'react';
import PropTypes from "prop-types";
import styles from "./ClientInfoContainer.module.scss";

/**
 * A functional component that represents the card containing more detailed information about the car
 */
export default function CarDetails(props) {
    // If no car is currently selected, don't render this
    if (!props.currentCar) {
        return null;
    }

    let name = props.currentCar.year + " " + props.currentCar.make + " " + props.currentCar.model;
    return (
        <div className={styles.carDetails}>
            <div className={styles.detailsHeader}>
                <img src={props.currentCar.image} alt={"Picture of "+name}/>
                <h2>{name}</h2>
            </div>
            <hr/>
            <p>List Price: {props.currentCar.price}</p>
            <p>Predicted Loan: [insert installment information]</p>
        </div>
    );
}

CarDetails.propTypes = {
    currentCar: PropTypes.object,
}
