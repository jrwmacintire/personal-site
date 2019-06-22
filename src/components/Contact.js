import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Experience extends Component {
    render() {
        return (
            <div className="Contact fluid" >
                <h1>Contact</h1>
                <Form>
                <Form.Group as={Row} controlId="name">
                    <Form.Label column sm={3}>
                      Full Name:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="name" placeholder="Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="email">
                    <Form.Label column sm={3}>
                      Email:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm={3}>
                      Phone:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="phone" placeholder="Phone Number" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 9, offset: 3 }}>
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Form.Group>
                </Form>
            </div>
        )
    }
}