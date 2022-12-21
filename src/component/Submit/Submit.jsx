import { Link } from "react-router-dom";

function Submit() {
    return (
    <section className="d-flex justify-content-center flex-column align-items-center vh-100 bg-light">
        <h1 className="text-dark">Your data has been send successed <i className="fa-solid fa-square-check text-success"></i> </h1>
        <Link className="btn btn-primary mt-4" to="/" role="button">Back to home</Link>
    </section>
    );
  }
  
  export default Submit;
  