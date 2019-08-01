import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./ViewOrders.css";
import {
  Button,
  Table,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

/**
 *
 *
 *
 * ViewOrders a box of the orders
 *
 *
 *
 *@module ViewOrders
 *
 * */

class ViewOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentCategory: "processing"
    };
  }

  

  /**  * @function   ViewOrders
   * @prop {function} numberItem prop brought from MyOrders.js(Parent) that holds a function
   *  to send data back to MyOrders(Parent)
   * 
   *  */
  
  render() {
    return (
      <div>
        <div>
          <ButtonToolbar className="ViewOrders-StatusNav">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton name="Pending">
                <a
                  onClick={() => this.setState({ CurrentCategory: "pending" })}
                >
                  Pending
                </a>
              </ToggleButton>
              <ToggleButton
                onClick={() => this.setState({ CurrentCategory: "processing" })}
                name="Procesing"
              >
                Processing
              </ToggleButton>
              <ToggleButton
                onClick={() => this.setState({ CurrentCategory: "done" })}
                name="Done"
              >
                Done
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </div>
        <br /> <br />
        <div className="ViewOrders-Scrollbar">
          {this.props.Item.map(order => {
            if (order.status === this.state.CurrentCategory) {
              return (
                <div>
                  <Card className="ViewOrders-Card">
                    <Card.Body>
                      <div className="ViewOrders-CardBody">
                        <Card.Text>
                          Order #: <br /> {order.orderNo}
                        </Card.Text>
                        <Card.Text>
                          # of Items : <br /> {order.noItems}
                        </Card.Text>
                        <Card.Text>
                          Created at : <br /> {order.createdAt}
                        </Card.Text>
                        <Card.Text>
                          Price :<br /> ${order.price}
                        </Card.Text>
                      </div>
                      <div className="ViewOrders-CardButton">
                        <Button
                          onClick={() =>
                            this.props.numberItem(
                              order.noItems,
                              order.status,
                              order.price,
                              order.createdAt
                            )
                          }
                          variant="primary"
                        >
                          View More
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default ViewOrders;
