import React from 'react'
import ViewOrders from '../../components/ViewOrders/ViewOrders';
import ViewOrdersNew from '../../components/ViewOrders/ViewOrders';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import "./MyOrders.css";
import {Container, Row, Col} from "react-bootstrap";


class  MyOrders   extends React.Component {
    state = {  }
    render() { 
        return (
            <Container>
  
  <Row>
    <Col ><ViewOrdersNew /></Col>
    <Col ><OrderDetail /></Col>
  </Row>
  
</Container>
          );
    }
}
 

 
export default MyOrders;