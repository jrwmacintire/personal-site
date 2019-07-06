import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Solutions extends Component {
    render() {
        return (
            <Container className="Solutions" >
                <Row className='solutions-row'>
                    <Col className='solutions-col light-gray-shadow' xs={12} sm={10} md={8} lg={6}>
                        <h2>Solutions</h2>
                        <h4>Mobile-ready Designs</h4>
                        <p>Your website's layout should adapt to your user's device. I ensure your products and info are available on all devices, even offline, so that you never miss a sale or subscription.</p>
                        <hr className='hr-divider'></hr>
                        <h4>Lower Costs - Migrate To Serverless</h4>
                        <p>Whether you would like to expand your site or establish an internet presence for a small business or project, serverless provides high performance and low cost.</p>
                        <hr className='hr-divider'></hr>
                        <h4>Focus on User Experience</h4>
                        <p>Deliver your products and/or services with clear and concise webpages - contact me to discuss improving how users interact with your website.</p>
                        <div className='solutions-contact-link-wrapper'>
                            <Link to='/contact' className='solutions-contact contact-link light-gray-shadow'>Contact me</Link>
                        </div>
                    </Col>
                </Row>                    
            </Container>
        )
    }
}