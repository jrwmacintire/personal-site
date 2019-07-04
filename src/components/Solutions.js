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
                        <p>Whether you have an established customer-base or you're looking to expand your small business or project, serverless provides low cost and high performance.</p>
                        <hr className='hr-divider'></hr>
                        <h4>Focus on User Experience</h4>
                        <p>Your website's layout must be clear and concise. Ensure anyone can access your products and/or services, allow me to provide you with a quality user experience.</p>
                        <div className='solutions-contact-link-wrapper'>
                            <Link to='/contact' className='solutions-contact contact-link light-gray-shadow'>Contact me</Link>
                        </div>
                    </Col>
                </Row>                    
            </Container>
        )
    }
}