import axios from 'axios';
import React, { useState } from 'react'

function Newsletter() {
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post(`${process.env.REACT_APP_BASE_URL_WITH_API}/newsletter`, { email }, {
            headers: {
                "Accept": "application/json"
            }
        }).then(
            (response) => {
                setError('')
                setLoading(false)
                setMessage('Inscription réussie, Merci');
            }
        ).catch((error) => {
            setMessage('');
            setLoading(false)
            if(error.status === 422){
                setError(error?.response.data.message)
            }
        })
    }
    return (
        <div className="widget bg-dark p-4 text-center mb-0">
            <h2 className="widget-title text-white d-inline-block mt-4">Abonnez-vous au blog</h2>
            <p className="mt-4">Restez informé des dernières actualités et tendances en vous abonnant à notre newsletter. Recevez des articles exclusifs.</p>
            <div>
                <div className="form-group">
                    <input type="email" className="form-control bg-transparent rounded-0 my-4"
                        placeholder="Votre boite mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button className="btn btn-primary" onClick={handleSubscribe} disabled={loading} >{loading ? '...' : 'Abonnez-vous maintenant'} <img src="images/arrow-right.png"
                        alt="" /></button>
                    {message && (<p className='mt-3 text-success'>{message}</p>)}
                    {error && (<p className='mt-3 text-warning'>{error}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Newsletter
