import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Home() {

    // On récupère les données stockées au store (RTK).
    const state = useSelector((state) => state.auth.value)

    // Pour stocker les statistiques.
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-statistic`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            console.log(response);
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])


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
                    <div className="col-md-9">
                        <h2 className="text-white add-letter-space mb-3">Bienvenu chez vous : {state.name}</h2>
                        <span className="text-white add-letter-space mb-3">Votre ACCESS_TOKEN est  : {state.access_token}</span>
                        <ul className="list-unstyled my-5">
                        <li className="bullet-list-item mb-4">
                                <h3 className="text-white mb-3 add-letter-space">Nombre de catégories</h3>
                                <p>{data && data.categories}
                                </p>
                            </li>
                            <li className="bullet-list-item mb-4">
                                <h3 className="text-white mb-3 add-letter-space">Nombre d'aricles</h3>
                                <p>{data && data.posts}
                                </p>
                            </li>
                            <li className="bullet-list-item mb-4">
                                <h3 className="text-white mb-3 add-letter-space">Nombre d'utilisateurs</h3>
                                <p>{data && data.users}
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
