import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import "./CmsOrderDetails.scss"
import CmsOrderBox from "../../components/CmsOrderBox/CmsOrderBox.js"

import CMSViewOrders from "../../components/CMSViewOrders/CMSViewOrders.js"

class CmsOrderDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            NoOfItem: "",
            status: "",
            Price: "",
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
        updateOrder = (NoItem, status, Price, createTime) => {
            this.setState({
              NoOfItem: NoItem,
              status: status,
              Price: Price,
              createdAt: createTime
            });
          };

         

    render() { 
        return ( 
            <div className="MyOrder-Container">
            <Container >
              <Row>
              <Col md="8">
                  <CMSViewOrders
                     numberItem={this.updateOrder}
                     Item={this.state.Items}
                   
                  />
                </Col>
                <Col md="4">
                  <CmsOrderBox
                  _Items={this.state.NoOfItem}
                  _Status={this.state.status}
                  _Price={this.state.Price}
                  _CreateAt={this.state.createdAt}
                  />
                </Col>
                {/*  <Col ><ViewOrdersNew /></Col> */}
            
              </Row>
            </Container>
          </div>
            // <div>
            //     <CmsOrderBox/>
            //     <CMSViewOrders />
            // </div>
         );
    }
}
 
export default CmsOrderDetails;