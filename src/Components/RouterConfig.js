import { Router, Route, BrowserRouter, Routes } from "react-router-dom"; // This is the way that how Router can be imported
// Import all web page component here
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
                    <Route exact path='/' element={< LoginComponent />} />
                    <Route exact path='/home' element={< HomeComponent />} />
                    <Route exact path='/about' element={< AboutComponent />} />
                    <Route exact path='/contact' element={< ContactComponent />} />
                    <Route exact path='/register' element={< RegisterComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterConfig;