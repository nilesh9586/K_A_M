import React from 'react';
import { NavLink } from 'react-router-dom';



const ContactUs = ()=>{

    return (<>
    	<div className="contactus" id="contactus">
		<h1 className="title">contact us</h1>
		<div className="form_wrapper">
			<div className="form_input">
				<input type="text" placeholder="Email"/>
			</div>
			<div className="form_input">
				<input type="text" placeholder="Subject"/>
			</div>
			<div className="form_input">
				<textarea placeholder="Message"></textarea>
			</div>
			<div className="btn">
				<NavLink to="#">Submit</NavLink>
			</div>
		</div>
	</div>
    
    </>
    );
}

export default ContactUs;
