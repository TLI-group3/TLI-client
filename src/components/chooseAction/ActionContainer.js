import React from 'react';
import ActionButton from "./ActionButton";
import styles from './ActionContainer.module.scss';
import send from '../../resources/send.png';
import profile from '../../resources/profile.png';

/**
 * A container component that acts as our home page. It contains buttons that
 * direct the user to different actions
 */
export class ActionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launchWidgetPath: '/launch-widget',
            clientViewPath: '/client-info',
        }
    }

    // Icons made by https://www.freepik.com
    // TODO: add proper attribution
    render(){
        return (
            <div className={styles.actionContainer}>
                <h1>Choose An Action</h1>
                <div className={styles.buttons}>
                    <ActionButton
                        path={this.state.launchWidgetPath}
                        buttonLabel="Launch Targeted Widgets"
                        icon={send}
                    />
                    <ActionButton
                        path={this.state.clientViewPath}
                        buttonLabel="View Client Information"
                        icon={profile}
                    />
                </div>
            </div>
        );
    }
}
