import React from 'react';

class ClientInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientIDs: "",
            generateEmail: false,
            generateWidget: false,
            success: false,
        }
    }

    handleSubmit = () => {
        console.log("Handle Submit");
    }

    render() {
        return (
            <div>
                Insert Client IDs
            </div>
        );
    }
}
