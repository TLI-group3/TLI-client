import React from 'react';
import CarSlides from './carSlides'

class Slideshow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {curr_slide: CarSlides};
    }
}
