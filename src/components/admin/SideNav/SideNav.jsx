import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../../features/auth';
import "./SideNav.css"


function SideNav() {
    // On récupère notre état grâce à la fonction useSelector
    const state = useSelector((state) => state.auth.value)

    const location = useLocation();

    // On crée une instance de useDispatch pour déclencher les fonctions souhaitées
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Déconnexion
    const handleLogout = (e) => {
        e.preventDefault();
        axios.delete(`${process.env.REACT_APP_BASE_URL_WITH_API}/logout`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            // On déclenche la fonction logout définie sur authSlice
            dispatch(logout());

            // On renvoie l'utilisateur vers la page connexion
            navigate('/connexion');
        }
        ).catch((error) =>
            console.log(error)
        )
    }

    return (
        <aside>
            <div className="sidenav position-sticky d-flex flex-column justify-content-between">
                <div className="navbar navbar-dark my-4 p-0 font-primary">
                    <ul className="navbar-nav w-100">
                        <div className='avatar_name'>
                            <img
                                src={state.picture ? `${process.env.REACT_APP_BASE_URL_WITHOUT_API}/uploads/users/picture/${state.picture}` : "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"}
                                alt={state.picture}
                                className='avatar'
                            />
                            <div>
                                <h3 className='text-white'>{state.name}</h3>
                                <span className='mb-5'>{state.username}</span>
                            </div>
                        </div>


                        <li className={`nav-item ${location.pathname == '/dashboard' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/dashboard'>Tableau de bord</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/dashboard/articles' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/dashboard/articles'>Articles</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/dashboard/ajouter-article' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/dashboard/ajouter-article'>Ajouter article</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/dashboard/categories' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/dashboard/categories'>Catégories</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/dashboard/ajouter-categorie' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/dashboard/ajouter-categorie'>Ajouter catégorie</Link>
                        </li>
                        <li className={`nav-item ${location.pathname == '/dashboard/emails' ? 'active' : ''}`}>
                            <Link className="nav-link text-white px-0" to='/dashboard/emails'>Newsletter</Link>
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
