import NavigationComponent from "./Navigation";
// Import your image here 
import foodCourt1 from './foodCourt1.jpg';
import foodCourt2 from './foodCourt2.jpg';
const HomeComponent = () => {

    return (
        <>
            <div id="HomeComponent">
                <NavigationComponent />
                <div className="content">
                    {/* card 1 block start here */}
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="card mx-2 my-4">
                                {/* Image 1 is inserted here */}
                                <img src={foodCourt1} alt="foodCourt1" />
                                <div className="card-body">
                                    <h5 className="card-title">Burger King</h5>
                                    <p className="card-text">Burger King is located near Noida Electronic City Metro Station. It is good place to eat fast food.</p>
                                    {/* <a href="#" className="btn btn-danger">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        {/* card 1 block ends here */}

                        {/* card 2 block start here */}
                        <div className="col-sm-2">
                            <div className="card mx-2 my-4">
                                <img src={foodCourt2} alt="foodCourt2" />
                                <div className="card-body">
                                    <h5 className="card-title">Mcdonald's Shop</h5>
                                    <p className="card-text">Mcdonald's Shop is located near Noida Sector 16. It is also good place to visit and eat fast food.</p>
                                    {/* <a href="#" className="btn btn-danger">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 block ends here */}
                </div>
            </div>

        </>

    )
}

export default HomeComponent;