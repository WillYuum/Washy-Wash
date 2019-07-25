import React from 'react'
import "./OrderDetail.css"
import { Button, ListGroupItem, Form, ListGroup, Card } from 'react-bootstrap';
// import StarRatingComponent from 'react-star-rating-component';
// import Rater from 'react-rater';
// import 'react-rater/lib/react-rater.css';


class OrderDetails extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Card style={{ width: '20rem' }} >
                    <Card.Body className="OrderDetails-CardBody">
                        <div className="OrderDetails-CardHeader">
                            <Card.Title>Order Details</Card.Title>
                            <Card.Text> CREATE TIME: <br></br> 23/7/2019 </Card.Text>
                        </div>
                        <Card.Text> ITEMS:

    </Card.Text>
                        <Card.Text> STATUS: Pending</Card.Text>
                        <Card.Text> PRICE: 20$</Card.Text>
                        <hr></hr>
                        <div className="OrderDetails-Rater">
                            {/* <Rater total={5} rating={0} /> */}
                        </div>
                        <div>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <div className="OrderDetails-FormSubmit">
                                    <Button variant="primary" type="submit" >
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