import React from 'react';
import ActionButton from "./ActionButton";
import styles from './ActionContainer.module.scss';

export class ActionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launchWidgetPath: '/launch-widget',
            clientViewPath: '/client-info',
        }
    }

    render(){
        return (
            <div className={styles.actionContainer}>
                Choose An Action
                <ActionButton
                    path={this.state.launchWidgetPath}
                    buttonLabel="Launch Targeted Widgets"
                />
                <ActionButton
                    path={this.state.clientViewPath}
                    buttonLabel="View Client Information"
                />
            </div>
        );
    }
}
