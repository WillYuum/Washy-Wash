import React from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";

import CMS from "./CMS/pages/CmsPage/Cms.js";
import LandingPage from "./Pages/LandingPage/landingPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      Customer: [],
      cloth: [],
      token: ""
    };
    console.log("CHECK SOMETHING HERE", this.props);
    console.log("Customers", this.state.Customer);
  }

  componentWillMount() {
    console.log("I have token");
    const token = localStorage.getItem("token");
    if (token) this.setState({ token });
  }

  componentDidMount() {
    this.getUsers();
    this.getcloth();
  }

  /**
   * @function getToken it's role is to get the token from Hero.js(Child) to App so I can be able to login to CMS.
   * @param {string} token it's the token I want to take from LandingPage.js <-- MainPage.js <-- Hero.js.
   */
  getToken = token => {
    this.setState({ token });
  };

  
  /**
   * @function emptyToken it's role is to delete token using the button which is in CMS.js --> SideNav.js.
   */
  emptyToken = () => {
    this.setState({token:""})
  };
  //--------------------- USERS CRUD ---------------------------------------------
  getUsers = async () => {
    try {
      const req = await fetch("http://localhost:8000/api/v1/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const res = await req.json();
      this.setState({ Customer: res.data });
      console.log("Customer State", this.state.Customer);
    } catch (err) {
      console.log("it didn't work :(");
      console.log(err);
    }
  };

  CreateUser = async params => {
    try {
      let body = {
        first_name: params.newData.first_name,
        middle_name: params.newData.middle_name,
        last_name: params.newData.last_name,
        email: params.newData.email,
        password: params.newData.password,
        roles: [1]
      };
      console.log(body);
      const req = await fetch("http://localhost:8000/api/v1/users", {
        method: "POST",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(body)
      });
      const answer = await req.json();
      console.log(answer);
      if (answer.success) {
        const customers = [...this.state.Customer, ...answer.data];
        this.setState({ Customer: customers });
      }
    } catch (err) {
      console.log("creating user didn't work ====>", err);
    }
  };

  //------------------------------USERS CRUD ---------------------------------

  //------------------------------CLOTHS CRUD---------------------------------
  getcloth = async () => {
    try {
      const req = await fetch("http://localhost:8000/api/v1/items-types", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const res = await req.json();
      console.log("cloth DATA===============>", res);
      this.setState({ cloth: res });
    } catch (err) {
      console.log("Get Cloth didn't work :(");
      console.log(err);
    }
  };

  //------------------------------CLOTHS CRUD---------------------------------

  render() {
    //this helps not use {this.state.Customer} || {this.state.cloth}
    const { token, Customer, cloth} = this.state;

    if (token) {
      return (
        <Route
          path="/"
          render={() => (
            <CMS
              CustomersData={Customer}
              clotheDataUse={cloth}
              createUserFunc={this.CreateUser}
              emptyToken={this.emptyToken}
              
            />
          )}
        />
      );
    } else {
      return (
        <div>
          <Switch>
            <Route path="/" render={()=><LandingPage getToken={this.getToken}/>} />
          </Switch>
        </div>
      );
    }
  }
}

export default withRouter(App);

// ClothDetails:[
//   {Name:"shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"70$"},
//   {Name:"T-shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"30$"},
//   {Name:"Black shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"20$"},
//   {Name:"T-shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"25$"},
//   {Name:"T-shirt", SRC:"https://m.media-amazon.com/images/I/71nsJDgB8QL._AC_UL320_.jpg", Price:"20$"},
// ],

// Items: [
//   {
//     orderNo: 1,
//     noItems: 8,
//     createdAt: "2/4/2015",
//     price: "25$",
//     status: "pending"
//   },
//   {
//     orderNo: 2,
//     noItems: 2,
//     createdAt: "29/7/2019",
//     price: "14$",
//     status: "processing"
//   },
//   {
//     orderNo: 3,
//     noItems: 5,
//     createdAt: "24/8/2018",
//     price: "10$",
//     status: "done"
//   },
//   {
//     orderNo: 4,
//     noItems: 14,
//     createdAt: "20/7/2017",
//     price: "10$",
//     status: "pending"
//   },
//   {
//     orderNo: 5,
//     noItems: 3,
//     createdAt: "24/3/2019",
//     price: "15$",
//     status: "done"
//   },
//   {
//     orderNo: 6,
//     noItems: 25,
//     createdAt: "26/7/2012",
//     price: "10$",
//     status: "processing"
//   },
//   {
//     orderNo: 7,
//     noItems: 9,
//     createdAt: "24/7/2014",
//     price: "30$",
//     status: "done"
//   }
// ],

// Data:[
//   {
//     key: 'john',
//     value: 'John Doe',
//   },
//   {
//     key: 'jane',
//     value: 'Jane Doe',
//   },
//   {
//     key: 'mary',
//     value: 'Mary Phillips',
//   },
//   {
//     key: 'robert',
//     value: 'Robert',
//   },
//   {
//     key: 'karius',
//     value: 'Karius',
//   },
// ],
