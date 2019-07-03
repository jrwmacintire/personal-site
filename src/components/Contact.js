import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import validateEmail from "../scripts/validation/validateEmail";
import validateName from "../scripts/validation/validateName";
import validatePhone from "../scripts/validation/validatePhone";
import validateMessage from "../scripts/validation/validateMessage";

export default class Contact extends Component {
  addSuccessLabel = input => {
    // console.log(`adding Success label to $(input.name)...`);
    const el = document.getElementById(input.name);
    el.classList.remove("input-error");
    el.classList.remove("input-warning");
    el.classList.add("input-success");
  };

  addWarningLabel = input => {
    // console.log(`adding Success label to $(input.name)...`);
    const el = document.getElementById(input.name);
    el.classList.remove("input-error");
    el.classList.remove("input-success");
    el.classList.add("input-warning");
  };

  addErrorLabel = input => {
    // console.log(`adding Error label to $(input.name)...`);
    const el = document.getElementById(input.name);
    el.classList.remove("input-success");
    el.classList.remove("input-warning");
    el.classList.add("input-error");
  };

  updateFieldLabels = inputs => {
    inputs.forEach(input => {
      const feedbackEl = document.getElementById(`${input.name}-feedback`);
      if (input.valid) {
        this.addSuccessLabel(input);
      } else {
        if (input.name === "phone") this.addWarningLabel(input);
        else this.addErrorLabel(input);
        feedbackEl.innerHTML = input.feedback;
      }
    });
  };

  validateInputs = inputs => {
    console.log(`%cValidating form inputs...`, "color: lightsalmon");
    let validatedInputs = [];
    console.log("inputs:", inputs);
    inputs.forEach(input => {
      let result;
      let validatedInput;
      switch (input.name) {
        case "name":
          result = validateName(input.value);
          validatedInput = { ...input, ...result };
          validatedInputs.push(validatedInput);
          break;
        case "email":
          result = validateEmail(input.value);
          validatedInput = { ...input, ...result };
          validatedInputs.push(validatedInput);
          break;
        case "phone":
          result = validatePhone(input.value);
          validatedInput = { ...input, ...result };
          validatedInputs.push(validatedInput);
          break;
        case "message":
          result = validateMessage(input.value);
          validatedInput = { ...input, ...result };
          validatedInputs.push(validatedInput);
          break;
        default:
          console.log(`Unable to validate field w/ name: ${input.name}`);
      }
    });
    console.log("%cValidated inputs:\n", "color: limegreen", validatedInputs);
    return validatedInputs;
  };

  postForm = (inputs, url) => {
    console.log(
      `%cInputs have been validated and form is ready to be POSTed!`,
      "color: orange",
      inputs,
      "\nurl:",
      url
    );

    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        "Access-Control-Allow-Origin": "localhost, johnmacintire.com",
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: inputs
    })
      .then(response => response.json())
      .then(obj => {
        this.props.history.push("/thanks");
      });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const inputs = document.getElementsByClassName("form-input");
    let inputObjects = [];
    for (let i = 0; i < inputs.length; i++) {
      // console.log(inputs[i].value);
      inputObjects.push({
        name: inputs[i].id,
        value: inputs[i].value
      });
    }
    // console.log(`inputsObjects:`, inputObjects);

    const validatedInputs = this.validateInputs(inputObjects);
    const validInputs = validatedInputs.map(input => {
      return { name: input.name, valid: input.valid };
    });
    this.updateFieldLabels(validatedInputs);
    console.log(
      "%cvalidInputs:\n",
      "color: lightpink",
      validInputs
    );

    const formUrl =
      "https://5hgab1z0b4.execute-api.us-west-2.amazonaws.com/dev/contact";

    const inputToJson = JSON.stringify(inputObjects);
    this.postForm(inputToJson, formUrl);
  };

  render() {
    return (
      <div className="Contact light-gray-shadow">
        <h1>Contact</h1>
        <Form id="form" className="Form" method="POST">
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={3} xs={3}>
              Full Name * :
            </Form.Label>
            <Col sm={9} xs={9}>
              <Form.Control
                type="name"
                className="form-input"
                placeholder="Name"
                required={true}
              />
              <small id="name-feedback" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="email">
            <Form.Label column sm={3} xs={3}>
              Email * :
            </Form.Label>
            <Col sm={9} xs={9}>
              <Form.Control
                type="email"
                className="form-input"
                placeholder="Email"
                required={true}
              />
              <small id="email-feedback" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="phone">
            <Form.Label column sm={3} xs={3}>
              Phone :
            </Form.Label>
            <Col sm={9} xs={9}>
              <Form.Control
                type="phone"
                className="form-input"
                placeholder="Phone Number"
              />
              <small id="phone-feedback" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="message">
            <Form.Label column sm={3} xs={3}>
              Message * :
            </Form.Label>
            <Col sm={9} xs={9}>
              <Form.Control
                as="textarea"
                type="message"
                className="form-input"
                rows="3"
                placeholder="Enter your message here..."
                required={true}
              />
              <small id="message-feedback" />
            </Col>
          </Form.Group>
          <div className="required-field-notice">
            <small>Fields with an * are required.</small>
          </div>
          <Form.Group as={Row}>
            <Col>
              <Button type="submit" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
