import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../Newsletter/Newsletter'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'

function Home() {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        console.log(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-categories`);

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

        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-posts`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            console.log(response.data.posts);
            setPosts(response.data.posts);
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

            <div className="container pt-4 mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-8">
                        {/* post */}
                        {posts && posts.map((post) => (
                            <div className="card post-item bg-transparent border-0 mb-3" key={post.id}>
                                <Link to={`/${post.categories[0].slug}/${post.slug}`}>
                                    <img className="card-img-top rounded-0" src={`${process.env.REACT_APP_BASE_URL_WITHOUT_API}/uploads/posts/picture/${post.picture}`} alt="" />
                                </Link>
                                <div className="card-body px-0">
                                    <ul className="post-meta mb-2">
                                        <li className="d-inline-block mr-3">
                                            <span className="fas fa-clock text-primary"></span>
                                            <a className="ml-1" href="#">{new Date(post.created_at).toLocaleDateString('fr-FR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}</a>
                                        </li>
                                        <li className="d-inline-block">
                                            <span className="fas fa-list-alt text-primary"></span>
                                            <Link className="ml-1" to={`/${post.categories[0].slug}`}>{post.categories[0].name}</Link>
                                        </li>
                                    </ul>
                                    <h2 className="card-title">
                                        <Link className="text-white opacity-75-onHover" to={`/${post.categories[0].slug}/${post.slug}`}>{post.title}</Link>
                                        <TextTruncate
                                         className="text-secondary"
                                         line={3}
                                         element="h4"
                                         truncateText="…"
                                         text={post.summary}
                                         />
                                    </h2>
                                </div>
                            </div>
                        ))}
                        {/* end post */}
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="widget text-center">
                            <img className="author-thumb-sm rounded-circle d-block mx-auto" src="images/profile.jpg"
                                alt="" />
                            <h2 className="widget-title text-white d-inline-block mt-4">Le créateur</h2>
                            <p className="mt-4">Sif eddine HADI, Lorem ipsum dolor sit coectetur adiing elit. Tincidunfywjt
                                leo mi, viearra urna. Arcu ve isus, condimentum ut vulpate cursus por turpis.</p>
                            <ul className="list-inline mt-3">
                                <li className="list-inline-item">
                                    <a href="#!" className="text-white text-primary-onHover p-2">
                                        <span className="fab fa-twitter"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="text-white text-primary-onHover p-2">
                                        <span className="fab fa-linkedin-in"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="text-white text-primary-onHover p-2">
                                        <span className="fab fa-github"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <Newsletter />
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
