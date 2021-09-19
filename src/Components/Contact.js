import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">


         <div className="row">


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact</h4>
					   <p className="address">
						   {name}<br />
						   {city} <br />
						   {state}, {zip}<br />
						   <span>{phone}</span><br />
               <span><a href="mailto:liuming.huang@mail.utoronto.ca">{email}</a></span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
