import React from 'react'

function ErrorPage() {
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
                            <h1 class="text-white add-letter-space text-danger">Destination introuvable !</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ErrorPage