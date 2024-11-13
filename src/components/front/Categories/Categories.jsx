import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Categories() {

    // On utilise cette variable pour stocker les catégories disponibles sur la plateforme.
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        // On récupère toutes les catégories.
        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-categories`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setCategories(response.data.categories);
            setLoading(false)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div className="widget bg-dark p-4 text-center">
            <h2 className="widget-title text-white d-inline-block mt-4">Catégories</h2>
            {
                loading ? (
                    <div 
                    style={{
                        marginTop: '2rem',
                      }}
                    >
                        <SkeletonTheme baseColor="#202020" highlightColor="#E4112F">
                            <p>
                                <Skeleton count={4} />
                            </p>
                        </SkeletonTheme>
                    </div>

                ) : 
                    <div className="form-group mt-4 categories">
                        {categories.map((category) => (
                            <Link to={`/${category.slug}`} key={category.id} className="btn btn-dark">
                                {category.name}
                            </Link>
                        ))}
                    </div>
            }
        </div>
    )
}

export default Categories
