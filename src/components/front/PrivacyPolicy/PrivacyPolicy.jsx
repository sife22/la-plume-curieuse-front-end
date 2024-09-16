import React from 'react'
import Footer from '../Footer/Footer'

function PrivacyPolicy() {
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
                    <div className="col-md-9">
                        <h1 className="text-white add-letter-space mb-3">Privacy &amp; Policy</h1>
                        <p className="mb-5">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem <br></br>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                        <ul className="list-unstyled">
                            <li className="bullet-list-item mb-5">
                                <h3 className="text-white mb-3 add-letter-space">Lorem Lorem Lorem Lorem Lorem Lorem </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros,
                                    ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa
                                    gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in
                                    curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie
                                    urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis
                                    viverra sed</p>
                                <p className="mt-4">pretium, aliquam sit. Praesent elementum magna amet, tincidunt eros,
                                    nibh in leo. Malesuada purus, lacus, at aliquam suspendisse tempus. Quis tempus
                                    amet, velit nascetur sollicitudin. At sollicitudin eget amet in. Eu velit nascetur
                                    sollicitudin erhdfvssfvrgss eget viverra nec elementum. Lacus, facilisis tristique
                                    lectus in.
                                </p>
                            </li>
                            <li className="bullet-list-item mb-5">
                                <h3 className="text-white mb-3 add-letter-space">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros,
                                    ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa
                                    gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in
                                    curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie
                                    urna eu tortor erat.</p>
                            </li>
                            <li className="bullet-list-item mb-5">
                                <h3 className="text-white mb-3 add-letter-space">Lorem Lorem Lorem Lorem Lorem Lorem </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros,
                                    ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa
                                    gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in
                                    curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus.</p>
                                <p className="mt-4">Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed
                                    interdum lacus. Lorem quis viverra sed Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat </p>
                            </li>
                            <li className="bullet-list-item">
                                <h3 className="text-white mb-3 add-letter-space">Lorem Lorem Lorem Lorem Lorem Lorem </h3>
                                <ol className="pl-0">
                                    <li className="mb-2">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </li>
                                    <li className="mb-2">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </li>
                                    <li className="mb-2">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </li>
                                    <li>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy
