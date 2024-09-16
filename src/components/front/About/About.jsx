import React from 'react';
import Footer from '../Footer/Footer';
import Newsletter from '../Newsletter/Newsletter';

function About() {
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
                    <div className="col-md-8">
                        <img className="img-fluid" src="/images/author.JPG" alt="" width="100%" height="100px" />
                        <h1 className="text-white add-letter-space my-4">Salut, je suis Sif eddine HADI, Développeur Logiciels</h1>
                        <p>Je suis un développeur full-stack passionné, avec une solide expérience en design et développement d’applications web, j’ai eu l’occasion de travailler sur divers projets, allant des sites web corporatifs aux applications SaaS, en passant par des prototypes innovants. Mon approche de la résolution des problèmes et mon esprit d’équipe m’ont permis de contribuer avec succès au développement de solutions sur mesure répondant aux besoins spécifiques des clients.</p>
                        <ul className="list-unstyled my-5">
                            <li className="bullet-list-item mb-4">
                                <h3 className="text-white mb-3 add-letter-space">La Plume Curieuse</h3>
                                <p>Ce projet est une plateforme de blogs au but de partager nos idées, informations, cultures et nos croyances.
                                </p>
                            </li>
                            <li className="bullet-list-item mb-4">
                                <h3 className="text-white mb-3 add-letter-space">Technologies
                                </h3>
                                <p>Les technologies suivantes ont été utilisées pour la réalisation de cette plateforme : </p>
                                <li className="bullet-list-item mt-4">
                                    <h4 className="text-white mb-3 add-letter-space">Front End</h4>
                                    <p>En utilisant le framework <strong><u>ReactJs</u></strong>, j'ai amélioré le Front-End de cette application pour la rendre plus dynamique, inovante et plus conviviale pour l'expérience utilisateur.</p>
                                </li>
                                <li className="bullet-list-item mt-4">
                                    <h4 className="text-white mb-3 add-letter-space">Back End</h4>
                                    <p>Grâce à <strong><u>Laravel</u></strong>, j'ai développé le Back End de LPC, un framework qui nous donne toutes les fonctionnalités requises pour concevoir une application web complète pour tous les cas d'utilisation.</p>
                                </li>
                                <li className="bullet-list-item mt-4">
                                    <h4 className="text-white mb-3 add-letter-space">Base de données</h4>
                                    <p><strong><u>MySQL</u></strong> : la base de données la très reconnue et largement utilisée au niveau mondiale.</p>
                                </li>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <Newsletter />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
