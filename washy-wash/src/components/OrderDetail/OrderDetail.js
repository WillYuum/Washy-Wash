import React from 'react'
import "./OrderDetail.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button' 
// import StarRatings from '.react-star-ratings';
class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className="orderDetails">
               
                <Card className="orderDetails-card">
                                <h1> Order Details </h1>
                                <ListGroup variant="flush" className="orderDetails-list" >
                                    <ListGroup.Item >Create Time:</ListGroup.Item>
                                    <ListGroup.Item>ITEMS</ListGroup.Item>
                                    <ListGroup.Item>STATUS:</ListGroup.Item>
                                    <ListGroup.Item>PRICE:</ListGroup.Item>
                                    <br></br>
                                    <hr></hr>
                                    <Form className="orderDetails-form">
                                        <Form.Label name="message" >Add your Feedback</Form.Label>
                                        <Form.Control as="textarea" rows="4" name="message" />
                                    </Form>
                                        {/* <StarRatings
                                        rating={this.state.rating}
                                        starRatedColor="blue"
                                        changeRating={this.changeRating}
                                        numberOfStars={6}
                                        name='rating'
                                        /> */}
                                         <br/><Button variant="light" >Submit</Button>
                                </ListGroup>
                            
                        </Card>
            </div>
         );
    }
}
 
export default OrderDetail;