import NavigationComponent from "./Navigation";
// Import your image here 
import foodCourt1 from './foodCourt1.jpg';
import foodCourt2 from './foodCourt2.jpg';
import hotel1 from './hotel1.jpg';
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
                                    <p className="card-text">This hotel is located near Ducat which is in Noida Sector 16. This hotel is best for tourism to stay in this hotel. It has swimming pool on the roof of this hotel and has the facilties of gym also at one of its floor.</p>
                                </div>
                            </div>
                        </div>
                        {/* card 3 block ends here */}
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomeComponent;