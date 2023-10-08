import NavigationComponent from "./Navigation";  // Navigation bar included...
import { useLocation } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HotelComponent = () => {
    const initApi = true;
    const location = useLocation();
    const token = localStorage.getItem("apiToken");
    const hotelId = location.state?.body?.clickedHotelId;

    const [restuarant, setRestuarant] = useState();

    // API Call for pageRender
    const pageRenderApiCall = async () => {
        const url = `http://localhost:8080/dashboards/${hotelId}`;
        
        const response = await fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "signInToken": token
            }
        })
        return response.json()
    }
    useEffect(() => {
        console.log(token)
        const promiseResponse = pageRenderApiCall();
        promiseResponse.then((resp) => {
            console.log('pageRender response: ', resp)
            setRestuarant(resp);
        })
    }, [initApi]);

    return (
        <>

            {/* HotelComponent start here */}
            <div id="HotelComponent">

                <NavigationComponent />

                {/* Card content start here */}
                <div className="content">

                    {/* Row start here */}
                    <div className="row mx-4 my-3">

                        {/* card start here */}
                        <div className="card">
                            <img className="card-img-top" src={restuarant?.imageUrl} alt="Image not found" />

                            {/* Card body start here */}
                            <div className="card-body">
                                <h5 className="card-title">{restuarant?.title}</h5>

                                {/* Card text start here */}
                                <p className="card-text">{restuarant?.description}</p>
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