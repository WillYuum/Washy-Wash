import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Card from 'react-bootstrap/Card'
import Form from "react-bootstrap/Form";
import {Button,Table, ButtonToolbar, ToggleButtonGroup ,ToggleButton } from "react-bootstrap";

import "./ViewOrders.css"
   

class  ViewOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() { 
        return (  
            <div>
            <div>
        <ButtonToolbar className="ViewOrders-StatusNav">
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
      <ToggleButton value={1}>Pending</ToggleButton>
      <ToggleButton value={2}>Processing</ToggleButton>
      <ToggleButton value={3}>Done</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
            </div>
            
           <br></br> <br></br>

        <div>
     <Card className="ViewOrders-Card"> 

  <Card.Body  >
      <div className="ViewOrders-CardBody">
    <Card.Text>Order #: <br></br>1 </Card.Text>
    <Card.Text># of Orders : <br></br>10   </Card.Text>
    <Card.Text>Created at : <br></br>6/7/2019   </Card.Text>
    <Card.Text>Price: <br></br>20$    </Card.Text>
</div>

<div className="ViewOrders-CardButton">
<Button variant="primary">View More</Button>
</div>

</Card.Body>
</Card>
</div>
</div>

        );
    }
}
 
export default  ViewOrders;

