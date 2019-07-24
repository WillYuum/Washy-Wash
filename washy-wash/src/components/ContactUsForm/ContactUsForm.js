import React from "react";
import "./ContactUsForm.css";

class ContactUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ContactUsForm-Container">
     
          <div className="ContactUsForm-box">
            <div className="ContactUsForm-MainTitle">
              <h1 className = "ContactUsForm-MainTitle--text ContactUsForm-first-Text ">Contact Us</h1>
              <p className = "ContactUsForm-MainTitle--text ContactUsForm-Second-Text">
                Got a question? We'd Love to hear from you. Send us a message
                and we'll respond as soon as possible
              </p>
            </div>
            <form className = "ContactUsForm-MainForm">
              <div className=" ContactUsForm-form ContactUsForm-name_form">
                <p>Name*</p>
                <input className = "ContactUsForm-input" type="text" id="name" required />
              </div>
              <div className=" ContactUsForm-form ContactUsForm-email_form">
                <p>Email*</p>
                <input className = "ContactUsForm-input" type="email" id="email" required />
              </div>
              <div className="ContactUsForm-form ContactUsForm-textarea_form">
                  <p>Message</p>
                <textarea className = "ContactUsForm-textarea"
                  rows="4"
                  cols="150"
                />
              </div>
              <input  className="ContactUsForm-Send ContactUsForm-input" value ="Send Message" type="submit" />
            </form>
    
        </div>
      </div>
    );
  }
}

export default ContactUsForm;
