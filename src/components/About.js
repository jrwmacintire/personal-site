import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Portrait from '../images/kiama-nsw-au.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class About extends Component {
    render() {
        return (
            <Container className="About container-fluid" >
                <Row className='about-bio-row'>
                    <Col xs={10} sm={10} md={8} lg={4} className='about-bio-col'>
                        <div className='about-info-wrapper'>
                            <p>Fullstack Javascript Developer and Designer based in Tucson, Arizona.</p>
                            <p>I am an <b>Amazon Web Services Certified Developer</b> who builds web apps in ReactJS and NodeJS on Serverless and Express server frameworks.</p>
                            <Link to='/contact' className='about-contact-link light-gray-shadow'>Contact me</Link>
                        </div>
                    </Col>
                    <Col xs={10} sm={8} md={6} lg={4}>
                        <div className='about-img-wrapper light-gray-shadow'>
                            <img src={ Portrait } className='img-fluid' alt='Kiama, New South Wales, Australia' />
                        </div>
                    </Col>
                </Row>
                <Row className='about-social-row'>
                    <Col sm={4} md={4} lg={4}>
                        <Button className='about-social-media-link light-gray-shadow' href='https://www.linkedin.com/in/john-macintire/'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</Button>
                    </Col>
                    <Col sm={4} md={4} lg={4}>
                        <Button className='about-social-media-link light-gray-shadow' href='https://github.com/jrwmacintire'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github</Button>
                    </Col>
                    <Col sm={4} md={4} lg={4}>
                        <Button className='about-social-media-link light-gray-shadow' href='https://www.freecodecamp.org/jrwmacintire'> FreeCodeCamp</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}