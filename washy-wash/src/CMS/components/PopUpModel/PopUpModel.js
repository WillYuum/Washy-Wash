import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./PopUpModel.scss";
import ClothCountBox from "./ClothCountBox.js";
import PopUpSearch from "./PopUpSearch.js";
class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "",

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


  render() {
    return (
      <Modal
      saveOrder = {this.saveOrderFunc}
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div>
            <Modal.Title id="contained-modal-title-vcenter">
              Customer Name: <PopUpSearch />
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          <h6>Choose cloth</h6>

          <div className="ModalBody-ScrollBar">
            {this.state.Items.map(order => {
              return (
                <div className="ModalBody-ClothBox">
                  {" "}
                  <ClothCountBox />
                </div>
              );
            })}
          </div>
        </Modal.Body>

        <Modal.Footer className="ModalFooter">
          <Form>
            <Form.Group
              className="ModalSubmitForm"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Order Details</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form>

          <div className="TotalPrice">
            <p>Total Price:50</p>
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
            <Button onClick={this.props.onHide}>Confirm Order</Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default MyVerticallyCenteredModal;
