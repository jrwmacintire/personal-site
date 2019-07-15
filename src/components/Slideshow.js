import React, { Component } from 'react'

// import Container from 'react-bootstrap/Container';
// import DrumMachineMockup from '../images/DrumMachineMockup.png';
// import LiteratuAusFullMockup from '../images/LiteratuAusFullscreenMockup.png';
// import Slide from './Slide';

import Carousel from 'react-bootstrap/Carousel';

export default class Slideshow extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        
    }

    render() {
        const { index, direction } = this.state;

        const mockups = [
            'DrumMachineMockup',
            'LiteratuAusFullMockup',
            'MarkdownMockup',
            'MicTVMockup',
            'MicTVMobileMockup',
            'PersonalSiteMockup',
            'PersonalSiteMobileMockup',
            'TheClosingCutMockup',
            'TheClosingCutMobileMockup'
        ];

        const slides = mockups.map((name, index) => {
            return (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ `../images/${name}.png`}
                        alt={ index }
                        key={ index }
                    />
                    <Carousel.Caption>
                        <h3>{ name }</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        });
        console.log('slides: ', slides);

        return (
            <div className="Slideshow">
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect} >
                    { slides }
                </Carousel>
            </div>
        )
    }
}