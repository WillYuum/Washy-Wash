import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Card from 'react-bootstrap/Card'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ViewOrders.css"
class ViewOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div  >
                
                <div className="viewOrders">
                    <div>
                        <h3 className="viewOrders-header">Current orders</h3>
                        <Card className="viewOrders-card-previous">
                            <div >
                                <ListGroup variant="flush" className="viewOrders-mapping" >
                                    <ListGroup.Item >Order#</ListGroup.Item>
                                    <ListGroup.Item># of items</ListGroup.Item>
                                    <ListGroup.Item>Created at</ListGroup.Item>
                                    <ListGroup.Item>Price</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <Button  className="viewOrders-Button"variant="primary"  >
                            View more
                            </Button>
                        </Card>
                    </div>
                <br>
                </br>
                <hr></hr>
                
                    <div>
                        <h3 className="viewOrders-header">Previous Orders</h3>
                        <Card className="viewOrders-card-previous">
                                <div >
                                    <ListGroup variant="flush" className="viewOrders-mapping" >
                                        <ListGroup.Item >Order#</ListGroup.Item>
                                        <ListGroup.Item># of items</ListGroup.Item>
                                        <ListGroup.Item>Created at</ListGroup.Item>
                                        <ListGroup.Item>Price</ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <Button variant="primary" className="viewOrders-Button" >
                                View more
                                </Button>
                            </Card>
                    </div>
                </div>
                

            </div>
        );
    }
}
export default ViewOrders;
