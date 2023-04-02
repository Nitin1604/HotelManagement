import NavigationComponent from "./Navigation";

const HomeComponent = () => {

    return (
        <div id="HomeComponent">
            <NavigationComponent />
            <div className="content">
                {/* card 1 block start here */}
                <div className="row">
                    <div className="col-sm-2">
                        <div className="card mx-2 my-4">
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 1 block ends here */}
                
                {/* card 2 block start here */}
                <div className="row">
                    <div className="col-sm-2">
                        <div className="card mx-2 my-4">
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 block ends here */}
            </div>
        </div>


    )
}

export default HomeComponent;