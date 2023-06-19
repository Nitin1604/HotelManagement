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
            {/* This is the way in which router can be written with component as <BrowserRouter> , <Routes> and lastly
            <Route> and corresponding closing all the components as </BrowserRouter> , </Routes> and </Routes> */}
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={< LoginComponent />} />            {/* Navigate to login page */}      
                    <Route exact path='/home' element={< HomeComponent />} />         {/* Navigate to home page */}
                    <Route exact path='/about' element={< AboutComponent />} />       {/* Navigate to about page */}
                    <Route exact path='/contact' element={< ContactComponent />} />   {/* Navigate to contact page */}
                    <Route exact path='/register' element={< RegisterComponent />} /> {/* Navigate to register page*/}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterConfig;