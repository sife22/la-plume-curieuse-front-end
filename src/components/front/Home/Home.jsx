import React from 'react'
import Footer from '../Footer/Footer'

function Home() {
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

            <div class="container pt-4 mt-5">
                <div class="row justify-content-between">
                    <div class="col-lg-7">

                        <div class="card post-item bg-transparent border-0 mb-5">
                            <a href="#!">
                                <img class="card-img-top rounded-0" src="images/post/post-lg/03.png" alt="" />
                            </a>
                            <div class="card-body px-0">
                                <h2 class="card-title">
                                    <a class="text-white opacity-75-onHover" href="#!">Aliquip excepteur
                                        cilludm irure laboris sint ea qui ex amet id. Ex nulla etno</a>
                                </h2>
                                <ul class="post-meta mt-3">
                                    <li class="d-inline-block mr-3">
                                        <span class="fas fa-clock text-primary"></span>
                                        <a class="ml-1" href="#">24 April, 2016</a>
                                    </li>
                                    <li class="d-inline-block">
                                        <span class="fas fa-list-alt text-primary"></span>
                                        <a class="ml-1" href="#">Photography</a>
                                    </li>
                                </ul>
                                <p class="card-text my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tincidunt leo mi, viverra urna. Arcu velit risus, condimentum ut vulputate cursus
                                    porttitor turpis in. Diam egestas nec massa, habitasse. Tincidt dui.</p>
                                <a href="#!" class="btn btn-primary">Voir plus <img
                                    src="images/arrow-right.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5">
                        <div class="widget text-center">
                            <img class="author-thumb-sm rounded-circle d-block mx-auto" src="images/profile.jpg"
                                alt="" />
                            <h2 class="widget-title text-white d-inline-block mt-4">Le créateur</h2>
                            <p class="mt-4">Sif eddine HADI, Lorem ipsum dolor sit coectetur adiing elit. Tincidunfywjt
                                leo mi, viearra urna. Arcu ve isus, condimentum ut vulpate cursus por turpis.</p>
                            <ul class="list-inline mt-3">
                                <li class="list-inline-item">
                                    <a href="#!" class="text-white text-primary-onHover p-2">
                                        <span class="fab fa-twitter"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#!" class="text-white text-primary-onHover p-2">
                                        <span class="fab fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#!" class="text-white text-primary-onHover p-2">
                                        <span class="fab fa-instagram"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#!" class="text-white text-primary-onHover p-2">
                                        <span class="fab fa-linkedin-in"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="widget bg-dark p-4 text-center">
                            <h2 class="widget-title text-white d-inline-block mt-4">Catégories</h2>
                                <div class="form-group mt-4">
                                    <button class="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                        <button class="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                        <button class="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                        <button class="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                        <button class="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                </div>
                        </div>

                        <div class="widget bg-dark p-4 text-center">
                            <h2 class="widget-title text-white d-inline-block mt-4">Abonnez-vous au blog</h2>
                            <p class="mt-4">Lorem ipsum dolor sit coectetur elit. Tincidu nfywjt leo mi, urna. Arcu ve
                                isus, condimentum ut vulpate cursus por.</p>
                            <form action="#">
                                <div class="form-group">
                                    <input type="email" class="form-control bg-transparent rounded-0 my-4"
                                        placeholder="Votre boite mail" />
                                    <button class="btn btn-primary">Abonnez-vous maintenant<img src="images/arrow-right.png"
                                        alt="" /></button>
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

export default Home
