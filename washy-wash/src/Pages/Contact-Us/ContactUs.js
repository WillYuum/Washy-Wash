import React from 'react'
import "./ContactUs.css"

import ContactUsForm from "../../components/ContactUsForm/ContactUsForm.js"

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className = "ContactUsForm-container">
                <ContactUsForm />
            </div>
         );
    }
}
 
export default ContactUs;