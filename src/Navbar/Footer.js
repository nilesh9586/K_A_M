import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ()=>{
   
    return(
        <>


        
		<div className="footer">
        
        
        <div className="social_icon">
                    <h1>Follow us</h1>
            <div className="Social-media">
            <NavLink to="#">
            <i className="fa fa-facebook 2x p-3" aria-hidden="true"></i>

            </NavLink>
            <NavLink to="#">
            <i className="fa fa-twitter 2x" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="#">
            <i class="fa fa-google-plus-square p-3" aria-hidden="true"></i>

            </NavLink>
            <NavLink to="">
            <i className="fa fa-instagram" aria-hidden="true"></i>
            </NavLink>
            
            </div>
            </div>

        



        
        <div className="service_center ">
            <i className="fa fa-motorcycle " >  </i>
            <p> Khodiyar Auto Mobail</p>
            
            <i className="fa fa-location-arrow 2x" >  </i>
            <p>Plot No.151/1 <br/>Nr.R.World 
                 Sector-21 Gandhinagar</p>

             <i className="fa fa-phone" ><br/>
                            +91 7359177065
                            <br/>
                            +91 9773060982
             </i>

          
            </div>


    



		<NavLink to="/"> <p className=".text-justify">{new Date().getFullYear()} @ Khodiyar Auto Mobail</p></NavLink>

        
            

        </div>
        
	

        </>
    );
}
export default Footer;