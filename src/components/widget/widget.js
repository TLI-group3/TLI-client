'use strict';

import ReactDOM from "react-dom";

const e = React.createElement;

class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { recommendedCarsJSON: true };
    }

    handleTradeInWidget = () => {

}
    postTradeIn = () => {

    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#widget-container');
ReactDOM.render(e(Widget), domContainer);