import React from "react";
import ReactDOM from "react-dom";
import "./widget.module.scss";
import "antd/dist/antd.css";
import Carousels from "./carousel";

const e = React.createElement;

class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: 0, titles:["Exclusive Car Loan Offers!!!", "v", "c", "d", "e"],
            descriptions: ["Don't lose out!!!", "v", "c", "d", "e"]};
    }
    update = (val) => {
        this.setState({
            items: val
        });
    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <Carousels
                        count={this.state.items}
                        title={this.state.titles}
                        description={this.state.descriptions}
                        src={[
                            "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F603e2e17ca7d53205d3997e2%2FHu-Tao%2F960x0.jpg%3Ffit%3Dscale",
                            "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F603e2e17ca7d53205d3997e2%2FHu-Tao%2F960x0.jpg%3Ffit%3Dscale"
                        ]}
                        style={{ width: 100 }}
                    />
                </div>
                <div style={{ margin: "10%" }}>
                    <button
                        onClick={() => {
                            this.update(5);
                        }}
                    >
                        Find your Cars!!!
                    </button>
                    <button
                        onClick={() => {
                            this.update(0);
                        }}
                    >
                        Reset
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

const domContainer = document.querySelector("#widget-container");
ReactDOM.render(e(Widget), domContainer);

