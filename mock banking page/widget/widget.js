import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCard from "./carSlides";

class Carousels extends React.Component {
    constructor(props){
        super()
        this.props = props;
    }
    renderItems() {
        let cards = [];
        for (let i = 0; i <= this.props.count; i++) {
            cards.push(<CustomCard key={i} title = {this.props.title[i]}
                                   description= {this.props.description[i]}/>);
        }
        return cards;
    }
    componentDidUpdate(prevProps) {
        if (this.props.count !== prevProps.count) {
            this.carouselRef.setState({
                currentSlide: 0,
                transform: 0,
                totalItems: this.props.count
            });
        }
    }
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
                centerMode
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
                        items: 2,
                        paritialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        paritialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {this.renderItems()}
            </Carousel>
        );
    }
}
export default Carousels;