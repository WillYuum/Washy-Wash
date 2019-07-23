import React from 'react'
import ViewOrders from '../../components/ViewOrders/ViewOrders';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import "./MyOrders.css";

class MyOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className="myOrders">
                <div>
                    <h1>Here, we import the header</h1>
                </div >
                <div className="myOrders-body"> 
                    <ViewOrders />
                    <OrderDetail />
                 </div>
                <div>
                    Footer
                </div>
                
            </div>
         );
    }
}
 
export default MyOrders;