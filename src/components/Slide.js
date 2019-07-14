import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Slide(props) {
    return(
        <Carousel.Item className='Slide'>
            <img src='https://dummyimage.com/600x400/000/fff' alt='dummy'></img>
            <Carousel.Caption>
                <h3>Slide {props.index}</h3>
            </Carousel.Caption>
        </Carousel.Item>
    )
}