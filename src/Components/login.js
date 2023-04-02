import NavigationComponent from "./Navigation";

const LoginComponent = () => {

    return (
        <div id="LoginComponent">

            <NavigationComponent />
            <div className='container my-5 offset-sm-4'>

                {/* form will start here */}
                <form>
                    <h2>Customer's Login Page</h2>

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

                    {/* Password block start here */}
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password here" />
                            </div>
                        </div>
                    </div>
                    {/* Password block ends here */}

                    {/* Confirm Password block start here */}
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your confirm password here" />
                            </div>
                        </div>
                    </div>
                    {/* Confirm Password block ends here  */}

                    {/* Submit Button block start here */}
                    <div className='my-2 login_css'>
                        <button type="login" className="btn btn-danger ">Login</button>
                    </div>
                    {/* Submit Button block ends here */}

                </form>
                {/* form will ends here */}

            </div>
        </div>

    );
}

export default LoginComponent;