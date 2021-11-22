var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "antd/dist/antd.css";
import Carousels from "./carousels";

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            items: 10
        }, _this.update = function (val) {
            _this.setState({
                items: val
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "div",
                    null,
                    React.createElement(Carousels, { count: this.state.items,
                        title: ['a', 'v', 'c', 'd', 'e'],
                        description: ['a', 'v', 'c', 'd', 'e'],
                        src: ['https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F603e2e17ca7d53205d3997e2%2FHu-Tao%2F960x0.jpg%3Ffit%3Dscale', 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F603e2e17ca7d53205d3997e2%2FHu-Tao%2F960x0.jpg%3Ffit%3Dscale'] })
                ),
                React.createElement(
                    "div",
                    { style: { margin: "10%" } },
                    React.createElement(
                        "p",
                        null,
                        "Click below buttons to change the items in slider"
                    ),
                    React.createElement(
                        "button",
                        {
                            onClick: function onClick() {
                                _this2.update(1);
                            }
                        },
                        "1"
                    ),
                    React.createElement(
                        "button",
                        {
                            onClick: function onClick() {
                                _this2.update(3);
                            }
                        },
                        "3"
                    ),
                    React.createElement(
                        "button",
                        {
                            onClick: function onClick() {
                                _this2.update(5);
                            }
                        },
                        "5"
                    ),
                    React.createElement(
                        "button",
                        {
                            onClick: function onClick() {
                                _this2.update(10);
                            }
                        },
                        "Reset"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Items in slider ",
                        this.state.items
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

var rootElement = document.getElementById("root");
ReactDOM.render(React.createElement(App, null), rootElement);