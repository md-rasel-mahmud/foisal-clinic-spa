import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-form d-flex justify-content-center flex-column align-items-center vh-100">
        <form className="d-flex flex-column bg-light rounded shadow p-4 justify-content-center">
            <h1 className="pb-2 text-primary border-bottom text-center my-1">Log in Here!</h1>

            <div className="form-group pt-2">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group my-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p className="text-danger mt-3">Don't you have any account? <Link to="/Signup" className="link-primary">Sign up here</Link></p>
        </form>
        <Link className="btn btn-secondary my-2" to="/" role="button">Back to Home</Link>
    </div>
  );
}

export default Login;
