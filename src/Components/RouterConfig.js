import { Router, Route, BrowserRouter, Routes } from "react-router-dom"; // This is the way that how Router can be imported
// Import all web pages component here
import LoginComponent from "./login";
import HomeComponent from "./home";
import AboutComponent from "./About";
import ContactComponent from "./Contact";
import React from 'react';
import RegisterComponent from "./Register";


const RouterConfig = () => {

    return (
        <div id="RouterConfig">
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={< LoginComponent />} />                 
                    <Route exact path='/home' element={< HomeComponent />} />      
                    <Route exact path='/about' element={< AboutComponent />} />      
                    <Route exact path='/contact' element={< ContactComponent />} />  
                    <Route exact path='/register' element={< RegisterComponent />} /> 
                    <Route exact path='/page1' element={<page1Component/>}/>

                </Routes>
            </BrowserRouter>
        </div>
     )
}

export default RouterConfig;