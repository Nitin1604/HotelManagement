import { useState } from "react";
import NavigationComponent from "./Navigation";

const ContactComponent = () => {
    // useState for setting the name
    const [InputName, setInputName] = useState('Nitin');

    // function to handle the InputName
    function handleInputName(event) {
        setInputName(event.target.value);
    }

    // useState for setting the email
    const [InputEmail , setInputEmail] = useState('email@example.com');

    // function to handle the InputEmail
    function handleInputEmail(event) {
        setInputEmail(event.target.value);
    }

    // useState for setting the contact number
    const [InputContact , setInputContact] = useState('1234567890');
    
    // function to handle the InputContact
    function handleInputContact(event) {
        setInputContact(event.target.value);
    }
    
    // useState for setting the Address
    const [InputAddress , setInputAddress] = useState('abc address');
    
    // function to handle the InputContact
    function handleInputAddress(event) {
        setInputAddress(event.target.value);
    }
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
                                    <div className="row my-3">
                                        <label for="exampleInputName">Name</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="exampleInputName" placeholder="Enter your name" value={InputName} onClick={handleInputName} onChange={handleInputName} />
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
                                        <label for="exampleInputName">Email</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="exampleInputEmail" placeholder="Enter your email" value={InputEmail} onClick={handleInputEmail} onChange={handleInputEmail}/>
                                          
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
                                        <label for="exampleInputContact">Contact</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleInputContact" placeholder="Enter your phone no." value={InputContact} onClick={handleInputContact} onChange={handleInputContact} />
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
                                        <label for="exampleInputAddress">Address</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter your address" value={InputAddress} onClick={handleInputAddress} onChange={handleInputAddress}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Address block ends here */}

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