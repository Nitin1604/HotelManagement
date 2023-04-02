import NavigationComponent from "./Navigation";

const ContactComponent = () => {

    return (
        <div id="ContactComponent">
            <NavigationComponent />
            <div className="content">
                <div className='container my-5 offset-sm-4'>

                        <h2>Customer's Contact Details</h2>
                    {/* form will start here */}
                    <form>

                        {/* Name block will start here */}
                        <div className='row'>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label for="exampleInputName">Name</label>
                                    <input className="form-control" id="exampleInputName" placeholder="Enter your name here" />

                                </div>
                            </div>
                        </div>
                        {/* Name block will ends here */}

                        {/* Email block will start here */}
                        <div className='row'>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label for="exampleInputName">Email</label>
                                    <input className="form-control" id="exampleInputName" placeholder="Enter your email here" />

                                </div>
                            </div>
                        </div>
                        {/* Email block will ends here */}

                        {/* Contact block start here */}
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Contact</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your password here" />
                                </div>
                            </div>
                        </div>
                        {/* Contact block ends here */}

                        {/* Address block start here */}
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Contact</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your password here" />
                                </div>
                            </div>
                        </div>
                        {/* Address block ends here */}

                        {/* Submit Button block start here */}
                        <div className='my-2'>
                            <button type="Submit" className="btn btn-danger ">Submit</button>
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