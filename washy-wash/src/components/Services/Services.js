import React, { useState } from "react";
import "./Services.scss";
import { Button, Jumbotron, Container, Row, Image, Col } from "react-bootstrap";
import Carousel from "re-carousel";
import Slider from "react-slick";

const Services = () => {
  const [Data, setData] = useState([
    {
      Title: "Jeans",
      Price: "15",
      img_link:
        "https://lp2.hm.com/hmgoepprod?set=source[/bb/a6/bba6a64503292335331611669890ac9d6b5c61d1.jpg],origin[dam],category[ladies_jeans_skinny_skinnyhigh],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
      Title: "T-Shirt",
      Price: "13",
      img_link:
        "https://d2ggl082rr1mkp.cloudfront.net/products/YJS2NY_MCEC81T025R_2_1200_1400.jpg"
    },
    {
      Title: "Shirt",
      Price: "17",
      img_link:
        "https://images-na.ssl-images-amazon.com/images/I/81gsXllXdTL._SX466_.jpg"
    },
    {
      Title: "Socks",
      Price: "11",
      img_link:
        "https://cdn.shopify.com/s/files/1/1594/4353/products/accessories_0002_171019_Tracksmith_Socks_Black_004_RTF_grande.png?v=1547050236"
    },
    {
      Title: "Formal-Top",
      Price: "19",
      img_link:
        "https://images-na.ssl-images-amazon.com/images/I/517kPkfeACL._UX522_.jpg"
    },
    {
      Title: "Formal-Pants",
      Price: "112",
      img_link:
        "https://ng.jumia.is/YJu1gChrRfDT0CIkRD4Sj9MXOdo=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/68/78077/1.jpg"
    },
    { Title: "Dress", Price: "151", img_link: "" },
    { Title: "UnderWear", Price: "157", img_link: "" },
    { Title: "Bra", Price: "151", img_link: "" }
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
                  <Image src={data.img_link} fluid roundedCircle />
                  <center className="Cloth-details">
                    <p>{data.Title}</p>
                    <hr />
                  </center>
                  <center className="Cloth-details">
                    <p>${data.Price}</p>
                  </center>
                </Col>
              ))}
            </Row>
         
        </Container>

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
