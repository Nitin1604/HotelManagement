import { useLocation } from "react-router-dom";
import NavigationComponent from "./Navigation";
import { useEffect } from "react";
import { useState } from "react";

const HomeComponent = () => {


    const initApi = true;
    const location = useLocation();
    const token = location.state?.token;
    const [restuarants, setRestuarants] = useState([]);
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
//  <a href="/about">About</a> ---> This is an example how to navigate to another page. 

    // Accessing full another page by clicking on card having images , title and description...example card components in bootstrap
    const cardOneApiCall = async () => {
        const url = 'http://localhost:8080/dashboards/uuid-12343'
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
                                                <div className="card-body">
                                                    <h5 className="card-title">{restuarant.title}</h5>
                                                    <p className="card-text">{restuarant.description}</p>
                                                </div>
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