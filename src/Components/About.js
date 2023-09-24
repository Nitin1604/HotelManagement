import NavigationComponent from "./Navigation";
// Image will only works when it was imported.
import hotel2 from './hotel2.jpg';
import hotel3 from './hotel3.jpg';
import room from './room.jpg';

const AboutComponent = () => {

    return (
        <>
            {/* AboutComponent start here  */}
            <div id="AboutComponent">
                <NavigationComponent />

                {/* Content start here */}
                <div className="content">
                    {/* Row 1 */}
                    <div className="row">
                        <div className="col-sm-2">

                            {/* Card Content start here */}
                            <div className="card mx-2 my-2">
                                <img className="card-img-bottom" src={hotel3} alt="Image not found" />

                                {/* card-body will start here */}
                                <div className="card-body">
                                    <h4 className="card-title">Radisson Noida</h4>
                                    <p className="card-text">Radisson Noida Hotel has many facilities like Free Parking,
                                        Free WiFi , Swimming Pool , Bath , Air conditioning , Daily
                                        HouseKeeping .</p>
                                </div>
                                {/* card-body will ends here */}

                            </div>
                            {/* Card Content ends here */}
                        </div>

                        {/* Card content start here */}
                        <div className="col-sm-2">

                            {/* Card Content start here */}
                            <div className="card mx-2 my-2">
                                <img className="card-img-bottom" src={hotel2} alt="Image not found" />

                                {/* card-body start here */}
                                <div className="card-body">
                                    <h4 className="card-title">FabExpress Sector 35</h4>
                                    <p className="card-text">This hotel provides many facilities such as Free WiFi,
                                        Free Parking, Room Service.</p>
                                </div>
                                {/* card-body ends here */}

                            </div>
                            {/* card-body will ends here */}

                        </div>
                        {/* Card content ends here */}

                        {/* Card content start here */}
                        <div className="col-sm-2">

                            {/* Card Content start here */}
                            <div className="card mx-2 my-2">
                                <img className="card-img-bottom" src={room} alt="Image not found" />

                                {/* card-body start here */}
                                <div className="card-body">
                                    <h4 className="card-title">5 Star Hotel</h4>
                                    <p className="card-text">This is the best room of this hotel and best among other hotels too.</p>
                                </div>
                                {/* card-body ends here */}

                            </div>
                            {/* card-body will ends here */}

                        </div>
                        {/* Card content ends here */}



                    </div>
                    {/* Row 1 */}

                </div>
                {/* Content ends here */}

            </div>
            {/* AboutComponent ends here */}

        </>
    )
}

export default AboutComponent;
