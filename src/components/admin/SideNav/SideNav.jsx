import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../../features/auth';


function SideNav() {
    const location = useLocation();
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.auth.value)
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        axios.delete('https://lpc-back-end.ddev.site/api/logout', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            console.log(response);
            dispatch(logout());
            navigate('/connexion');
        }
        ).catch((error) => console.log(error)
        )
    }

    return (
        <aside>
            <div className="sidenav position-sticky d-flex flex-column justify-content-between">
                <div className="navbar navbar-dark my-4 p-0 font-primary">
                    <ul className="navbar-nav w-100">
                        <h2 className='text-white mb-5'>{state.username}</h2>

                        <li className={`nav-item ${location.pathname == '/articles' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/articles'>Articles</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/ajouter-article' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/ajouter-article'>Ajouter article</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/dashboard/categories' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/dashboard/categories'>Catégories</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/dashboard/ajouter-categorie' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/dashboard/ajouter-categorie'>Ajouter catégorie</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/'>Tester /</Link>
                        </li>
                        <li className="nav-item mt-5">
                            <Link className="nav-link text-danger px-0" onClick={handleLogout}>Se déconnecter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default SideNav
