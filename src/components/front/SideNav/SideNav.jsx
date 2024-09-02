import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SideNav.css';

function SideNav() {


    const location = useLocation();

    return (
        <aside>
            <div className="sidenav position-sticky d-flex flex-column justify-content-between">
                <Link className="navbar-brand logo" to="/" alt="logo">
                    <img src="images/playstation-logo-colour.svg" alt="" />
                </Link>

                <div className="navbar navbar-dark my-4 p-0 font-primary">
                    <ul className="navbar-nav w-100">
                        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/'>Accueil</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/qui-somme-nous' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/qui-somme-nous'>Qui somme-nous?</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>

                            <Link className="nav-link text-white px-0" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <ul className="list-inline nml-2">
                    <li className="list-inline-item">
                        <a href="#!" className="text-white text-red-onHover pr-2">
                            <span className="fab fa-twitter"></span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!" className="text-white text-red-onHover p-2">
                            <span className="fab fa-facebook-f"></span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!" className="text-white text-red-onHover p-2">
                            <span className="fab fa-instagram"></span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!" className="text-white text-red-onHover p-2">
                            <span className="fab fa-linkedin-in"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideNav
