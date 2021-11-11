import React from 'react';
import styles from './ClientInput.module.scss';

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
                <h1>Insert Client IDs</h1>
                <form>
                    <input type="text" placeholder="Type the ID numbers here, separated by spaces..."/><br/>
                    <label htmlFor="clientFile">Or, upload as a .txt file: </label>
                    <input type="file" name="clientFile" /><br />
                    <input type="checkbox" name="email" />
                    <label htmlFor="email">Generate email markup</label><br/>
                    <input type="checkbox" name="widget" checked/>
                    <label htmlFor="widget">Launch targeted widgets</label>
                    <input type="submit" value="Go" />
                </form>
            </div>
        );
    }
}
