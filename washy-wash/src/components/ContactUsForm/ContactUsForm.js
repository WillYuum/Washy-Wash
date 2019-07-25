import React from "react";

import { Form, Col, Button } from "react-bootstrap";

import "./ContactUsForm.scss";

class ContactUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ContactUsForm-Container">
        <Form >
          <h2>Contact Us</h2>
          <Form.Text>
          Got a question? We'd Love to hear from you. Send us a message and
          we'll respond as soon as possible
        </Form.Text>
          <Form.Row>
            <Col xs = "12" md="6">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" required />
            </Col>
            <Col xs = "12" md="6">
              <Form.Label>LastName*</Form.Label>
              <Form.Control type="text" required />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" required />
            
          </Form.Row>

          <Form.Row>
            <Form.Label>Phone*</Form.Label>
            <Form.Control type="tel" required />
          </Form.Row>

          <Form.Row>
            <Form.Label>Message</Form.Label>
            <Form  as="textarea" rows="3" />
          </Form.Row>

          <Form.Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default ContactUsForm;
