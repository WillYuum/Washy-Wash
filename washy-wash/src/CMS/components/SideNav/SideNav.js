import React from "react";
import "./SideNav.scss";
import { Nav, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {emptyToken} = this.props;
    return (
      <div>
        <button onClick={emptyToken}>Logout</button>
        <div className="SideNav-flex-container">
          <Nav defaultActiveKey="/home" className="SideNav-flex-column">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link eventKey="link-1">Setting</Nav.Link>
            <Nav.Link eventKey="link-2">LOGOUT</Nav.Link>
            <ButtonToolbar>
              <Link to={"/CmsOrderDetails"}>
                <Button className="SideNav-Edit" variant="primary">
                  Edit Order{" "}
                </Button>
              </Link>
              <Button className="SideNav-AuditLogger" variant="primary">
                Audit Logger
              </Button>
            </ButtonToolbar>
          </Nav>
        </div>
      </div>
    );
  }
}

export default SideNav;
