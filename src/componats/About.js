import React from "react";
import { NavLink } from 'react-router-dom';
//import bike1 from '../Navbar/bike1.jpeg';
const About = ()=>{

    return(

            <>
            <div className="about_image">
          
            
                    	<div className="about" id="about">

                <h1>
                    About Us
                </h1>

                <p className="text-primary">
                   A small business start for 1980 in the Gandhinagar  Khodiyar Auto Mobail,
                   About of all type Motorcycle service and sparpart 
                </p>
                <div className="btn">
                    <NavLink to="about">
                        Learn More
                    </NavLink>
                </div>

                </div>
                </div>
            
            </>

    );
}

export default About;