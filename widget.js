var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import "./widget.module.scss";
import "antd/dist/antd.css";
import Carousels from "./carousel";

var e = React.createElement;

export var Widget = function (_React$Component) {
    _inherits(Widget, _React$Component);

    function Widget(props) {
        _classCallCheck(this, Widget);

        var _this = _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).call(this, props));

        _this.getCars = function () {
            var params = "1402110922112412";
            var requestOptions = {
                method: "POST",
                body: params
            };
            fetch("https://cb.caravantage.tech/cars", requestOptions)
            // Handle success
            .then(function (response) {
                return response.json();
            }) // convert to json
            .then(function (json) {
                _this.setState({ carsJSON: json.cars });
            }).catch(function (err) {
                return console.log("Request Failed", err);
            }); // Catch errors
        };

        _this.update = function (val) {
            _this.setState({
                items: val
            });
        };

        _this.state = {
            items: 0,
            carsJSON: [],
            titles: ["Check your cars"],
            descriptions: ["Do you want a new car?"],
            src: ["https://www.generatormix.com/images/thumbs/random-car-model-generator.jpg"]
        };
        return _this;
    }
    //componentDidMount() {
    // this.getCars();
    //}

    _createClass(Widget, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "div",
                    null,
                    this.state.carsJSON.map(function (entry) {
                        return _this2.state.titles.push(entry.make), _this2.state.descriptions.push(entry.model + " " + entry.year), _this2.state.src.push(entry.image);
                    }),
                    ";",
                    React.createElement(Carousels, {
                        count: this.state.items,
                        title: this.state.titles,
                        description: this.state.descriptions,
                        src: this.state.src,
                        style: { width: 100 }
                    })
                ),
                React.createElement(
                    "div",
                    { style: { margin: "10%" } },
                    React.createElement(
                        "button",
                        {
                            onClick: function onClick() {
                                _this2.update(0);
                                _this2.getCars();
                                _this2.update(5);
                            }
                        },
                        "Find your Cars!!!"
                    ),
                    React.createElement(
                        "button",
                        {
                            onClick: function onClick() {
                                _this2.update(0);
                            }
                        },
                        "Reset"
                    )
                )
            );
        }
    }]);

    return Widget;
}(React.Component);

var domContainer = document.querySelector("#widget-container");
ReactDOM.render(e(Widget), domContainer);