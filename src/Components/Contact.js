import { useState } from "react";
import NavigationComponent from "./Navigation";

    const ContactComponent = () => {

        const [validationError, setValidationError] = useState('');
        
        // useState for setting the name
        const [inputName, setInputName] = useState('');
    
        // function to handle the InputName
        function handleInputName(event) {
            setInputName(event.target.value);
        }
    
        // useState for setting the email
        const [inputEmail , setInputEmail] = useState('');
    
        // function to handle the InputEmail
        function handleInputEmail(event) {
            setInputEmail(event.target.value);
        }
    
        // useState for setting the contact number
        const [inputContact , setInputContact] = useState('');
        
        // function to handle the InputContact
        function handleInputContact(event) {
            setInputContact(event.target.value);
        }
        
        // useState for setting the Address
        const [inputAddress , setInputAddress] = useState('');
        
        // function to handle the InputContact
        function handleInputAddress(event) {
            setInputAddress(event.target.value);
        }

        const setErrorMessage = (errorMessage) => {
            setValidationError(errorMessage)
            return false;
        }

        const handleValidation = (event) => {
            event.preventDefault();
            if(inputName ==='') {
                return setErrorMessage("Name can't be empty");
            } else if(inputEmail ==='') {
                return setErrorMessage("Email can't be empty");
            } else if(inputContact ==='') {
                return setErrorMessage("Contact can't be empty");
            } else if(inputAddress ==='') {
                return setErrorMessage("Addres can't be empty");
            } else {
                setValidationError('')
            }
            return true
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
                                                <input className="form-control" id="exampleInputName" placeholder="Enter your name" value={inputName} onChange={handleInputName}  />
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
                                                <input className="form-control" id="exampleInputEmail" placeholder="Enter your email" value={inputEmail} onChange={handleInputEmail}/>
                                              
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
                                                <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter your address" value={inputAddress} onChange={handleInputAddress}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" hidden={validationError === ''}>
                                <div className="col-sm-4">
                                    <div className="row my-2 tx-red"><div className="col-sm-12 tx-center">{validationError}</div></div>
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