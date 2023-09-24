import { useLocation, useNavigate } from "react-router-dom";
import NavigationComponent from "./Navigation";
import { useEffect } from "react";
import { useState } from "react";

const HomeComponent = () => {
    const initApi = true;
    const location = useLocation();
    const token = location.state?.token;
    const [restuarants, setRestuarants] = useState([]);
    const navigate = useNavigate()

    // DashboardApi call
    const homeApiCall = async () => {
        const url = "http://localhost:8080/dashboard"
        const response = await fetch(url, {

            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "signInToken": token
            },
        })
        return response.json()
    }

    useEffect(() => {
        console.log(token)
        const promiseResponse = homeApiCall();
        promiseResponse.then((resp) => {
            console.log('Dashboard Response in promise', resp)
            setRestuarants(resp);
        })
    }, [initApi]);
    /*
     <a href="/about">About</a> ---> This is an example how to navigate to another page. 
    Burger King Wikipedia : https://en.wikipedia.org/wiki/Burger_King
    */


    const handleClick = (hotelId) => {
        console.log("HandleClick clicked", hotelId);
        navigate("/pageRender", {
            state: {
                body: {
                    clickedHotelId: hotelId
                }
            }
        }
        );
    }


    return (
        <>
            <div id="HomeComponent">
                <NavigationComponent />
                <div className="content">

                    {/* First row contains 5 different images and their description also */}
                    <div className="row">
                        {
                            restuarants.map((restuarant) => {
                                return (
                                    <>
                                        <div className="col-sm-2">
                                            <div className="card mx-2 my-4">

                                                {/* All image are used by the API Call */}
                                                <img src={restuarant.imageUrl} alt="foodCourt1" />
                                                {/* All image are used by the API Call */}

                                                {/* Card body start here */}
                                                <div className="card-body">
                                                    <h5 className="card-title">{restuarant.title}</h5>
                                                    <p className="card-text">{restuarant.description}</p>
                                                </div>
                                                {/* Card body ends here */}
                                                
                                                <button className="btn btn-danger my-2" onClick={() => handleClick(restuarant.id)}>View More</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomeComponent;