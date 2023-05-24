import NavigationComponent from "./Navigation";
const AboutComponent = () => {

    return (
        <>
            <div id="AboutComponent">
                <NavigationComponent />
                <div className="content">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="card mx-2 my-2">
                                <div className="card-body">
                                    <h5 className="card-title">Radisson Noida</h5>
                                    <p>Radisson Noida Hotel has many facilities like Free Parking,
                                        Free WiFi , Swimming Pool , Bath , Air conditioning , Daily 
                                        HouseKeeping , Key card access etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComponent;



