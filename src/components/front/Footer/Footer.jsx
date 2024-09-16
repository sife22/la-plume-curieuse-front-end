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
                            <li><Link to="/politique-confidentialite">Politique & Confidentialité</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="font-primary text-white mb-4">Pages</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/contact">Contactez-nous</Link></li>
                            <li><Link to="/qui-somme-nous">Qui somme-nous ?</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="font-primary text-white mb-4">Suivez-nous</h5>
                        <ul className="list-unstyled">
                            <li><a target='_blank' href="https://x.com/sifeddinehadi">Twitter</a></li>
                            <li><a target='_blank' href="https://www.linkedin.com/in/sif-eddine-hadi-361037233/">LinkedIn</a></li>
                            <li><a target='_blank' href="https://github.com/sife22/">GitHub</a></li>
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
