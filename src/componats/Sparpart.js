import React from "react";
import { NavLink } from 'react-router-dom';
import bike1 from './images/Airfilter.jpg';
import chain from './images/Chainrings.jpg';
import oil from './images/Oilfilter.jpg';

const Sparpart = () =>{

    return(
                    <>
            <div  className="my-5">

                    <h1 className="text-center">Spar Part</h1>

                      </div>


                     <div className="container-fluid mb-5">
                   <div className="row">
                   <div className="col-10 mx-auto">
                  <div className="row">
                     <div className="col-md-4 col-4 mx-auto">

                    <div className="cards">
             <div className="card">
                <img src={bike1} alt="myPic" className="card_img"/>
                <div className="card_info">
        
        
                <h3 className="card_title"> Air Filter</h3>
                <NavLink to="/"target="blank">
                <button className="button" >Show</button>
                </NavLink>
  
                    </div>
            
                    </div>
                    </div>
                </div>

                    <div className="col-md-4 col-4 mx-auto">

                        <div className="cards">
                         <div className="card">
                           <img src={oil} alt="myPic" className="card_img"/>
                           <div className="card_info">

                               

                                <h3 className="card_title"> Oil Filter</h3>
                                <NavLink to="/"target="blank">
                                <button className="button">Show</button>
                                </NavLink>

                                </div>

                                </div>
                                </div>



                                </div>


                                
                    <div className="col-md-4 col-4 mx-auto">

                            <div className="cards">
                            <div className="card">
                            <img src={chain} alt="myPic" className="card_img"/>
                            <div className="card_info">

                                    <h3 className="card_title">Chainrings</h3>
                                    <NavLink to="/"target="blank">
                                    <button className="button">Show</button>
                                    </NavLink>

                                    </div>

                                    </div>
                                    </div>



                                    </div>
                                    

                                        

                                         </div>
                                        </div>

                                         </div>

                                           </div>

                                        
           
              

                

        </>
    );
}
export default Sparpart;