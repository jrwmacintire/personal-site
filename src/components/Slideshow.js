import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container';

import Carousel from 'react-bootstrap/Carousel';
// import Slide from './Slide';

export default class Slideshow extends Component {

    constructor(props, context) {
        super(props, context);

        this.getMockups = this.getMockups.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            index: 0,
            direction: null,
            mockups: []
        };
    }

    componentDidMount() {
        this.getMockups();
    }

    getMockups() {
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log(`event.target.value: ${e.target.value}`)
        }
    }

    handleSelect(selectedIndex, e) {

    }

    render() {
        const { index, direction } = this.state;
        return (
            <div className="Slideshow">
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect} >
                    { this.files }
                </Carousel>
            </div>
        )
    }
}