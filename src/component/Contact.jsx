import React from 'react'
import "../css/Contact.css"

const Contact = () => {
    return (
        <section className='contact-section'>
            <div className="container contact-content">
                <div className="row">
                    <div className="col-12 col-lg-6 contact-information">
                        <div className='contact-padding'>
                            <h2>Contact Information</h2>
                            <p>Say something about your concern</p>
                            <div className="contact-icons">
                                <p><i className="fas fa-phone"></i> +63-9477402202</p>
                                <p><i className="fas fa-envelope"></i> lafa.flores.up@phinmaed.com</p>
                                <p><i className="fas fa-map-marker-alt"></i>#106 Sevidal Street, Poblacion, San Fabian, Pangasinan</p>
                            </div>
                            <img src="planet3.png" alt="Ellipse" />
                            <div className='contact-icons-2'>
                                <a href="https://www.facebook.com/lancekian12"><i class="fa-brands fa-facebook"></i></a>
                                <a href="https://www.instagram.com/lancekiaaan/"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/lance-kian-fangon-flores-256800257/" className="icon-link"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 contact-input">
                        <div className='contact-input-2'>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="contact-first-name">First Name</label>
                                    <input type="text" id="contact-first-name" placeholder='First Name' />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="contact-last-name">Last Name</label>
                                    <input type="text" id="contact-last-name" placeholder='Last Name' />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="contact-email">Email</label>
                                    <input type="email" id="contact-email" placeholder='Email' />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="contact-phone-number">Phone Number</label>
                                    <input type="text" id="contact-phone-number" placeholder='Phone Number' />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="contact-message">Message</label>
                                    <input type="text" id="contact-message" placeholder='Message' />
                                </div>
                                <div className="col-6"></div>
                                <div className="col-2 col-xl-3"></div>
                                <div className="col-2">
                                    <button className='mx-auto'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact