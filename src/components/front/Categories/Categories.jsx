import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Categories() {

    // On utilise cette variable pour stocker les catégories disponibles sur la plateforme.
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        // On récupère toutes les catégories.
        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-categories`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setCategories(response.data.categories);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div className="widget bg-dark p-4 text-center">
            <h2 className="widget-title text-white d-inline-block mt-4">Catégories</h2>
            <div className="form-group mt-4 categories">
                {categories.map((category) => (
                    <Link to={`/${category.slug}`} key={category.id} className="btn btn-dark">
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories
