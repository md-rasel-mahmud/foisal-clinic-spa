import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar sticky-top bg-light navbar-expand-lg">
            <div className="container">
            <button className="mx-1 bg-success text-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon d-flex justify-content-center align-items-center"><i className="fas fa-bars"></i></span>
            </button>        
            <div className="collapse navbar-collapse" id="navbarText">
                
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/" relative="path">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/team">Doctors</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/footer">Contact Us</Link>
                </li>
                <li className="nav-item">
                </li>
                </ul>
            </div>
            <Link to="/Appointment" className="btn btn-color-bg" role="button"><i className="fa-solid fa-file"></i> Appointment</Link>
            <span className="navbar-text">
                <a href="#"><i className="fa-brands fa-facebook-square"></i></a>
                <a href="mailto:"><i className="fa-solid fa-envelope"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp-square"></i></a>
            </span>
            <Link className="btn btn-color-bg" to="Login"><i className="fa-solid fa-user"></i> Login</Link>
            </div>
        </nav>
    );
  }
  
  export default Navbar;