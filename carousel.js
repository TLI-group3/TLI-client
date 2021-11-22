var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCard from "./carSlides";

/**
 * A react component Carousel that renders and contains each individual CustomCard from carSlides.
 *
 * The user can interact with it through the arrows or by slidling their cursor to obtain the next card.
 *
 * It takes as props the values for each card
 */

var Carousels = function (_React$Component) {
    _inherits(Carousels, _React$Component);

    function Carousels(props) {
        _classCallCheck(this, Carousels);

        var _this = _possibleConstructorReturn(this, (Carousels.__proto__ || Object.getPrototypeOf(Carousels)).call(this));

        _this.props = props;
        return _this;
    }

    /**
     * Generates the specified amount of card containers and assignes them their prop values
     *
     * @returns {*[]} Cards Array
     */


    _createClass(Carousels, [{
        key: "renderItems",
        value: function renderItems() {
            var cards = [];
            for (var i = 0; i <= this.props.count; i++) {
                cards.push(React.createElement(CustomCard, { key: i, title: this.props.title[i],
                    description: this.props.description[i],
                    src: this.props.src[i] }));
            }
            return cards;
        }

        /**
         *  Revises if the Card shown by the Carousel has been updated to the correct one
         * @param prevProps
         */

    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (this.props.count !== prevProps.count) {
                this.carouselRef.setState({
                    currentSlide: 0,
                    transform: 0,
                    totalItems: this.props.count
                });
            }
        }

        /**
         * Revises if the Carousel component should change after the the user slides or clicks
         * the next arrow to the left or right.
         *
         * @param nextProps
         * @param nextState
         * @returns {boolean}
         */

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.count !== nextProps.count) {
                return true;
            }
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                Carousel,
                {
                    ref: function ref(node) {
                        return _this2.carouselRef = node;
                    },
                    additionalTransfrom: 0,
                    arrows: true,
                    centerMode: false,
                    containerClass: "container",
                    draggable: true,
                    focusOnSelect: false,
                    keyBoardControl: true,
                    minimumTouchDrag: 80,
                    responsive: {
                        desktop: {
                            breakpoint: {
                                max: 1024,
                                min: 1700
                            },
                            items: 1,
                            paritialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            paritialVisibilityGutter: 30
                        }
                    },
                    showDots: false,
                    sliderClass: "",
                    slidesToSlide: 1,
                    swipeable: true
                },
                this.renderItems()
            );
        }
    }]);

    return Carousels;
}(React.Component);

export default Carousels;