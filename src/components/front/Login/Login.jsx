import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/auth';

function Login() {

    // On crée les variables pour stocker les valeurs (email, password)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // On crée les variables pour gérer les erreurs
    const [error, setError] = useState('');
    const [errors, setErrors] = useState([]);

    // On crée une instance de useDispatch
    const dispatch = useDispatch();

    // On crée la fonction pour gérer login
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://lpc-back-end.ddev.site/api/login', { email, password }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response)=>{
            console.log(response);
            dispatch(login({
                'username': response.data.username,
                'access_token': response.data.access_token,
                'isLoggedIn': true,
            }));
            navigate('/dashboard');
        }).catch((error)=>{
            if (error.status === 401) {
                console.log(error.response.data.message);
                setErrors([]);
                setError(error.response.data.message);
            } else if(error.status === 422) {
                console.log(error.response.data.errors);
                setError(null);
                setErrors(error.response.data.errors);
            }            
        })
    }

    const navigate = useNavigate();
    

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

            <div className="container py-4 my-5">
                <div className="row">
                    <div className="col-md-11">
                        <div className="contact-form bg-dark">
                            <h1 className="text-white add-letter-space mb-5">Se connecter</h1>
                            <form className="needs-validation" novalidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-5">
                                            <label for="email" className="text-black-300">Email</label>
                                            <input type="email" id="email"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setEmail(e.target.value)} />
                                            {errors.email && (<p className="text-warning">{errors.email[0]}</p>)}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-5">
                                            <label for="password" className="text-black-300">Mot de passe</label>
                                            <input type="password" id="password"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setPassword(e.target.value)} />
                                            {errors.password && (<p className="text-warning">{errors.password[0]}</p>)}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="button" onClick={handleLogin} className="btn btn-sm btn-primary">Se connecter <img
                                            src="images/arrow-right.png" alt="" /></button>
                                        {error && (<p className="text-danger mt-3">{error}</p>)}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
