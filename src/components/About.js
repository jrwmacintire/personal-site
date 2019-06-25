import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Portrait from '../images/kiama-nsw-au.png';

export default class About extends Component {
    render() {
        return (
            <Container className="About" >
                <Row>
                    <Col md={4}>
                        <img src={ Portrait } className='img-fluid' alt='Kiama, New South Wales, Australia' />
                    </Col>
                </Row>
            </Container>
        )
    }
}