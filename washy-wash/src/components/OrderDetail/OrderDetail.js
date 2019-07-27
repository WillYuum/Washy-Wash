import React from "react";
import "./OrderDetail.css";
import { Button, ListGroupItem, Form, ListGroup, Card } from "react-bootstrap";
// import StarRatingComponent from 'react-star-rating-component';
// import Rater from 'react-rater';
// import 'react-rater/lib/react-rater.css';

class OrderDetails extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Card className="OrderDetails-Card">
          <Card.Body className="OrderDetails-CardBody">
            <div className="OrderDetails-CardHeader">
              <Card.Title>Order Details</Card.Title>
              {/* <Card.Text>
                CREATE TIME: <br /> {this.props.a}
              </Card.Text> */}
            </div>
            <Card.Text> ITEMS: {this.props.a}</Card.Text>
            <Card.Text> STATUS: {this.props.a}</Card.Text>
            <Card.Text> Price: ${this.props.a}</Card.Text>
            <hr />
            <div className="OrderDetails-Rater">
              {/* <Rater total={5} rating={0} /> */}
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
