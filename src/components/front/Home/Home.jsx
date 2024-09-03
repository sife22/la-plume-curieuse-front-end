import React from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../Newsletter/Newsletter'

function Home() {
    return (
        <div className="main-content">
            <header className="mobile-nav pt-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <a href="index.html">
                                <img src="images/logo.png" alt="" />
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

            <div className="container pt-4 mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-7">

                        <div className="card post-item bg-transparent border-0 mb-3">
                            <a href="#!">
                                <img className="card-img-top rounded-0" src="images/post/post-lg/03.png" alt="" />
                            </a>
                            <div className="card-body px-0">
                                <ul className="post-meta mb-2">
                                    <li className="d-inline-block mr-3">
                                        <span className="fas fa-clock text-primary"></span>
                                        <a className="ml-1" href="#">24 April, 2016</a>
                                    </li>
                                    <li className="d-inline-block">
                                        <span className="fas fa-list-alt text-primary"></span>
                                        <a className="ml-1" href="#">Photography</a>
                                    </li>
                                </ul>
                                <h2 className="card-title">
                                    <a className="text-white opacity-75-onHover" href="#!">Aliquip excepteur
                                        cilludm irure laboris sint ea qui ex amet id. Ex nulla etno</a>
                                </h2>
                                {/* <a href="#!" className="btn btn-primary">Voir plus <img
                                    src="images/arrow-right.png" alt="" /></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="widget text-center">
                            <img className="author-thumb-sm rounded-circle d-block mx-auto" src="images/profile.jpg"
                                alt="" />
                            <h2 className="widget-title text-white d-inline-block mt-4">Le créateur</h2>
                            <p className="mt-4">Sif eddine HADI, Lorem ipsum dolor sit coectetur adiing elit. Tincidunfywjt
                                leo mi, viearra urna. Arcu ve isus, condimentum ut vulpate cursus por turpis.</p>
                            <ul className="list-inline mt-3">
                                <li className="list-inline-item">
                                    <a href="#!" className="text-white text-primary-onHover p-2">
                                        <span className="fab fa-twitter"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="text-white text-primary-onHover p-2">
                                        <span className="fab fa-linkedin-in"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="text-white text-primary-onHover p-2">
                                        <span className="fab fa-github"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="widget bg-dark p-4 text-center">
                            <h2 className="widget-title text-white d-inline-block mt-4">Catégories</h2>
                                <div className="form-group mt-4">
                                    <button className="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                        <button className="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                        <button className="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                        <button className="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                        <button className="btn btn-dark">Catégorie 1<img src="images/arrow-right.png"
                                        alt="" /></button>
                                </div>
                        </div>

                        <Newsletter />

                      


                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Home
