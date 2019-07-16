import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import uuid from 'uuid/v4';

// Portfolio Mockup data
import MockupData from '../data/mockupData.json';

export default class Slideshow extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            index: 0,
            direction: null,
            mockups: []
        };
    }

    componentDidMount() {
        this.setState({
            mockups: [...MockupData]
        });
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
                    <Carousel.Caption 
                        key={ uuid() }
                        className="custom-carousel-caption">
                        <h4>{ mockup.name }</h4>
                        <div>
                            <p>Built with { mockup.specs }</p>
                            <p>
                                { mockup.url !== 'undefined' && // If the 'url' aren't 'undefined'
                                    <a href={ mockup.url } >{ mockup.url.substring(8, mockup.url.length) }</a> // Display 'url'
                                }
                            </p>
                        </div>
                    </Carousel.Caption>
                    <img
                        className="d-block custom-carousel-image light-gray-shadow"
                        src={ require('../images/mockups/' + mockup.filename + '.png') }
                        alt={ index }
                        key={ uuid() }
                    />
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