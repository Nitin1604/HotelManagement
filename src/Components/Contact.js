import NavigationComponent from "./Navigation";

const ContactComponent = () => {

    return (
        <div id="ContactComponent">
            <NavigationComponent />
            <div className="content">
                <div className='container my-5 offset-sm-4'>

                    <h3 className="heading_h3">Contact Details</h3>
                    {/* form will start here */}
                    <form>

                        {/* Name block will start here */}
                        <div className='row'>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row">
                                        <label for="exampleInputName">Name</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="exampleInputName" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Name block will ends here */}

                        {/* Email block will start here */}
                        <div className='row'>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row">
                                         <label for="exampleInputName">Email</label>
                                          <div className="col-sm-10">
                                            <input className="form-control" id="exampleInputEmail" placeholder="Enter your email"/>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Email block will ends here */}

                        {/* Address block start here */}
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row">
                                        <label for="exampleInputAddress">Address</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter your address"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Address block ends here */}

                        {/* Contact block start here */}
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row">
                                        <label for="exampleInputContact">Contact</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleInputContact" placeholder="Enter your phone no."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact block ends here */}

                        {/* Submit Button block start here */}
                        <div className='my-2'>
                            <button type="Submit" className="btn btn-danger submitClass">Submit</button>
                        </div>
                        {/* Submit Button block ends here */}

                    </form>
                    {/* form will ends here */}

                </div>
            </div>
        </div>
    )
}

export default ContactComponent;