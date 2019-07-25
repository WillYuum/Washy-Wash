import React from 'react'
import { Button ,Jumbotron,Container ,Row,Image,Col} from 'react-bootstrap';
import "./HowWeWork.css"


const HowWeWork = () => {
    return ( 
        <div>
<Jumbotron>
 <center><h1>How We Work</h1></center> 

 <Container>
  <Row >
    <Col  center xs={12} md={3}>
      <Image  src="http://localhost:3000/3.jpg" roundedCircle/>
      <center> step1</center>
    </Col>
    <Col center xs={12} md={3}>
      <Image src="http://localhost:3000/4.jpg" roundedCircle />
      <center> step2</center>

    </Col>
    <Col center xs={12} md={3}>
      <Image src="http://localhost:3000/2.png" roundedCircle />
      <center> step3</center>

    </Col>
    <Col center xs={12} md={3}>
      <Image src="http://localhost:3000/5.jpg" roundedCircle />
      <center> step4</center>

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
 

 
export default HowWeWork;