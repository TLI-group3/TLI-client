import React from 'react';
import ActionButton from "./ActionButton";
import './ActionContainer.scss';

class ActionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launchWidgetPath: '',
            clientViewPath: '',
        }
    }

    render(){
        return (
            <div className=".action-container">
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