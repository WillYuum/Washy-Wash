import React from 'react';
import "./CmsOrderDetails.scss"
import CmsOrderBox from "../../components/CmsOrderBox/CmsOrderBox.js"

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
            </div>
         );
    }
}
 
export default CmsOrderDetails;