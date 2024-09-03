import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Newsletter() {

    // On récupère notre statut grâce à useSelector
    const state = useSelector((state) => state.auth.value);
    
    const [emails, setEmail] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/newsletter`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            setEmail(response.data.emails);
        }).catch((error) => console.log(error)
        )
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
                        <h1 className="text-white add-letter-space mb-3">Newsletters</h1>
                        <h3 className="text-white add-letter-space mb-3">Total : {emails.length}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        {emails && emails.map((email) => (
                            <>
                                <span className="text-white add-letter-space mb-3">{email.email}</span>
                                <br></br>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
