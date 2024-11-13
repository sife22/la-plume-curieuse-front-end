import React from 'react'
import Footer from '../Footer/Footer'
import Categories from '../Categories/Categories'
import Newsletter from '../Newsletter/Newsletter'

function Contact() {
    return (
        <div className="main-content">
            <header className="mobile-nav pt-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <a href="index.html">
                                <img src="/images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="col-6 text-right">
                            <button className="nav-toggle bg-transparent border text-white">
                                <span className="fas fa-bars"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="nav-toggle-overlay"></div>

            <div className="container py-4 my-5">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <Newsletter />
                    </div>
                    <div className="col-md-8">
                        <div className="contact-form bg-dark">
                            <h1 className="text-white add-letter-space mb-5">Contactez-nous</h1>
                            <form className="needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group mb-5">
                                            <label htmlFor="firstName" className="text-black-300">Nom</label>
                                            <input type="text" id="firstName"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                placeholder="John" required />
                                            <p className="invalid-feedback">Your first-name is required!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-5">
                                            <label htmlFor="lastName" className="text-black-300">Prénom</label>
                                            <input type="text" id="lastName"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                placeholder="Doe" required />
                                            <p className="invalid-feedback">Your last-name is required!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-5">
                                            <label htmlFor="email" className="text-black-300">Email</label>
                                            <input type="email" id="email"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                placeholder="johndoe@gmail.com" required />
                                            <p className="invalid-feedback">Your email is required!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-5">
                                            <label htmlFor="message" className="text-black-300">Votre message</label>
                                            <textarea name="message"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                placeholder="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                                                required></textarea>
                                            <p className="invalid-feedback">Message is required!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="button" className="btn btn-sm btn-primary">Envoyer <img
                                            src="/images/arrow-right.png" alt="" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Categories />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
