import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    /**
     * Validates log-in information and directs user towards the Choose Action page
     */
    handleSubmit = () => {
        console.log("Handle submit");
    }

    render() {
        return (
            <div>
                Log In
            </div>
        );
    }
}
