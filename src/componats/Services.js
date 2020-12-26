import React from "react";
import bike1 from './images/Motorcycle1.jpg';
import bike2 from './images/Motorcycle3.jpg';
import bike4 from './images/Motorcycle5.jpeg';
import bike5 from './images/Motorcycle6.jpeg';
import bike6 from './images/Motorcycle7.jpeg';
import bike7 from './images/sctooter1.jpeg';

const Services =()=>{

    return(
        
        <div>
      

      
        
        <div className="services" id="services">
		<h1 className="title">our Services</h1>

		<p>Bike servicing is a process to keep your vehicle maintained so that it can run for a long time. 
        It helps you to run your vehicle smoothly for a longer period.
         Bike servicing will cover many things such as normal checkup of the vehicle,
         engine functions, air filters, greasing or lubrication.:</p>
       
		<div className="diff_services">
			<div className="diff_services_item">
				<img src={bike1} alt="service_image"/>
				<h3 className="sub_title">Oil and filter change</h3>
				<p>Oil and filter change...</p>
			</div>
			<div className="diff_services_item">
				<img src={bike2} alt="service_image"/>
				<h3 className="sub_title">Air filter. ...</h3>
				<p>Air filter </p>
			</div>
			<div className="diff_services_item">
				<img src={bike4}   alt="service_image"/>
				<h3 className="sub_title">Spark plugs. ...</h3>
				<p>spark plugs changes .....</p>
			</div>
            
		</div>
        <div className="diff_services">

        <div className="diff_services_item">
				<img src={bike5}   alt="service_image"/>
				<h3 className="sub_title">Drive chain adjustment. ..</h3>
				<p>Drive chain adjustment. ..</p>
			</div>
            <div className="diff_services_item">
				<img src={bike6}   alt="service_image"/>
				<h3 className="sub_title">Oiling cables, levers and pivots. ..</h3>
				<p>Oiling cables, levers and pivots. ..</p>
			</div>
            <div className="diff_services_item">
				<img src={bike7}   alt="service_image"/>
				<h3 className="sub_title">Oiling cables, levers and pivots. ..</h3>
				<p>Oiling cables, levers and pivots. ..</p>
			</div>
            </div>


			
	</div>
    </div>
        
    );
}
export default Services;