import React from "react";
import { Button, Jumbotron, Container, Row, Image, Col } from "react-bootstrap";
import "./HowWeWork.scss";

const HowWeWork = () => {
  return (
    <div className="HowWeWork-container">
      <Jumbotron>
        <Row>
          <Col>
            <center className = "Main-Title">
              <h1>How We Work</h1>
            </center>
          </Col>
        </Row>

        <Container>
          <Row>
            <Col xs={12} md={4}>
              <center>
                <Image
                  center
                  src="https://images.squarespace-cdn.com/content/v1/5a525874f43b55247f49dbd1/1515347878765-GDEIB70CM0QWAYEKZM59/ke17ZwdGBToddI8pDm48kGdcJzVsZ_5M6pHDDe3Xw0ZZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7WZOYOGuexubfahzU3poi_rXWwt_Rku8Tj6LABWx7Kc7U9Z9gdCnoz9NQEuz1Moz0A/2020-clock1.png"
                  roundedCircle
                />
              </center>
              <center className="title">ORDER</center>
              <center className="description">
                Book a laundry collection in store or by a call
              </center>
            </Col>

            <Col center xs={12} md={4}>
              <center>
                <Image
                  center
                  src="https://images.squarespace-cdn.com/content/v1/5a525874f43b55247f49dbd1/1515347965933-WLDHWYK06M5ZJB1OKKWD/ke17ZwdGBToddI8pDm48kAKgoLjNQ6aJ1OnxYPBg4sFZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7UnCxNA8dHvmd7460Z7fbKGEzcjpSdFU6DwkSIQwBDOi_nLKPUGQem99tOczItW9iQ/image-asset.png?format=300w"
                  roundedCircle
                />
                <center className="title">CLEAN</center>
                <center className="description">
                  Not just clean, we beautify your clothes
                </center>
              </center>
            </Col>
            <Col center xs={12} md={4}>
              <center>
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5a525874f43b55247f49dbd1/1515347980060-8YZPJZ6WJ64MMKRL2FCL/ke17ZwdGBToddI8pDm48kAKgoLjNQ6aJ1OnxYPBg4sFZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7UnCxNA8dHvmd7460Z7fbKGEzcjpSdFU6DwkSIQwBDOi_nLKPUGQem99tOczItW9iQ/2020-return4.png?format=300w"
                  roundedCircle
                />
                <center className="title">PICK UP</center>
                <center className="description">
                  Recieve your Laundry with a perfect package
                </center>
              </center>
            </Col>
          </Row>
        </Container>
        <p />
      </Jumbotron>
    </div>
  );
};

export default HowWeWork;
