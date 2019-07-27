import React, { useState } from "react";
import "./Services.scss";
import { Button, Jumbotron, Container, Row, Image, Col } from "react-bootstrap";

const Services = () => {
  const [Data, setData] = useState([
    { Title: "Cloth", Price: "15" },
    { Title: "Cloth", Price: "13" },
    { Title: "Cloth", Price: "17" },
    { Title: "Cloth", Price: "11" },
    { Title: "Cloth", Price: "19" },
    { Title: "Cloth", Price: "112" },
    { Title: "Cloth", Price: "151" },
    { Title: "Cloth", Price: "157" },
    { Title: "Cloth", Price: "151" }
  ]);

  return (
    <div>
      <Jumbotron>
        <center>
          <h1>Our Services</h1>
        </center>

        <Container className="Services-container">
          <Row>
            {Data.slice(0, 6).map(data => (
              <Col text-center xs={12} md={4} lg={4}>
                <Image src="http://localhost:3000/3.jpg" fluid rounded />
                <center>
                  <h2>type :{data.Title} </h2>{" "}
                </center>
                <center>
                  <h2>Price :{data.Price} </h2>{" "}
                </center>
              </Col>
            ))}
          </Row>
        </Container>
        <p />
        <p>
          <center>
            <Button variant="primary">Learn more</Button>{" "}
          </center>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Services;

{
  /* <Col center xs={12} md={4}>
              <Image src="http://localhost:3000/4.jpg" fluid roundedCircle />
              <center>
                <h2>type : </h2>{" "}
              </center>
              <center>
                <h2>Price : </h2>{" "}
              </center>
            </Col>
            <Col center xs={12} md={4}>
              <Image src="http://localhost:3000/2.png" fluid f roundedCircle />
              <center>
                <h2>type : </h2>{" "}
              </center>
              <center>
                <h2>Price : </h2>{" "}
              </center>
            </Col>
          </Row>
          <Row>
            <Col center xs={12} md={4}>
              <Image src="http://localhost:3000/3.jpg" fluid roundedCircle />
              <center>
                <h2>type : </h2>{" "}
              </center>
              <center>
                <h2>Price : </h2>{" "}
              </center>
            </Col>
            <Col center xs={12} md={4}>
              <Image src="http://localhost:3000/4.jpg" fluid roundedCircle />
              <center>
                <h2>type : </h2>{" "}
              </center>
              <center>
                <h2>Price : </h2>{" "}
              </center>
            </Col>
            <Col center xs={12} md={4}>
              <Image src="http://localhost:3000/2.png" fluid roundedCircle />
              <center>
                <h2>type : </h2>{" "}
              </center>
              <center>
                <h2>Price : </h2>{" "}
              </center>
            </Col> */
}
