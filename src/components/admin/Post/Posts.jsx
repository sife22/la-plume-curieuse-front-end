import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Posts() {
    const [posts, setPosts] = useState([]);
    const state = useSelector((state) => state.auth.value)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-posts-author`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            console.log(response.data.posts);
            setPosts(response.data.posts);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const handleDelete = (e, slug, id) => {
        e.preventDefault();
        axios.delete(`${process.env.REACT_APP_BASE_URL_WITH_API}/delete-post/${slug}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            console.log(response);
            setPosts(posts.filter((post) => post.id !== id))
        }).catch((error) => {
            console.log(error);
        })
    }
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
                        <h1 className="text-white add-letter-space mb-3">Articles</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-9">
                        {posts && posts.map((post) => (
                            <>
                                <span className="text-white add-letter-space mb-3">{post.title}</span> -- <Link className="text-warning" to={`/dashboard/modifier-article/${post.slug}`}>Modifier</Link>
                                <button onClick={(e) => handleDelete(e, post.slug, post.id)}>Supprimer</button>

                                <br></br>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
