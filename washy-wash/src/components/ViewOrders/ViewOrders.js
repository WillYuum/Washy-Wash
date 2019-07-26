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
        this.state = { Items: this.props.Items
        // orderNumber:this.props.location.state.Items.orderNo,
        // NumberOfItems:this.props.location.state.Items.noItems,
        // TimeCreated:this.props.location.state.Items.createdAt,
        // ThePrice:this.props.location.state.Items.price,
        }
    }
    // handdleChange= event => {
    //      if (this.props.Items)
    // };

    
    render() { 
        return (  
            <div>
            <div>
        <ButtonToolbar className="ViewOrders-StatusNav">
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
      <ToggleButton name="Pending" >Pending</ToggleButton>
      <ToggleButton name="Procesing" >Processing</ToggleButton>
      <ToggleButton name="Done" >Done</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
            </div>
            
           <br></br> <br></br>
           <div className="ViewOrders-Scrollbar">
{this.state.Items.map(x=>
        <div>
     <Card className="ViewOrders-Card"> 
       <Card.Body  >
              <div className="ViewOrders-CardBody">
              <Card.Text> Order#:  <br></br> { x.orderNo} </Card.Text>
              <Card.Text># of Items : <br></br> {x.noItems}  </Card.Text>
              <Card.Text>Created at : <br></br>  {x.createdAt} </Card.Text>
              <Card.Text>Price: <br></br> {x.price}  </Card.Text>
          </div>
          <div className="ViewOrders-CardButton">
<Button variant="primary" onClick={this.handdleChange} >View More</Button>
</div>

</Card.Body>
</Card>
</div>
       )
    }
</div>



</div>

        );
    }
}
 
export default  ViewOrders;

