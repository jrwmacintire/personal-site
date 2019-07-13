import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Certifications extends Component {
    render() {
        return (
            <Container className="Certifications" >
                <Row className='certifications-row'>
                    <Col xs={12} sm={11} md={10} lg={6} className='certifications-col light-gray-shadow'>
                        <h2>Certifications</h2>
                        {/* <hr className='hr-divider'></hr> */}
                        <ul>
                            <li>
                                <a href='https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-06-05&ci=AWS00769670'>Amazon Web Services Developer Certification</a>
                                <br></br>
                                <small>Amazon Web Services</small>
                            </li>
                            <li>
                                <a href='https://www.freecodecamp.org/certification/jrwmacintire/responsive-web-design'>Responsive Web Design Certification</a>
                                <br></br>
                                <small>Free Code Camp </small>
                            </li>
                            <li>
                                <a href='https://www.freecodecamp.org/certification/jrwmacintire/javascript-algorithms-and-data-structures'>Javascript Algorithms and Data Structures Certification</a>
                                <br></br>
                                <small>Free Code Camp </small>
                            </li>
                            <li>
                                <a href='https://www.freecodecamp.org/certification/jrwmacintire/front-end-libraries'>Front End Libraries Certification</a>
                                <br></br>
                                <small>Free Code Camp </small>
                            </li>
                            <li>
                                <a href='https://www.freecodecamp.org/certification/jrwmacintire/data-visualization'>Data Visualization Certification</a>
                                <br></br>
                                <small>Free Code Camp </small>
                            </li>
                            <li>
                                <a href='https://www.freecodecamp.org/certification/jrwmacintire/apis-and-microservices'>APIs and Microservices Certification</a>
                                <br></br>
                                <small>Free Code Camp </small>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}