import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Portrait from '../images/kiama-nsw-au.png';

export default class About extends Component {
    render() {
        return (
            <Container className="About container-fluid" >
                <Row className='about-bio-row justify-content-md-center'>
                    <Col sm={10} md={8} lg={4} className='about-bio-col'>
                        <div className='about-info-wrapper'>
                            <p>Fullstack Javascript Developer and Designer based in Tucson, Arizona.</p>
                            <p>I am an <b>Amazon Web Services (AWS) Certified Developer</b> who builds web apps in ReactJS and NodeJS on Serverless and Express server frameworks.</p>
                            <Link to='/contact' className='about-contact-link'>Contact me</Link>
                        </div>
                    </Col>
                    <Col sm={10} md={8} lg={4}>
                        <div className='about-img-wrapper'>
                            <img src={ Portrait } className='img-fluid' alt='Kiama, New South Wales, Australia' />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}