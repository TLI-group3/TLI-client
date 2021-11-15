//import styles from './widget.module.scss';
'use strict';

const e = React.createElement;

class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { recommendedCarsJSON: true, liked: false };
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