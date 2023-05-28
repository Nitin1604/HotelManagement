import NavigationComponent from "./Navigation";
// Image will only works when it was imported.
import hotel2 from './hotel2.jpg';
import hotel3 from './hotel3.jpg';
const AboutComponent = () => {

    return (
        <>
            <div id="AboutComponent">
                <NavigationComponent />
                {/* content start here */}
                <div className="content">
                    {/* Row 1 */}
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="card mx-2 my-2">
                                {/* card-body will start here */}
                                <div className="card-body1">
                                    <h5 className="card-title">Radisson Noida</h5>
                                    {/* card-text start here */}
                                    <p className="card-text">Radisson Noida Hotel has many facilities like Free Parking,
                                        Free WiFi , Swimming Pool , Bath , Air conditioning , Daily
                                        HouseKeeping , Key card access etc.
                                        <img src={hotel3} alt="hotel3" />
                                    </p>
                                    {/* card-text ends here */}
                                </div>
                                {/* card-body will ends here */}
                            </div>
                        </div>

                        <div className="col-sm-2">
                            <div className="card mx-2 my-2">
                                {/* card-body will start here */}
                                <div className="card-body1">
                                    <h5 className="card-title">FabExpress IVY Inn Sector 35</h5>
                                    {/* card-text start here */}
                                    <p className="card-text">This hotel provides many facilities such as Free WiFi, 
                                    Free Parking, Room Service , Non Smoking Rooms and Fabulous breakfast.
                                    Featuring 3-star accommodation.

                                        <img src={hotel2} alt="hotel2" />
                                    </p>
                                    {/* card-text ends here */}
                                </div>
                                {/* card-body will ends here */}
                            </div>
                        </div>
                    </div>
                    {/* Row 1 */}
                </div>
                {/* content ends here */}
            </div>
        </>
    )
}

export default AboutComponent;


