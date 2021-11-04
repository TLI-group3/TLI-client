import React from 'react';
import PropTypes from "prop-types";

export default class ActionButton extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Send the user to the appropriate page based on path
     */
    goToPage = () => {
        console.log("Handle Click")
    }

    render(){
        return (
          <div>
              <button onClick={this.goToPage}>{this.props.buttonLabel}</button>
          </div>
        );
    }
}

ActionButton.propTypes = {
    path: PropTypes.string,
    buttonLabel: PropTypes.string,
}