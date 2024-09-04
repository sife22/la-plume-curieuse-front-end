import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);
    const state = useSelector((state) => state.auth.value)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-categories`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            console.log(response.data.categories);
            setCategories(response.data.categories);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    // const handleDelete = async (e, slug, id) => {
    //     e.preventDefault();
    //     axios.delete(`${process.env.REACT_APP_BASE_URL_WITH_API}/delete-category/${slug}-${id}`, {
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${state.access_token}`,
    //         }
    //     }).then((response) => {
    //         console.log(response);
    //         setCategories(categories.filter((category) => category.id !== id))
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }
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
                        <h1 className="text-white add-letter-space mb-3">Catégories</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-9">
                        {categories && categories.map((category) => (
                            <>
                                <span className="text-white add-letter-space mb-3">{category.name}</span> -- <Link className="text-warning" to={`/dashboard/modifier-categorie/${category.slug}`}>Modifier</Link>
                                {/* <button onClick={(e) => handleDelete(e, category.slug, category.id)}>Supprimer</button> */}
                                
                                <br></br>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
