import React from 'react';
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer text-white py-5 mt-5" style={{ backgroundColor: 'black' }}>
            <div className='container'>
                <div className="icons d-flex justify-content-center">
                    <a href="https://www.facebook.com/lancekian12" className="icon-link"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/lancekiaaan/" className="icon-link"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/lance-kian-fangon-flores-256800257/" className="icon-link"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/lancekian12" className="icon-link"><i class="fa-brands fa-github"></i></a>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <div className="ml-lg-5 contact">
                        <div className="col-12 col-lg-4 d-lg-inline">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Dagupan City, Pangasinan</span>
                        </div>
                        <div className="col-12 col-lg-4 d-lg-inline mt-3">
                            <i className="fas fa-phone"></i>
                            <span className="">+63 9477402202</span>
                        </div>
                        <div className="col-12 col-lg-4 d-lg-inline mt-3">
                            <i className="fas fa-envelope"></i>
                            <span>lafa.flores.up@phinmaed.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
