import NavigationComponent from "./Navigation"; // Importing Navigation bar in login.js

const LoginComponent = () => {
    
    return (
        <div id="LoginComponent">

            <NavigationComponent />
            <div className='container my-5 offset-sm-4'>

                {/* form will start here */}
                <form>
                    <h2 className="heading_h2">Login</h2>

                    {/* Name block will start here */}
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <div className="row my-3">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <div className="col-sm-10">
                                        <input className="form-control1" id="exampleInputName" placeholder="Enter your name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Name block will ends here */}

                    {/* Password block start here */}
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <div className="row">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control2" id="exampleInputPassword1" placeholder="Enter your password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Password block ends here */}

                    {/* Submit Button block start here */}
                    <div className='my-2 login_css'>
                        <button type="login" className="btn btn-danger col-sm-3">Login</button>
                    </div>
                    {/* Submit Button block ends here */}

                </form>
                {/* form will ends here */}

            </div>
        </div>

    );
}

export default LoginComponent;