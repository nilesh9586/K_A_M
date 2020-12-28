
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Navbar/Footer';
import Home from './componats/Home';
import About from './componats/About';
import Services from './componats/Services';
import ContactUs from './componats/ContactUs';
import Sparpart from './componats/Sparpart';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
  
    <Navbar/>
    
    

    <Switch>

    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/services" component={Services}/>
    <Route exact path="/sparpart" component={Sparpart}/>
    <Route exact path="/contactus" component={ContactUs}/>
  
    
    



    </Switch>


    <Footer/>
    
</BrowserRouter>

    </div>
  );
}

export default App;
