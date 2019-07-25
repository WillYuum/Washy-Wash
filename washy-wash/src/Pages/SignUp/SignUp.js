import React from "react";
import "./SignUp.scss";

import {Container,Col,Row,Image} from "react-bootstrap";

import SignUpForm from "../../components/SignUpForm/SignUpForm.js";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SignUp-container">
        <Container >
            <Row>
                <Col sm ="12" lg="6" >
                <Image src="https://www.washywash.com/image/cache/static/logo-824x159.png" fluid rounded  />
                </Col>
            </Row>
        </Container>
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
