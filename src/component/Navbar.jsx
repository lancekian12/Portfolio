import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="navigation position-relative mb-0">
            <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md">
                <div className="container-fluid mx-5">
                    <a className='navbar-brand'><img src="mylogo.png" alt="logo" className='mx-2' id="mylogo" /></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navLinks">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link exact to="/portfolio/" className="nav-new">Home</Link></li>
                            <li className="nav-item"><Link exact to="/portfolio//About" className="nav-new">About</Link></li>
                            <li className="nav-item"><Link exact to="/portfolio/Project" className="nav-new">Projects</Link></li>
                            <li className="nav-item"><Link exact to="/portfolio//Contact" className="nav-new">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='collapse navbar-collapse justify-content-end' id="login">
                        <div className="icons2 a d-flex justify-content-center">
                            <a href="https://www.facebook.com/lancekian12"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/lancekiaaan/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/lance-kian-fangon-flores-256800257/"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/lancekian12"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
