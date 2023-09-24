import NavigationComponent from "./Navigation";  // Navigation bar included...
import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import hotel1 from './hotel1.jpg';

const HotelComponent = () => {
    const location = useLocation();
    const token = location.state?.token;
    const [restuarants, setRestuarants] = useState([]);

    // API Call for pageRender
    const pageRenderApiCall = async () => {
        const url = "http://localhost:8080/dashboards/uuid-12343"
        const response = await fetch(url, {

            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "signInToken": token
            },
        })
        return response.json()
    }

    return (
        <>

            {/* HotelComponent start here */}
            <div id="HotelComponent">

                <NavigationComponent />

                {/* Card content start here */}
                <div className="content">

                    {/* Row start here */}
                    <div class="row mx-4 my-3">

                        {/* card start here */}
                        <div class="card">
                            <img class="card-img-top" src={hotel1} alt="Image not found" />

                            {/* Card body start here */}
                            <div class="card-body">
                                <h5 class="card-title">McDonald</h5>

                                {/* Card text start here */}
                                <p class="card-text">
                                    Mcdonald's Shop is located near Noida Sector 16. It is also good place to visit and eat fast food.
                                </p>
                                {/* Card text ends here */}

                            </div>
                            {/* Card body ends here */}

                        </div>
                        {/* card ends here */}

                    </div>
                    {/* Row ends here */}

                </div>
                {/* Card content ends here */}

            </div>
            {/* HotelComponent ends here */}
        </>
    )

}
export default HotelComponent;