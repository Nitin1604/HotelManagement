// Import your App.css file here in App.js
import './App.css';

function App() {

  return (
    <div className="App">
      {/* Navbar block start here */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Hotel Management</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar block ends here */}

      <div className='container my-5 offset-sm-4'>

        {/* form will start here */}
        <form>
          <h2>Customer's Login Page</h2>

          {/* Name block will start here */}
          <div className='row'>
            <div className="col-sm-4">
              <div className="form-group">
                <label for="exampleInputName">Name</label>
                <input className="form-control" id="exampleInputName" placeholder="Enter your name" />
              </div>
            </div>
          </div>
          {/* Name block will ends here */}

          {/* Contact block will start here */}
          <div className='row'>
            <div className="col-sm-4">
              <div className="form-group">
                <label for="exampleInputContact">Contact No</label>
                <input className="form-control" id="exampleInputContact" placeholder="Enter your contact number" />
              </div>
            </div>
          </div>
          {/* Contact block will ends here */}

          {/* Email Address block start here */}
          <div className='row'>
            <div className="col-sm-4">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">Your email id is save , we can't share it with anyone.</small>
              </div>
            </div>
          </div>
          {/* Email Address block ends here */}

          {/* Password block start here */}
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                <small id="passwordHelp" className="form-text text-muted">Your password is save , we can't share it with anyone.</small>
              </div>
            </div>
          </div>
          {/* Password block ends here */}


          {/* Submit Button block start here */}
          <div className='my-2'>
            <button type="submit" className="btn  btn-danger">Submit</button>
          </div>
          {/* Submit Button block ends here */}
        </form>
        {/* form will ends here */}


      </div>

    </div>
  );
}

export default App;
