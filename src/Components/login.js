import { useState } from "react"  // Import useState hook here
import NavigationComponent from "./Navigation"  // Importing Navigation bar in login.js
import { useNavigate } from "react-router-dom" 

const LoginComponent = () => {

    const [validationNameError, setvalidationNameError] = useState('') 
    const [validationPasswordError, setvalidationPasswordError] = useState('') 
    const [validationUserNameError, setvalidationUserNameError] = useState('') 
    const [validationUserPasswordError, setvalidationUserPasswordError] = useState('') 
    const [loginErrorMessage, setLoginErrorMessage] = useState('') 


    const navigate = useNavigate() 

    // useState for setting the name
    const [inputName, setInputName] = useState('') 

    // function to handle the InputName
    function handleInputName(event) {
        setInputName(event.target.value) 
    }

    // useState for setting the name
    const [inputPassword, setinputPassword] = useState('') 

    // function to handle the InputName
    function handleInputPassword(event) {
        setinputPassword(event.target.value) 
    }
    
    // function to handle setUserNameErrorMessage comes from server for registered username
    const setUserNameErrorMessage = (errorUserNameMessage) => {
        setvalidationUserNameError(errorUserNameMessage)
        return false 
    }

    // function to handle setUserPasswordErrorMessage comes from server for registered user password 
    const setUserPasswordErrorMessage = (errorUserPasswordMessage) => {
        setPasswordErrorMessage(errorUserPasswordMessage)
        return false 
    }

    // function to handle setNameErrorMessage
    const setNameErrorMessage = (errorNameMessage) => {
        setvalidationNameError(errorNameMessage)
        return false 
    }

    // function to handle setPasswordErrorMessage
    const setPasswordErrorMessage = (errorPasswordMessage) => {
        setvalidationPasswordError(errorPasswordMessage)
        return false 
    }

    // function to handle validation
    const handleValidation = (event) => {
        event.preventDefault() 
        // when inputName were left blank 
        if (inputName === '') {
            console.log("Name slot is empty")
            return setNameErrorMessage("Name field is empty") 
        }
        else {
            setvalidationNameError('') // set the validation error when inputName was filled. 
        }

        // When inputPassword were left blank  
        if (inputPassword === '') {
            console.log("Password slot is empty")
            return setPasswordErrorMessage("Password field is empty")  
        }
        else {
            setvalidationPasswordError('') // set the validation password when inputPassword was filled.
        }
        loginApiCall().then(response => {
            console.log(response) 
            console.log(response.data);
            if(response?.data?.error) {
                setLoginErrorMessage(response?.data?.error) 
            } else {
              navigate("/home", { state : {token : response?.signInToken }}) ;
            }
            // alert('You have been successfully logged in!!') 
        }) 
    }
    
    // loginApi call
    const loginApiCall = async () => {
        const url = "http://localhost:8080/login"

        const data = {
            username: inputName,
            password: inputPassword
        }
    // Error comes when both user name and password were input incorrectly
        console.log("Running...")

        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }) 
        return response.json()  // parses JSON response into native JavaScript objects
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

                                        {/* Server validation Block for user name will start here */}
                                            <div className="row" hidden={validationUserNameError != 'nitin82'}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-10 tx-center">{validationUserNameError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Server validation Block for user name will ends here */}

                                        {/* Server validation Block for user password will start here */}
                                            <div className="row" hidden={validationUserPasswordError !='test123'}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-10 tx-center">{validationUserPasswordError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Server validation Block for user password will ends here */}

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
                    <p style={{color:"red"}}>{loginErrorMessage}</p>
                    {/* Submit Button block ends here */}

                </form>
                {/* form will ends here */}

            </div>
        </div>

    ) 
}

export default LoginComponent 