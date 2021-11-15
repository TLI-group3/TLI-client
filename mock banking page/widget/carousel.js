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
class Carousels extends React.Component {
    constructor(props){
        super()
        this.props = props;
    }

    /**
     * Generates the specified amount of card containers and assignes them their prop values
     *
     * @returns {*[]} Cards Array
     */
    renderItems() {
        let cards = [];
        for (let i = 0; i <= this.props.count; i++) {
            cards.push(<CustomCard key={i} title = {this.props.title[i]}
                                   description= {this.props.description[i]}
                                   src = {this.props.src[i]}/>);
        }
        return cards;
    }

    /**
     *  Revises if the Card shown by the Carousel has been updated to the correct one
     * @param prevProps
     */
    componentDidUpdate(prevProps) {
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
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.count !== nextProps.count) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <Carousel
                ref={node => (this.carouselRef = node)}
                additionalTransfrom={0}
                arrows
                centerMode={false}
                containerClass="container"
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                responsive={{
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
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {this.renderItems()}
            </Carousel>
        );
    }
}
export default Carousels;