import axios from 'axios';
import React, { useState } from 'react'

function Newsletter() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
            axios.post('https://lpc-back-end.ddev.site/api/newsletter', {email}, {
                headers:{
                    "Accept": "application/json"
                }
            }).then(
                (response)=>{
                    console.log('Inscription réussie, Merci', response)
                    setMessage('Inscription réussie, Merci');
                }
            ).catch((error) => {
            console.log(error.response.data.message)
            setError(error.response.data.message)
        })
    }
    return (
        <div class="widget bg-dark p-4 text-center">
            <h2 class="widget-title text-white d-inline-block mt-4">Abonnez-vous au blog</h2>
            <p class="mt-4">Restez informé des dernières actualités et tendances en vous abonnant à notre newsletter. Recevez des articles exclusifs.</p>
            <div>
                <div class="form-group">
                    <input type="email" class="form-control bg-transparent rounded-0 my-4"
                        placeholder="Votre boite mail" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <button class="btn btn-primary" onClick={handleSubscribe}>Abonnez-vous maintenant<img src="images/arrow-right.png"
                        alt="" /></button>
                        {message && (<p className='mt-3 text-success'>{message}</p>)}
                        {error && (<p className='mt-3 text-warning'>{error}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Newsletter
