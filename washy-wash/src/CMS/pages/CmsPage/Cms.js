import React from "react";
import "./Cms.scss";

import { Redirect, Route, Link, Switch, withRouter } from "react-router-dom";

import SideNav from "../../components/SideNav/SideNav.js";
import CreateMainOrder from "../../components/CreateMainOrder.js/CreateMainOrder.js";
import Cloth from "../../components/ClothTypeMain/ClothTypeMain.js";
import Customer from "../../components/CustomerMain/CustomerMain.js";
import Employees from "../../components/EmployeesMain/EmployeesMain.js";

import CmsOrderDetails from "../CmsOrderDetails/CmsOrderDetails.js";

class Cms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemsInCMS: [],
      DataInCMS: []
    };
  }

  componentWillReceiveProps(newProps) {
    const ItemsInCMS = newProps.ItemsToCMS;
    const DataInCMS = newProps.DataToCMS;
    this.setState({ ItemsInCMS, DataInCMS });
    // newProps.ItemsToCMS
  }

  render() {
    return (
      <div>
        <div className="CMS-Container">
          <div className="SideNav">
            <SideNav />
          </div>

          {/* HERE IS THE MAIN PAGE FOR CMS */}

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="MainPage">
                  <div className="MainPage-container">
                    <div className="box">
                      {" "}
                      <br />{" "}
                      {/* <CreateMainOrder
                        // MainOrders={this.state.Data}
                        // ClothDetails={this.props.ClothDetails}
                      /> */}
                    </div>
                    <div className="box">
                      <Customer CustomersData={this.props.CustomersData} UseCreateCustomer={this.props.createUserFunc}/>
                    </div>
                    <div className="box">
                      <Employees />
                    </div>
                    <div className="box">
                      <Cloth />
                    </div>
                  </div>
                </div>
              )}
            />
            <Route path="/CmsOrderDetails" render={() => <CmsOrderDetails />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Cms;
