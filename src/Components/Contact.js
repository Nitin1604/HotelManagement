import { useState } from "react"; // Import useState hook here
import NavigationComponent from "./Navigation"; // Importing Navigation bar in login.js

const ContactComponent = () => {
    
    // useState for all four validationError : validationNameError , validationEmailError , validationContactError , vaildationAddressError
    const [validationNameError, setvalidationNameError] = useState('');
    const [validationEmailError, setvalidationEmailError] = useState('');
    const [validationContactError, setvalidationContactError] = useState('');
    const [validationAddressError, setvalidationAddressError] = useState('');

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
    const [inputContact, setInputContact] = useState('');

    // function to handle the InputContact
    function handleInputContact(event) {
        setInputContact(event.target.value);
    }

    // useState for setting the Address
    const [inputAddress, setInputAddress] = useState('');

    // function to handle the InputContact
    function handleInputAddress(event) {
        setInputAddress(event.target.value);
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
    const setContactErrorMessage = (errorContactMessage) => {
        setvalidationContactError(errorContactMessage)
        return false;
    }
    // function to handle setEmailAddressMessage
    const setAddressErrorMessage = (errorAddressMessage) => {
        setvalidationAddressError(errorAddressMessage)
        return false;
    }
    // function to handle validation
    const handleValidation = (event) => {
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
        if (inputContact === '') {
            console.log("Contact slot is empty")
            return setContactErrorMessage("Contact is left blank");
        }
        else {
            setvalidationContactError('')
        }
       
        // When inputAddress were left blank
        if (inputAddress === '') {
            console.log("Address slot is empty")
            return setAddressErrorMessage("Address is left blank");
        }
        else {
            setvalidationAddressError('')
        }
    }

    return (
        <div id="ContactComponent">
            <NavigationComponent />
            <div className="content">
                <div className='container my-5 offset-sm-4'>

                    <h3 className="heading_h3">Contact Details</h3>
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
                                    <div className="row my-2">
                                        <label htmlFor="exampleInputName">Email</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="exampleInputEmail" placeholder="Enter your email" value={inputEmail} onChange={handleInputEmail} />
                                            {/* Validation Block start here */}
                                            <div className="row" hidden={validationEmailError ===''}>
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

                        {/* Contact block start here */}
                        <div className='row'>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row my-2">
                                        <label htmlFor="exampleInputName">Contact</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="exampleInputContact" placeholder="Enter your contact" value={inputContact} onChange={handleInputContact} />
                                            {/* Validation Block start here */}
                                            <div className="row" hidden={validationContactError ===''}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationContactError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Validation Block ends here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact block ends here */}

                        {/* Address block start here */}
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row my-2">
                                        <label htmlFor="exampleInputAddress">Address</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter your address" value={inputAddress} onChange={handleInputAddress} />
                                            {/* Validation Block start here */}
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationAddressError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Validation Block ends here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Address block ends here */}

                        {/* Submit Button block start here */}
                        <div className='my-2'>
                            <button type="Submit" className="btn btn-danger submitClass" >Submit</button>
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