import { useState } from "react"; // Import useState hook here
import NavigationComponent from "./Navigation"; // Importing Navigation bar in login.js
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {

    // useState for all four validationError : validationNameError , validationEmailError , validationContactError , vaildationAddressError
    const [validationNameError, setvalidationNameError] = useState('');
    const [validationEmailError, setvalidationEmailError] = useState('');
    const [validationPasswordError, setvalidationPasswordError] = useState('');
    const [validationConfirmPasswordError, setvalidationConfirmPasswordError] = useState('');

    const navigate = useNavigate();

    // useState for setting the name
    const [inputName, setInputName] = useState('');

    // function to handle the InputName
    function handleInputName(event) {
        setInputName(event.target.value);
    }

    // useState for setting the email
    const [inputEmail, setInputEmail] = useState('');

    // function to handle the InputEmail
    function handleInputEmail(event) {
        setInputEmail(event.target.value);
    }

    // useState for setting the contact number
    const [inputPassword, setInputPassword] = useState('');

    // function to handle the InputContact
    function handleInputPassword(event) {
        setInputPassword(event.target.value);
    }

    // useState for setting the Address
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');

    // function to handle the InputContact
    function handleInputConfirmPassword(event) {
        setInputConfirmPassword(event.target.value);
    }

    // function to handle the setErrorMessage
    const setNameErrorMessage = (errorNameMessage) => {
        setvalidationNameError(errorNameMessage)
        return false;
    }

    // function to handle setEmailErrorMessage
    const setEmailErrorMessage = (errorEmailMessage) => {
        setvalidationEmailError(errorEmailMessage)
        return false;
    }
    // function to handle setEmailContactMessage
    const setPasswordErrorMessage = (errorContactMessage) => {
        setvalidationPasswordError(errorContactMessage)
        return false;
    }
    // function to handle setEmailAddressMessage
    const setConfirmPasswordErrorMessage = (errorAddressMessage) => {
        setvalidationConfirmPasswordError(errorAddressMessage)
        return false;
    }
    // function to handle validation
    const handleValidation = async (event) => {
        event.preventDefault();
        // when inputName were left blank
        if (inputName === '') {
            console.log("Name slot is empty")
            return setNameErrorMessage("Name is left blank");
        }
        else {
            setvalidationNameError('')
        }

        // When inputEmail were left blank
        if (inputEmail === '') {
            console.log("Email slot is empty")
            return setEmailErrorMessage("Email is left blank");
        }
        else {
            setvalidationEmailError('')
        }

        // When inputContact were left blank
        if (inputPassword === '') {
            console.log("Password slot is empty")
            return setPasswordErrorMessage("Password is left blank");
        }
        else {
            setvalidationPasswordError('')
        }

        // When inputConfirmPassword were left blank
        if (inputConfirmPassword === '') {
            console.log("Confirm Password is empty")
            return setConfirmPasswordErrorMessage("Confirm Password is left blank");
        }
        else {
            setvalidationConfirmPasswordError('')
        }
        registerApiCall().then(response => {
            navigate("/");
        });
    }

    const registerApiCall = async () => {
        const url = "http://localhost:8080/register"

        const data = {
            username: inputEmail,
            name: inputName,
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
        <div id="ContactComponent">
            <NavigationComponent />
            <div className="content">
                <div className='container my-5 offset-sm-4'>

                    <h3 className="heading_h3">Register</h3>
                    {/* form will start here */}
                    <form onSubmit={handleValidation}>

                        {/* Name block will start here */}
                        <div className='row'>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row my-3">
                                        <label htmlFor="exampleInputName">Name</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="exampleInputName" placeholder="Enter your name" value={inputName} onChange={handleInputName} />

                                            {/* Validation Block start here */}
                                            <div className="row" hidden={validationNameError === ''}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationNameError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Validation Block ends here */}

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
                                    <div className="row my-3">
                                        <label htmlFor="exampleInputName">Email</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="exampleInputEmail" placeholder="Enter your email" value={inputEmail} onChange={handleInputEmail} />
                                            {/* Validation Block start here */}
                                            <div className="row" hidden={validationEmailError === ''}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationEmailError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Validation Block ends here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Email block will ends here */}

                        {/* Password block start here */}
                        <div className='row'>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row my-3">
                                        <label htmlFor="exampleInputPasword">Password</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="exampleInputPassword" placeholder="Enter your Paswword" value={inputPassword} onChange={handleInputPassword} />
                                            {/* Validation Block start here */}
                                            <div className="row" hidden={validationPasswordError === ''}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationPasswordError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Validation Block ends here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Password block ends here */}

                        {/* Confirm Password block start here */}
                        <div className='row'>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row my-3">
                                    <label for="exampleInputConfirmPasword" class="col-sm-3">Confirm Password</label>
                                        <div className="col-sm-9">
                                            <input className="form-control" id="exampleInputPassword" placeholder="Enter your Confirm" value={inputConfirmPassword} onChange={handleInputConfirmPassword} />
                                            {/* Validation Block start here */}
                                            <div className="row" hidden={validationConfirmPasswordError === ''}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationConfirmPasswordError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Validation Block ends here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Confirm Password block ends here */}

                        {/* Submit Button block start here */}
                        <div className='my-2'>
                            <button type="Submit" className="btn btn-danger submitClass" >Register</button>
                        </div>
                        {/* Submit Button block ends here */}

                    </form>
                    {/* form will ends here */}
                </div>
            </div>
        </div>
    )
}


export default RegisterComponent;