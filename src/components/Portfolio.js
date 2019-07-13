import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Portfolio extends Component {
    render() {
        return (
            <Container className="Portfolio" >
                <Row className='portfolio-row'>
                    <Col className='portfolio-col light-gray-shadow' xs={12} sm={10} md={8} lg={6}>
                        <h2>Portfolio</h2>
                        <div>fsdfsdf;sdfjsd;kljf</div>
                        <div>fsdfsdf;sdfsfsd;kljf</div>
                        <div>fsdfsdf;sdfjsd;kljf</div>
                    </Col>
                </Row>                    
            </Container>
        )
    }
}