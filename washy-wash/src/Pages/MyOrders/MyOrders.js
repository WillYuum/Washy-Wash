import React from 'react'
import ViewOrders from '../../components/ViewOrders/ViewOrders';
import ViewOrdersNew from '../../components/ViewOrders/ViewOrders';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import "./MyOrders.css";
import {Container, Row, Col} from "react-bootstrap";


class  MyOrders   extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      Items: [
       
        {orderNo:1, noItems: 8,  createdAt:"2/4/2015", price:"20$", status: "pending"},
        {orderNo:2, noItems: 2,  createdAt:"29/7/2019", price:"14$", status: "processing"},
        {orderNo:3, noItems:5,  createdAt:"24/8/2018", price:"10$", status: "done"},
        {orderNo:4, noItems: 14,  createdAt:"20/7/2017", price:"10$", status:"pending"},
        {orderNo:5, noItems: 3,  createdAt:"24/3/2019", price:"15$", status:"done"},
        {orderNo:6, noItems:25,  createdAt:"26/7/2012", price:"10$", status:"processing"},
        {orderNo:7, noItems: 9,  createdAt:"24/7/2014", price:"30$",status:"done"},
      ]
    }
}
    
    render() { 
        return (
            <Container>
  
  <Row>
    <Col><ViewOrders Items={this.state.Items}/></Col>
   {/*  <Col ><ViewOrdersNew /></Col> */}
    <Col ><OrderDetail  Items={this.state.Items}/></Col>
  </Row>
  
</Container>
          );
    }
}
 

 
export default MyOrders;