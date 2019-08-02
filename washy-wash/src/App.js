import React from "react";
import LandingPage from "./Pages/LandingPage/landingPage";
import Myorders from "./Pages/MyOrders/MyOrders";

import Main from "./Pages/MainPage/Main.js";
import CMS from "./CMS/pages/CmsPage/Cms.js";
import { Route, Link, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
  state = {

    loggedIn: false,


    ClothDetails:[ 
      {Name:"shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"70$"},
      {Name:"T-shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"30$"},
      {Name:"Black shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"20$"},
      {Name:"T-shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"25$"},
      {Name:"T-shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"20$"},
    ],

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
    ],

    Data:[
      {
        key: 'john',
        value: 'John Doe',
      },
      {
        key: 'jane',
        value: 'Jane Doe',
      },
      {
        key: 'mary',
        value: 'Mary Phillips',
      },
      {
        key: 'robert',
        value: 'Robert',
      },
      {
        key: 'karius',
        value: 'Karius',
      },
    ],

    

  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              if (this.state.loggedIn) {
                console.log("You are in cms")
                return <CMS 
                ItemsToCMS={this.state.Items} DataToCMS={this.state.Data}
                ClothDetails={this.state.ClothDetails} />;
              }
              return <LandingPage />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
