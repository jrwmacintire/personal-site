import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container';

import Carousel from 'react-bootstrap/Carousel';

export default class Slideshow extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            index: 0,
            direction: null,
            mockupURLs: [
                '../images/portfolio/DrumMachineMockup.png',
                '../images/portfolio/LiteratuAusFullscreenMockup.png',
                '../images/portfolio/MarkdownMockup.png',
                '../images/portfolio/MicTVMockup.png',
                '../images/portfolio/PersonalSiteMockup.png',
                '../images/portfolio/PersonalSiteMockupMobile.png',
                '../images/portfolio/SimonGameMockup.png',
                '../images/portfolio/TheClosingCutMockup.png',
                '../images/portfolio/TheClosingCutMockupMobile.png',
            ],
            url: '../images/portfolio/LiteratuAusFullscreenMockup.png'
        };
    }

    handleSelect(selectedIndex, e) {
        
    }

    render() {
        const { index, direction, url } = this.state;

        return (
            <div className="Slideshow">
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect} >
                    <Carousel.Item className='Slide'>
                        <img
                            className='d-block w-100'
                            src={process.cwd() + url}
                            alt={ `Slide ${index}`}></img>
                        <Carousel.Caption>
                            <h3>Slide {index}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}