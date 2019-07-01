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
                        <p>Your site shouldn't be limited to users on a conventional PC. I ensure your products and info are available on all devices (even offline), without sacificing your user's experience.</p>
                        <hr className='hr-divider'></hr>
                        <h4>Lower Costs - Migrate To Serverless</h4>
                        <p>By distributing your website across Amazon Web Services' 'serverless' technologies I keep your web hosting costs low. Your new website will be designed to keep costs low, without sacrificing your customer's security or your content's accessibility.</p>
                        <hr className='hr-divider'></hr>
                        <h4>Focus on User Experience</h4>
                        <p>Your users expect to receive your products and/or information fast. Your website or web app's interfaces will reflect the importance of a quality user interaction.</p>
                        <div className='solutions-contact-link-wrapper'>
                            <Link to='/contact' className='solutions-contact contact-link light-gray-shadow'>Contact me</Link>
                        </div>
                    </Col>
                </Row>                    
            </Container>
        )
    }
}