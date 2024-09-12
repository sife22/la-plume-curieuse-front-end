import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/auth';
import Footer from '../Footer/Footer';


function Login() {
    const navigate = useNavigate();

    // On crée les variables pour stocker les valeurs (email, password)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // On crée les variables pour gérer les erreurs
        // L'erreur de l'autorisation
    const [error, setError] = useState('');

        // Les erreurs de validations
    const [errors, setErrors] = useState([]);

    const [loading, setLoading] = useState(false);

    // On crée une instance de useDispatch pour déclencher les fonctions souhaitées
    const dispatch = useDispatch();

    // Connexion
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post(`${process.env.REACT_APP_BASE_URL_WITH_API}/login`, { email, password }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            
            // On déclenche la fonction login définie sur authSlice
            dispatch(login({
                'name': response.data.user.name,
                'username': response.data.user.username,
                'phone': response.data.user.phone,
                'email': response.data.user.email,
                'picture': response.data.user.picture,
                'access_token': response.data.access_token,
                'isLoggedIn': true,
            }));
            setLoading(false)
            navigate('/dashboard');
        }).catch((error) => {
            setLoading(false)
            if (error.status === 401) {
                setErrors([]);
                setError(error.response.data.message);
            } else if (error.status === 422) {
                setError(null);
                setErrors(error.response.data.errors);
            }
        })
    }

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
                    <div className="col-md-11">
                        <div className="contact-form bg-dark">
                            <h1 className="text-white add-letter-space mb-5">Se connecter</h1>
                            <form className="needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label htmlFor="email" className="text-black-300">Email</label>
                                            <input type="email" id="email"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setEmail(e.target.value)} />
                                            <p className={`text-warning ${!errors.email && 'invisible'}`}>{errors.email ? errors.email[0] : 'Feedback'}</p>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label htmlFor="password" className="text-black-300">Mot de passe</label>
                                            <input type="password" id="password"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setPassword(e.target.value)} />
                                            <p className={`text-warning ${!errors.password && 'invisible'}`}>{errors.password ? errors.password[0] : 'Feedback'}</p>

                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="button" onClick={handleLogin} className="btn btn-sm btn-primary" disabled={loading}>{loading ? 'Chargement...' : 'Se connecter'} {!loading ? <img
                                            src="/images/arrow-right.png" alt="" /> : ''}</button>
                                        {error && (<p className="text-danger mt-3">{error}</p>)}
                                    </div>
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

export default Login
