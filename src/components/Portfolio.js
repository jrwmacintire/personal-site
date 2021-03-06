import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Slideshow from './Slideshow'

export default class Portfolio extends Component {
    render() {
        return (
            <Container className="Portfolio" >
                <Row className='portfolio-row'>
                    <Col className='portfolio-col light-gray-shadow' xs={12} sm={12} md={12} lg={9}>
                        <h2>Portfolio</h2>
                        {/* <hr className='hr-divider'></hr> */}
                        <Slideshow />
                        {/* <hr className='hr-divider'></hr> */}
                    </Col>
                </Row>                    
            </Container>
        )
    }
}