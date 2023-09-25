import NavigationComponent from "./Navigation";
// Image will only works when it was imported.
import hotel2 from './hotel2.jpg';
import hotel3 from './hotel3.jpg';
import room from './room.jpg';
import tajLakePalace from './tajLakePalace.jpeg';
import hotel4 from './hotel4.jpg';
import hotel5 from './hotel5.jpg';
import hotel6 from './hotel6.jpg';
import hotel7 from './hotel7.jpg';
import hotel8 from './hotel8.jpg';

const AboutComponent = () => {

    return (
        <>
            {/* AboutComponent start here  */}
            <div id="AboutComponent">
                <NavigationComponent />

                {/* Content start here */}
             
                <main role="main">

                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1>Best Hotel in India</h1>
                            <p className="lead text-muted">These are the some awesome hotel in India you must visit these hotels.</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2 mx-2">Hotel open hours: 8am to 9pm</a>
                                <a href="#" className="btn btn-danger my-2">Hotel closed hours: 9pm to 8am</a>
                            </p>
                        </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <div className="container">

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                    <img className="card-img-bottom" src={hotel2} alt="Image not found" />

                                        <div className="card-body">
                                        <h6 className="card-title">Radisson Noida</h6>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                    <img className="card-img-bottom" src={hotel3} alt="Image not found" />

                                        <div className="card-body">
                                        <h6 className="card-title">FabExpress Sector 35</h6>
                                            <p className="card-text">This hotel provides many facilities such as Free WiFi,
                                        Free Parking, Room Service.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                    <img className="card-img-bottom" src={room} alt="Image not found" />

                                        <div className="card-body">
                                        <h6 className="card-title">5 star hotel</h6>
                                            <p className="card-text">This is the best room of this hotel and best among other hotels too.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                       <img className="card-img-bottom" src={tajLakePalace} alt="Image not found" />
                                      

                                        <div className="card-body">
                                        <h6 className="card-title">Taj Lake Palace</h6>
                                            <p className="card-text">This is the best hotel among other hotel in India and it is situated in between of lake.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                    <img className="card-img-bottom" src={hotel4} alt="Image not found" />

                                        <div className="card-body">
                                        <h6 className="card-title">THE OBEROI UDAIVILAS</h6>
                                            <p className="card-text">Every single room of this luxurious hotel reflects elegance and is designed to bestow the utmost comfort.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                    <img className="card-img-bottom" src={hotel5} alt="Image not found" />

                                        <div className="card-body">
                                        <h6 className="card-title">LEELA PALACE UDAIPUR</h6>
                                            <p className="card-text">Located by Lake Pichola, each of the 80 luxurious rooms offer panoramic views of mountains and tranquil lakes.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                    <img className="card-img-bottom" src={hotel6} alt="Image not found" />
                                        <div className="card-body">
                                        <h6 className="card-title">TAJ ARAVALI RESORT & SPA</h6>
                                            <p className="card-text"> From the ornate marble flooring to elaborate chandeliers, every part of the resort is designed to perfection.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                    <img className="card-img-bottom" src={hotel7} alt="Image not found" />

                                        <div className="card-body">
                                        <h6 className="card-title">RAMBAGH PALACE</h6>
                                            <p className="card-text">The Pink city of India, Jaipur has an array of architectural wonders that mirrors India’s glorious heritage.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                    <img className="card-img-bottom" src={hotel8} alt="Image not found" />

                                        <div className="card-body">
                                        <h6 className="card-title">OBEROI RAJVILAS</h6>
                                            <p className="card-text">A gem in the vibrant city of Jaipur, Oberoi Rajvilas is unmistakably one of the best hotels in India.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#">Back to top</a>
                        </p>
                        <p>Best Hotel in India &copy; All these hotel are best and fully air conditioner.</p>
                        
                    </div>
                </footer>

            </div>
            {/* Content ends here */}

            {/* AboutComponent ends here */ }

        </>
    )
}

export default AboutComponent;
