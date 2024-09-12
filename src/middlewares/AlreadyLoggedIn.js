import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';


function AlreadyLoggedIn({children}) {

    const isLoggedIn = useSelector((state)=>state.auth.value.isLoggedIn);

    // On vérifie si l'utilisateur est déjà connecté
    if(isLoggedIn){
        return <Navigate to="/dashboard" replace />
    }

    // Sinon, on retourne la destination souhaitée
    return children

}

export default AlreadyLoggedIn
