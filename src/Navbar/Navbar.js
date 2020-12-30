import React from "react";
import { NavLink } from 'react-router-dom';
import logo from './Logo2.png';
import './App.css';

const Navbar = () =>{

    return(
        <>
       
        <div className="main_container" id="home">
		<div className="navbar">

			<div className="logo">

				<NavLink to="/"> <img src={logo} alt="logo" /></NavLink>
                       <p className="text-primary">   <i className="fa fa-phone" ></i>+91 7359177065
					  						<br/><i className="fa fa-phone" > </i>+91 9773060982</p> 
				
			</div>

			<div className="navbar_items">
				<ul>
				<li><NavLink exact to="/">home</NavLink></li>
				<li><NavLink exact to="/about">about</NavLink></li>
				<li><NavLink  exact to="/services">services</NavLink></li>
				<li><NavLink  exact to="/sparpart">sparpart</NavLink></li>
				<li><NavLink to="/contactus" > Contact</NavLink></li>
			
			</ul>
			</div>
			
		</div>
		
		
            </div>
        </>
    );
}
export default Navbar;
