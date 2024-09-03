import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-dark">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="font-primary text-white mb-4">La Plume Curieuse</h5>
                        <ul className="list-unstyled">
                            <li><a href="/politique-confidentialite">Politique & Confidentialité</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="font-primary text-white mb-4">Pages</h5>
                        <ul className="list-unstyled">
                            <li><a href="/contact">Contactez-nous</a></li>
                            <li><a href="/qui-somme-nous">Qui somme-nous ?</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="font-primary text-white mb-4">Suivez-nous</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Twitter</a></li>
                            <li><a href="#!">LinkedIn</a></li>
                            <li><a href="#!">GitHub</a></li>
                            <li><a href="#!">Youtube</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="font-primary text-white mb-4">Connexion</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/connexion">Se connecter</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
