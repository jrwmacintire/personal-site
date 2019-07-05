import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Thanks extends Component {
  render() {
    return (
      <Container className="Certifications">
        <Row className="certifications-row">
          <Col
            xs={12}
            sm={11}
            md={10}
            lg={6}
            className="certifications-col light-gray-shadow"
          >
            <h2>Contact Successful</h2>
            <hr className="hr-divider" style={{ margin: '2rem'}} />
            <p
              style={{
                margin: "5rem 0",
                textAlign: "center",
                fontSize: "1.2rem"
              }}
            >
              Thank you for contacting me.<br />
              I look forward to speaking with you.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
