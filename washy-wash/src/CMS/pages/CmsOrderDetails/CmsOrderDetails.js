import React from 'react';
import "./CmsOrderDetails.scss"
import CmsOrderBox from "../../components/CmsOrderBox/CmsOrderBox.js"

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
                <CmsOrderBox/>
                <CMSViewOrders />
            </div>
         );
    }
}
 
export default CmsOrderDetails;