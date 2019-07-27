import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import "./NavigationBar.scss";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // let logged_in = false;
    return (
      <div className="NavBar">
        <Navbar bg="" expand="lg" fixed="top">
          <Navbar.Brand href="#home">
            <img src="http://localhost:3000/1.png" width="100%" height="60px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              {
                //   logged_in === false ? <Nav.Link href="#link">Link</Nav.Link> : null
              }
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <Form inline>
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
              <Button className="dropnav" variant="outline-success" size="sm">
                {" "}
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    My ordars
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Button>
            </Form>
            <Button variant="outline-success" size="lg">
              Contact Us
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
