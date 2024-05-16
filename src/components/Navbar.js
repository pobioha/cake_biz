// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <a href="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-primary me-3"></i>CakeZone</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto mx-lg-auto py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About Us</Link>
                    <Link to="/menu" className="nav-item nav-link">Menu & Pricing</Link>
                    <Link to="/services" className="nav-item nav-link">Our Services</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                    <Link to="/appointment" className="nav-item nav-link">Book Appointment</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
