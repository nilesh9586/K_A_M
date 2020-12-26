import React from 'react';
import { NavLink } from 'react-router-dom';



const Home = ()=>{

    return (<>
    	<div className="banner_image">
               
               <div className="banner_content">
                   <h1>All type bike services and <br/>two wheeler spare parts wholesale in 

                   <br/><span>Khodiyar Auto Mobail</span>
                       
                   </h1>
                  
                   <p>
                
                A lot of the basic servicing jobs are easy enough to do yourself 
                 
                   </p>

                   <div className="btn">
					<NavLink to="/sparpart">
						Learn More
					</NavLink>
				</div>
                    
               </div>
            
               
           </div>
    
    
    
    </>
    );
}

export default Home;
