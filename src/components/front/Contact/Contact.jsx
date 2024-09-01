import React from 'react'
import Footer from '../Footer/Footer'

function Contact() {
    return (
        <div class="main-content">
            <header class="mobile-nav pt-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <a href="index.html">
                                <img src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <button class="nav-toggle bg-transparent border text-white">
                                <span class="fas fa-bars"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div class="nav-toggle-overlay"></div>

            <div class="container py-4 my-5">
                <div class="row">
                    <div class="col-md-10">
                        <div class="contact-form bg-dark">
                            <h1 class="text-white add-letter-space mb-5">Contactez-nous</h1>
                            <form method="POST" class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group mb-5">
                                            <label for="firstName" class="text-black-300">Nom</label>
                                            <input type="text" id="firstName"
                                                class="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                placeholder="John" required />
                                            <p class="invalid-feedback">Your first-name is required!</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-5">
                                            <label for="lastName" class="text-black-300">Prénom</label>
                                            <input type="text" id="lastName"
                                                class="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                placeholder="Doe" required />
                                            <p class="invalid-feedback">Your last-name is required!</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-5">
                                            <label for="email" class="text-black-300">Email</label>
                                            <input type="email" id="email"
                                                class="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                placeholder="johndoe@gmail.com" required />
                                            <p class="invalid-feedback">Your email is required!</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-5">
                                            <label class="text-black-300">Sujet</label>
                                            <select class="d-block w-100">
                                                <option value="1">...</option>
                                                <option value="2">...</option>
                                                <option value="3">...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group mb-5">
                                            <label for="message" class="text-black-300">Votre message</label>
                                            <textarea name="message"
                                                class="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                placeholder="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                                                required></textarea>
                                            <p class="invalid-feedback">Message is required!</p>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-sm btn-primary">Envoyer <img
                                            src="images/arrow-right.png" alt="" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
