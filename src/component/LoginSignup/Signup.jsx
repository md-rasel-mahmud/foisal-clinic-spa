import { Link } from "react-router-dom";

function Signup() {
    return (
    <div className="login-form d-flex justify-content-center flex-column mt-5 align-items-center vh-100">
        <form className="d-flex flex-column gap-3 w-50 bg-light shadow rounded p-4 justify-content-center">
            <h1 className="pb-2 text-primary border-bottom text-center my-1">Sign up Here!</h1>

            <div className="row">
                <div className="col">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div className="col">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
            </div>
            <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email and phone with anyone else.</small>
            </div>
            <div className="row g-1">
                <label for="address" className="col-form-label m-0">Address</label>
                <div className="col-sm-7">
                <input type="text" className="form-control" placeholder="Village-Zip" aria-label="City"/>
                </div>
                <div className="col-sm">
                <input type="text" className="form-control" placeholder="Upazila" aria-label="State"/>
                </div>
                <div className="col-sm">
                <input type="text" className="form-control" placeholder="District" aria-label="Zip"/>
                </div>
            </div>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Set Password</label>
                </div>
                <div className="col-auto">
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
                <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                </span>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <p className="text-danger mt-3">Already have an account? <Link to="/Login" className="link-primary">Login here</Link> <Link className="link-info my-2" to="/">Back to Home</Link></p>
            
        </form>
    </div>
    );
  }
  
  export default Signup;
  