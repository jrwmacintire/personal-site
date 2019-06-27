import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Portrait from '../images/kiama-nsw-au.png';
import '../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/brands.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/solid.css';

export default class About extends Component {
    render() {
        return (
            <Container className="About container-fluid" >
                <Row className='about-bio-row justify-content-sm-center'>
                    <Col xs={10} sm={10} md={8} lg={4} className='about-bio-col'>
                        <div className='about-info-wrapper'>
                            <p>Fullstack Javascript Developer and Designer based in Tucson, Arizona.</p>
                            <p>I am an <b>Amazon Web Services (AWS) Certified Developer</b> who builds web apps in ReactJS and NodeJS on Serverless and Express server frameworks.</p>
                            <Link to='/contact' className='about-contact-link light-gray-shadow'>Contact me</Link>
                        </div>
                    </Col>
                    <Col xs={10} sm={8} md={6} lg={4}>
                        <div className='about-img-wrapper justify-content-sm-center light-gray-shadow'>
                            <img src={ Portrait } className='img-fluid' alt='Kiama, New South Wales, Australia' />
                        </div>
                    </Col>
                </Row>
                <Row className='about-social-row justify-content-md-center'>
                    <Col sm={4} md={4} lg={4}>
                        <Button className='about-social-media-link light-gray-shadow' href='https://www.linkedin.com/in/john-macintire/'><i className="fab fa-linkedin"></i> LinkedIn</Button>
                    </Col>
                    <Col sm={4} md={4} lg={4}>
                        <Button className='about-social-media-link light-gray-shadow' href='https://github.com/jrwmacintire'><i className="fab fa-github"></i> Github</Button>
                    </Col>
                    <Col sm={4} md={4} lg={4}>
                        <Button className='about-social-media-link light-gray-shadow' href='https://www.freecodecamp.org/jrwmacintire'> FreeCodeCamp</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}