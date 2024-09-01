import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideNav() {
    const location = useLocation();
    return (
        <aside>
            <div className="sidenav position-sticky d-flex flex-column justify-content-between">
                <div className="navbar navbar-dark my-4 p-0 font-primary">
                    <ul className="navbar-nav w-100">
                        <li className={`nav-item ${location.pathname == '/articles' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/'>Articles</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/ajouter-article' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/ajouter-article'>Ajouter article</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/categories' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/qui-somme-nous'>Catégories</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/ajouter-catégorie' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/ajouter-article'>Ajouter catégorie</Link>
                        </li>
                        <li className="nav-item mt-5">
                            <Link className="nav-link text-danger px-0" to='/logout'>Se déconnecter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default SideNav
