import React from 'react';
import "./CmsOrderDetails.scss"

import CMSViewOrders from "../../components/CMSViewOrders/CMSViewOrders.js"

class CmsOrderDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                <CMSViewOrders />
            </div>
         );
    }
}
 
export default CmsOrderDetails;