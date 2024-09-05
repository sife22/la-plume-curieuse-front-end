import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../Footer/Footer';

function Category() {
    const { slugCategory } = useParams();
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error404, setError404] = useState(true)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-categories`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            const filteredCategories = response.data.categories.filter(item => item.slug !== slugCategory);
            setCategories(filteredCategories);
        }).catch((error) => {
            console.log(error);
        });

        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-category`, { params: { 'slug': slugCategory } }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setCategory(response.data.category)
        }).catch((error) => {
            if (error.status === 404) {
                console.log(error);
            }
        });

        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-posts/${slugCategory}`, { params: { 'slugCategory': slugCategory } }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setPosts(response.data.posts)
            console.log(response);
            setError404(false)
        }).catch((error) => {
            if (error.status === 404) {
                console.log(error);
                setError404(true)
            } else {
                console.log(error);
            }
        });


    }, [slugCategory])


    return (
        error404 ? (<ErrorPage />) : (
            <div class="main-content" >
                <header class="mobile-nav pt-4">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <a href="index.html">
                                    <img src="images/logo.png" alt="" />
                                </a>
                            </div>
                            <div class="col-6 text-right">
                                <button class="nav-toggle bg-transparent border text-white">
                                    <span class="fas fa-bars"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="nav-toggle-overlay"></div>

                <div class="container py-4 my-5">
                    <div class="row">
                        <div class="col-11">
                            <div class="bg-dark p-5 mb-5">
                                <div class="row no-gutters">
                                    <div class="col-xl-6 border-right border-lg-0 pr-0 pr-xl-5">
                                        <h1 class="text-white add-letter-space">{category?.name}</h1>
                                        <div class="breadcrumb-wrap mt-3">
                                            <Link to="/">Accueil</Link>
                                            <span>/</span>
                                            <span>Catégorie</span>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 pl-0 pl-xl-5 mt-4 mt-xl-0">
                                        <div class="categores-links text-capitalize">
                                            <h3 class="text-white add-letter-space mb-3">Autres Catégories</h3>
                                            {categories.length > 0 && categories.map((item) => (
                                                <Link class="border" to={`/${item.slug}`} key={item.id}>{item.name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-between">
                        {posts && posts.map((post) => (
                            <div class="col-lg-11" key={post.id}>
                                <div class="card post-item bg-transparent border-0 mb-5">
                                    <Link to={`/${slugCategory}/${post.slug}`}>
                                        <img class="card-img-top rounded-0" src={`${process.env.REACT_APP_BASE_URL_WITHOUT_API}/uploads/posts/picture/${post.picture}`} alt="" />
                                    </Link>
                                    <div class="card-body px-0">
                                        <h2 class="card-title">
                                            <Link class="text-white opacity-75-onHover" to={`/${slugCategory}/${post.slug}`}>{post.title}</Link>
                                        </h2>
                                        <ul class="post-meta mt-3">
                                            <li class="d-inline-block mr-3">
                                                <span class="fas fa-clock text-primary"></span>
                                                <a class="ml-1" href="#!">{new Date(post.created_at).toLocaleDateString('fr-FR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}</a>
                                            </li>

                                        </ul>
                                        <p class="card-text my-4">{post.summary}</p>
                                        <Link to={`/${slugCategory}/${post.slug}`} class="btn btn-primary">Lire plus <img
                                            src="images/arrow-right.png" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* 
                    <div class="col-lg-5">
                        <div class="card post-item bg-transparent border-0 mb-5">
                            <a href="post-details.html">
                                <img class="card-img-top rounded-0" src="images/post/post-md/01.png" alt="" />
                            </a>
                            <div class="card-body px-0">
                                <h2 class="card-title">
                                    <a class="text-white opacity-75-onHover" href="post-details.html">Occaecat ut elit
                                        voluptate on nisi est nisi euro occaecat</a>
                                </h2>
                                <ul class="post-meta mt-3 mb-4">
                                    <li class="d-inline-block mr-3">
                                        <span class="fas fa-clock text-primary"></span>
                                        <a class="ml-1" href="#">24 April, 2016</a>
                                    </li>
                                    <li class="d-inline-block">
                                        <span class="fas fa-list-alt text-primary"></span>
                                        <a class="ml-1" href="#">Photography</a>
                                    </li>
                                </ul>
                                <a href="post-details.html" class="btn btn-primary">Read More <img
                                    src="images/arrow-right.png" alt="" /></a>
                            </div>
                        </div>

                    </div> */}
                    </div>
                </div>
            <Footer />

            </div>
        ) 
    )
}

export default Category
