import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "antd/dist/antd.css";
import Carousels from "./carousels";

class App extends React.Component {
    state = {
        items: 10
    };
    update = val => {
        this.setState({
            items: val
        });
    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <Carousels count={this.state.items}
                               title = {['a','v','c','d','e']}
                               description = {['a','v','c','d','e']}
                               src ={['https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F603e2e17ca7d53205d3997e2%2FHu-Tao%2F960x0.jpg%3Ffit%3Dscale','https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F603e2e17ca7d53205d3997e2%2FHu-Tao%2F960x0.jpg%3Ffit%3Dscale']} />
                </div>
                <div style={{ margin: "10%" }}>
                    <p>Click below buttons to change the items in slider</p>
                    <button
                        onClick={() => {
                            this.update(1);
                        }}
                    >
                        1
                    </button>
                    <button
                        onClick={() => {
                            this.update(3);
                        }}
                    >
                        3
                    </button>
                    <button
                        onClick={() => {
                            this.update(5);
                        }}
                    >
                        5
                    </button>
                    <button
                        onClick={() => {
                            this.update(10);
                        }}
                    >
                        Reset
                    </button>
                    <p>Items in slider {this.state.items}</p>
                </div>
            </React.Fragment>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);