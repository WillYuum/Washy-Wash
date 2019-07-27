import React from "react";
import ViewOrders from "../../components/ViewOrders/ViewOrders";
import ViewOrdersNew from "../../components/ViewOrders/ViewOrders";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import "./MyOrders.css";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import { setConstantValue } from "typescript";

class MyOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NoOfItem:"",
      Items: [
        {
          orderNo: 1,
          noItems: 8,
          createdAt: "2/4/2015",
          price: "25$",
          status: "pending"
        },
        {
          orderNo: 2,
          noItems: 2,
          createdAt: "29/7/2019",
          price: "14$",
          status: "processing"
        },
        {
          orderNo: 3,
          noItems: 5,
          createdAt: "24/8/2018",
          price: "10$",
          status: "done"
        },
        {
          orderNo: 4,
          noItems: 14,
          createdAt: "20/7/2017",
          price: "10$",
          status: "pending"
        },
        {
          orderNo: 5,
          noItems: 3,
          createdAt: "24/3/2019",
          price: "15$",
          status: "done"
        },
        {
          orderNo: 6,
          noItems: 25,
          createdAt: "26/7/2012",
          price: "10$",
          status: "processing"
        },
        {
          orderNo: 7,
          noItems: 9,
          createdAt: "24/7/2014",
          price: "30$",
          status: "done"
        }
      ]
    };
  }


  updateOrder = (NoItem)=>{
    this.setState({NoOfItem:NoItem});
    console.log("HEAsaoifhaskf=====>",this.state.NoOfItem)
  }
  render() {
    return (
      <div className="MyOrder-Container">
        <NavigationBar />
        <Container>
          <Row>
            <Col>
              <ViewOrders numberItem={this.updateOrder} Item={this.state.Items} />
            </Col>
            {/*  <Col ><ViewOrdersNew /></Col> */}
            <Col>
              <OrderDetail a={this.state.NoOfItem}  />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default MyOrders;


