// Import your App.css file here in App.js
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='container my-5 offset-sm-4'>
      {/* form will start here */}
        <form>
          <h2>Customer's Login Page</h2>
          {/* Email Address block start here */}
          <div className='row'>
            <div className="col-sm-4">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
            </div>
          </div>
          {/* Email Address block start here */}

          {/* Password block start here */}
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
            </div>
          </div>
          {/* Password block start here */}

        
          {/* Submit Button block start here */}
          <div className='my-2'>
          <button type="submit" className="btn  btn-danger">Submit</button>
          </div>
          {/* Submit Button block start here */}
        </form>

      {/* form will ends here */}

      </div> 

    </div>
  );
}

export default App;
