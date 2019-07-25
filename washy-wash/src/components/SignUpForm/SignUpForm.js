import React from "react";
import "./SignUpForm.scss";

import { Form, Col, Button } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <div className="SignUpForm-container">
      <Form>
        <h2>Sign Up</h2>
        <Form.Row>
          <Col md="6">
            <Form.Label>Name*</Form.Label>
            <Form.Control type="text" required />
          </Col>
          <Col md="6">
            <Form.Label>LastName*</Form.Label>
            <Form.Control type="text" required />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Row>

        <Form.Row>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" />
        </Form.Row>

        <Form.Row>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SignUpForm;
