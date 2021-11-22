import React from 'react';
import PropTypes from "prop-types";

export default function CarDetails(props) {
    if (!props.currentCar) {
        return null;
    }

    let name = props.currentCar.year + " " + props.currentCar.make + " " + props.currentCar.model;

    return (
        <div>
            <img src={props.currentCar.imageURL} alt={"Picture of "+name}/>
            <h2>{name}</h2>
            <hr/>
            <p>List Price: {props.currentCar.price}</p><br/>
            <p>Predicted Loan: [insert installment information]</p>
        </div>
    );
}

CarDetails.propTypes = {
    currentCar: PropTypes.object,
}
