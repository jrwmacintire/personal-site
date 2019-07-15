import React, { Component } from 'react';
import uuid from 'uuid/v4';

// import Container from 'react-bootstrap/Container';
// import DrumMachineMockup from '../images/mockups/DrumMachineMockup.png';
// import LiteratuAusFullMockup from '../images/mockups/LiteratuAusFullscreenMockup.png';
// import MarkdownMockup from '../images/mockups/MarkdownMockup.png';
// import MicTVMockup from '../images/mockups/MicTVMockup.png';
// import MicTVMockupMobile from '../images/mockups/MicTVMobileMockup.png';
// import PersonalSiteMobileMockup from '../images/mockups/PersonalSiteMockupMobile.png';
// import PersonalSiteMockup from '../images/mockups/PersonalSiteMockup.png';
// import TheClosingCutMockupMobile from '../images/mockups/TheClosingCutMockupMobile.png';
// import TheClosingCutMockup from '../images/mockups/TheClosingCutMockup.png';
// import Slide from './Slide';

import Carousel from 'react-bootstrap/Carousel';

export default class Slideshow extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            index: 0,
            direction: null,
            mockups: [
                { 
                    name: 'Literatu Essay Competition - Australia',
                    filename: 'LiteratuAusFullscreenMockup',
                    url: undefined,
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: `MicTV's Band Website`,
                    filename: 'MicTVMockup',
                    url: 'https://mictvmusic.com/',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'MicTVMusic.com - Mobile view',
                    filename: 'MicTVMobileMockup',
                    url: 'https://mictvmusic.com',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'JohnMacIntire.com',
                    filename: 'PersonalSiteMockup',
                    url: undefined,
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: `JohnMacIntire.com - mobile view`,
                    filename: 'PersonalSiteMockupMobile',
                    url: undefined,
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'TheClosingCut.com',
                    filename: 'TheClosingCutMockup',
                    url: 'https://theclosingcut.com',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'TheClosingCut.com - mobile view',
                    filename: 'TheClosingCutMockupMobile',
                    url: 'https://theclosingcut.com',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'United States GDP, made with D3.js',
                    filename: 'GDPGraphD3Mockup',
                    url: 'https://codepen.io/jrwmacintire/full/xJgRwR',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'Product Treemap, made with D3.js',
                    filename: 'ProductTreemapD3Mockup',
                    url: 'https://codepen.io/jrwmacintire/full/RBexaB',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'Land Surface Temperature Heatmap, made with D3.js',
                    filename: 'HeatmapD3Mockup',
                    url: 'https://codepen.io/jrwmacintire/full/BPZBpm',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'US Education Chloropleth, made with D3.js',
                    filename: 'EducationChloroplethD3Mockup',
                    url: 'https://codepen.io/jrwmacintire/full/mjBNLa',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'Doping in Cycling Scatter Plot, made with D3.js',
                    filename: 'ScatterPlotD3Mockup',
                    url: 'https://codepen.io/jrwmacintire/full/VdgevO',
                    specs: 'Test specs, replace, please'
                },
                {
                    name: 'Drum Machine (Codepen.io App)',
                    filename: 'DrumMachineMockup',
                    url: undefined,
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'Tic-Tac-Toe, Codepen.io App',
                    filename: 'TicTacToeMockup',
                    url: 'https://codepen.io/jrwmacintire/full/jzYqKr',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'Simon, Codepen.io App',
                    filename: 'SimonGameMockup',
                    url: 'https://codepen.io/jrwmacintire/full/odzbBy',
                    specs: 'Test specs, replace, please'
                },
                { 
                    name: 'Markdown App, Codepen.io App',
                    filename: 'MarkdownMockup',
                    url: 'https://codepen.io/jrwmacintire/full/XqLOdJ',
                    specs: 'Test specs, replace, please'
                },
            ]
        };
    }

    handleSelect(selectedIndex, event) {
        console.log(`selectedIndex: ${selectedIndex}, event: ${event}`);
        if(event === 'next') this.nextMockup();
        if(event === 'prev') this.prevMockup();
    }

    nextMockup() {
        console.log(`Move 'index' forwards`);
        if(this.state.index < this.state.mockups.length) {
            this.setState({
                index: this.state.index + 1
            });
        } else {
            this.setState({
                index: 0
            });
        }
    }

    prevMockup() {
        console.log(`Move 'index' backwards`);
        if(this.state.index !== 0) {
            this.setState({
                index: this.state.index - 1
            });
        } else {
            this.setState({
                index: this.state.mockups.length
            })
        }
    }

    render() {
        const { index, direction, mockups } = this.state;

        const slides = mockups.map((mockup, index) => {
            return (
                <Carousel.Item key={ uuid() }>
                    <img
                        className="d-block custom-carousel-image light-gray-shadow"
                        src={ require('../images/mockups/' + mockup.filename + '.png') }
                        alt={ index }
                        key={ uuid() }
                    />
                    <Carousel.Caption 
                        key={ uuid() }
                        className="custom-carousel-caption">
                        <h3>{ mockup.name }</h3>
                        <div>
                            <p><u>Project Details</u>: { mockup.specs }</p>
                            <p>
                                <a href={ mockup.url } >{ mockup.url }</a>
                            </p>
                        </div>
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