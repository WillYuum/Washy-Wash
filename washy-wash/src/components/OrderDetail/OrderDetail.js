import React from "react";
import "./OrderDetail.scss";
import { Button, ListGroupItem, Form, ListGroup, Card } from "react-bootstrap";
// import StarRatingComponent from 'react-star-rating-component';
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

class OrderDetails extends React.Component {
  state = {};
  render() {
    return (
      <div className="OrderDetails-container">
        <Card className="OrderDetails-Card">
          <Card.Body className="OrderDetails-CardBody">
            <div className="OrderDetails-CardHeader">
              <Card.Title>Order Details</Card.Title>
              <Card.Text>
                {this.props._CreateAt}
              </Card.Text>
            </div>
            <Card.Text> ITEMS: {this.props._Items}</Card.Text>
            <Card.Text> STATUS: {this.props._Status}</Card.Text>
            <Card.Text> Price: ${this.props._Price}</Card.Text>
            <hr />
            <div>
              <Rater className="OrderDetails-Rater" total={5} rating={0} />
            </div>
            <div>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label />
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <div className="OrderDetails-FormSubmit">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default OrderDetails;
