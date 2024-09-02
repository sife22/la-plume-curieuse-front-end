import axios from 'axios'
import React from 'react'

function Login() {
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
                            <h1 class="text-white add-letter-space mb-5">Se connecter</h1>
                            <form class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group mb-5">
                                            <label for="email" class="text-black-300">Email</label>
                                            <input type="email" id="email"
                                                class="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required />
                                            <p class="invalid-feedback">The email is required!</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-5">
                                            <label for="password" class="text-black-300">Mot de passe</label>
                                            <input type="password" id="password"
                                                class="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required />
                                            <p class="invalid-feedback">The password is required!</p>
                                        </div>
                                    </div>



                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-sm btn-primary">Se connecter <img
                                            src="images/arrow-right.png" alt="" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
