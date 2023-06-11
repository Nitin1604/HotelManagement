import { useState } from "react"; // Import useState hook here
import NavigationComponent from "./Navigation"; // Importing Navigation bar in login.js
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {

    const [validationNameError, setvalidationNameError] = useState('');
    const [validationPasswordError, setvalidationPasswordError] = useState('');

    const navigate = useNavigate();

    // useState for setting the name
    const [inputName, setInputName] = useState('');

    // function to handle the InputName
    function handleInputName(event) {
        setInputName(event.target.value);
    }


    // useState for setting the name
    const [inputPassword, setinputPassword] = useState('');

    // function to handle the InputName
    function handleInputPassword(event) {
        setinputPassword(event.target.value);
    }

    // function to handle setNameErrorMessage
    const setNameErrorMessage = (errorNameMessage) => {
        setvalidationNameError(errorNameMessage)
        return false;
    }

    // function to handle setPasswordErrorMessage
    const setPasswordErrorMessage = (errorPasswordMessage) => {
        setvalidationPasswordError(errorPasswordMessage)
        return false;
    }

    // function to handle validation
    const handleValidation = (event) => {
        event.preventDefault();
        // when inputName were left blank
        if (inputName === '') {
            console.log("Name slot is empty")
            return setNameErrorMessage("Name field is empty");
        }
        else {
            setvalidationNameError('')
        }

        // When inputPassword were left blank
        if (inputPassword === '') {
            console.log("Password slot is empty")
            return setPasswordErrorMessage("Password field is empty");
        }
        else {
            setvalidationPasswordError('')
        }
        loginApiCall().then(response => {
            navigate("/home");
            // alert('You have been successfully logged in!!') 
        });
    }


    const loginApiCall = async () => {
        const url = "http://localhost:8080/login"

        const data = {

            username: inputName,
            password: inputPassword
        }

        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    return (
        <div id="LoginComponent">

            <NavigationComponent />
            <div className='container my-5 offset-sm-4'>

                {/* form will start here */}
                <form onSubmit={handleValidation}>
                    <h2 className="heading_h2">Login</h2>

                    {/* Name block will start here */}
                    <div className='row'>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <div className="row my-3">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <div className="col-sm-10">
                                        <input className="form-control1" id="exampleInputName" placeholder="Enter your name" value={inputName} onChange={handleInputName} />

                                        {/* Validation Block will start here */}
                                        <div className="row" hidden={validationNameError === ''}>
                                            <div className="col-sm-12">
                                                <div className="row my-2 tx-red">
                                                    <div className="col-sm-10 tx-center">{validationNameError}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Validation Block will ends here */}

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
                                        <input type="password" className="form-control2" id="exampleInputPassword1" placeholder="Enter your password" value={inputPassword} onChange={handleInputPassword} />

                                        {/* Validation Block will start here */}
                                        <div className="row" hidden={validationPasswordError === ''}>
                                            <div className="col-sm-12">
                                                <div className="row my-2 tx-red">
                                                    <div className="col-sm-10 tx-center">{validationPasswordError}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Validation BLock will ends here */}

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