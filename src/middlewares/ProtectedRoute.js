import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.value.isLoggedIn);

    // On vérifie si l'utilisateur n'est pas connecté
    if (!isLoggedIn) {
        return <Navigate to="/connexion" replace />
    }

    // Sinon, on retourne la destination autorisée
    return children
}

export default ProtectedRoute
