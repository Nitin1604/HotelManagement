import NavigationComponent from "./Navigation";
// Importing all images here... 
import foodCourt1 from './foodCourt1.jpg';
import foodCourt2 from './foodCourt2.jpg';
import hotel1 from './hotel1.jpg';
import hotel2 from './hotel2.jpg';
import hotel3 from './hotel3.jpg';
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
                                </div>
                            </div>
                        </div>
                        {/* card 1 block ends here */}

                        {/* card 2 block start here */}
                        <div className="col-sm-2">
                            <div className="card mx-2 my-4">
                                {/* Image 2 is inserted here */}
                                <img src={foodCourt2} alt="foodCourt2" />
                                <div className="card-body">
                                    <h5 className="card-title">Mcdonald's Shop</h5>
                                    <p className="card-text">Mcdonald's Shop is located near Noida Sector 16. It is also good place to visit and eat fast food.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 2 block ends here */}

                        {/* card 3 block start here */}
                        <div className="col-sm-2">
                            <div className="card mx-2 my-4">
                                {/* Image 3 is inserted here */}
                                <img src={hotel1} alt="hotel1" />
                                <div className="card-body">
                                    <h5 className="card-title">Hotel in Noida</h5>
                                    <p className="card-text">This hotel is located near Ducat which is in Noida Sector 16. This hotel is best for tourism to stay in this hotel.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 3 block ends here */}

                        {/* card 4 block start here */}
                        <div className="col-sm-2">
                            <div className="card mx-2 my-4">
                                {/* Image 4 is inserted here */}
                                <img src={hotel2} alt="hotel2" />
                                <div className="card-body">
                                    <h5 className="card-title">Sandal Suites Hotels, Noida</h5>
                                    <p className="card-text">Sandal Suites, operated by Lemon Tree Hotels, is situated just off the Noida-Greater Noida Expressway. </p>
                                </div>
                            </div>
                        </div>
                        {/* card 4 block ends here */}

                        {/* card 5 block start here */}
                        <div className="col-sm-2">
                            <div className="card mx-2 my-2">
                                {/* Image 5 is inserted here */}
                                <img src={hotel3} alt="hotel3" />
                                <div className="card-bpdy">
                                    <h5 className="card-title">Radisson Noida</h5>
                                    <p className="card-text">Featuring a 24-hour front desk and free WiFi throughout the property, Radisson Noida also boasts an outdoor rooftop swimming pool and 3 dining options on property.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 5 block ends here */}
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomeComponent;