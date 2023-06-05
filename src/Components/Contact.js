import { useState } from "react";
import NavigationComponent from "./Navigation";

const ContactComponent = () => {

    const [validationError1, setvalidationError1] = useState('');
    const [validationError2, setValidationError2] = useState('');
    const [validationError3, setValidationError3] = useState('');
    const [validationError4, setValidationError4] = useState('');

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

    // function for handle the setErrorMessage
    const setErrorMessage1 = (errorMessage) => {
        setvalidationError1(errorMessage)
        return false;
    }
    const setErrorMessage2 = (errorMessage2) => {
        setValidationError2(errorMessage2)
        return false;
    }
    const setErrorMessage3 = (errorMessage3) => {
        setValidationError3(errorMessage3)
        return false;
    }
    const setErrorMessage4 = (errorMessage4) => {
        setValidationError4(errorMessage4)
        return false;
    }
    // function to handle validation
    const handleValidation = (event) => {
        event.preventDefault();
        // when inputName were left blank
        if (inputName === '') {
            console.log("Name slot is empty")
            return setErrorMessage1("Name is left blank");
        }
        else {
            setvalidationError1('')
        }
    
      // When inputEmail were left blank
      if (inputEmail === '') {
          console.log("Email slot is empty")
          return setErrorMessage2("Email is left blank");
        }
        else {
            setValidationError2('')
        }
       
        // When inputContact were left blank
        if (inputContact === '') {
            console.log("Contact slot is empty")
            return setErrorMessage3("Contact is left blank");
        }
        else {
            setValidationError3('')
        }
       
        // When inputAddress were left blank
        if (inputAddress === '') {
            console.log("Address slot is empty")
            return setErrorMessage4("Address is left blank");
        }
        else {
            setValidationError4('')
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
                                            <div className="row" hidden={validationError1 === ''}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationError1}</div>
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
                                            <div className="row" hidden={validationError2 ===''}>
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationError2}</div>
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
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="row my-2">
                                        <label htmlFor="exampleInputContact">Contact</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleInputContact" placeholder="Enter your phone no." value={inputContact} onChange={handleInputContact} />
                                            {/* Validation Block start here */}
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="row my-2 tx-red">
                                                        <div className="col-sm-12 tx-center">{validationError3}</div>
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
                                                        <div className="col-sm-12 tx-center">{validationError4}</div>
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