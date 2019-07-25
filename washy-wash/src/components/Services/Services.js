import React from 'react'
import "./Services.css"
import { Button, Jumbotron, Container, Row, Image, Col } from 'react-bootstrap';


class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <div>
        <Jumbotron>
          <center><h1>Our Services</h1></center>

          <Container>
            <Row >
              <Col text-center xs={12} md={4} >
                <Image src="http://localhost:3000/3.jpg" fluid roundedCircle />
                <center><h2>type : </h2> </center>
                <center><h2>Price : </h2> </center>


              </Col>
              <Col center xs={12} md={4}>
                <Image src="http://localhost:3000/4.jpg" fluid roundedCircle />
                <center><h2>type : </h2> </center>
                <center><h2>Price : </h2> </center>

              </Col>
              <Col center xs={12} md={4}>
                <Image src="http://localhost:3000/2.png" fluid f roundedCircle />
                <center><h2>type : </h2> </center>
                <center><h2>Price : </h2> </center>

              </Col>


            </Row>
            <Row >
              <Col center xs={12} md={4}>
                <Image src="http://localhost:3000/3.jpg" fluid  roundedCircle />
                <center><h2>type : </h2> </center>
                <center><h2>Price : </h2> </center>
              </Col>
              <Col center xs={12} md={4}>
                <Image src="http://localhost:3000/4.jpg" fluid roundedCircle />
                <center><h2>type : </h2> </center>
                <center><h2>Price : </h2> </center>

              </Col>
              <Col center xs={12} md={4}>
                <Image src="http://localhost:3000/2.png" fluid roundedCircle />
                <center><h2>type : </h2> </center>
                <center><h2>Price : </h2> </center>

              </Col>


            </Row>
          </Container>
          <p>
          </p>
          <p>
            <center>
              <Button variant="primary">Learn more</Button> </center>
          </p>
        </Jumbotron>

      </div>
    );
  }
}

export default Services;

