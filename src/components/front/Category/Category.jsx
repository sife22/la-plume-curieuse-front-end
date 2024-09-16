import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer';

function Category() {
    const { slugCategory } = useParams();
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error404, setError404] = useState(true)
    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState({});


    const url = `${process.env.REACT_APP_BASE_URL_WITH_API}/get-posts/${slugCategory}`

    const getPosts = (url) => {

        axios.get(url, { params: { 'slugCategory': slugCategory } }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setPosts(response.data.posts.data)
            setInfo(response.data.posts)

            setError404(false)
        }).catch((error) => {
            if (error.status === 404) {
                setError404(true)
            }
            console.log(error);
        });
    }

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


        getPosts(url);


    }, [slugCategory])

    const handlePreviousPage = () => {
        getPosts(info.prev_page_url)
        window.scrollTo(0, 0)
    }

    const handleNextPage = () => {
        getPosts(info.next_page_url)
        window.scrollTo(0, 0)
    }


    return (
        error404 ? (<div></div>) : (
            <div className="main-content" >
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
                        <div className="col-11">
                            <div className="bg-dark p-5 mb-5">
                                <div className="row no-gutters">
                                    <div className="col-xl-6 border-right border-lg-0 pr-0 pr-xl-5">
                                        <h1 className="text-white add-letter-space">{category?.name}</h1>
                                        <div className="breadcrumb-wrap mt-3">
                                            <Link to="/">Accueil</Link>
                                            <span>/</span>
                                            <span>Catégorie</span>
                                        </div>
                                        <hr className='hr'></hr>
                                        <p>{category?.description}</p>
                                    </div>
                                    <div className="col-xl-6 pl-0 pl-xl-5 mt-4 mt-xl-0">
                                        <div className="categores-links text-capitalize">
                                            <h3 className="text-white add-letter-space mb-3">Autres Catégories</h3>
                                            {categories.length > 0 && categories.map((item) => (
                                                <Link className="border" to={`/${item.slug}`} key={item.id}>{item.name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between">
                        {posts && posts.map((post) => (
                            <div className="col-lg-11" key={post.id}>
                                <div className="card post-item bg-transparent border-0 mb-5">
                                    <Link to={`/${slugCategory}/${post.slug}`}>
                                        <img className="card-img-top rounded-0" src={`${process.env.REACT_APP_BASE_URL_WITHOUT_API}/uploads/posts/picture/${post.picture}`} alt="" />
                                    </Link>
                                    <div className="card-body px-0">
                                        <h2 className="card-title">
                                            <Link className="text-white opacity-75-onHover" to={`/${slugCategory}/${post.slug}`}>{post.title}</Link>
                                        </h2>
                                        <ul className="post-meta mt-3">
                                            <li className="d-inline-block mr-3">
                                                <span className="fas fa-clock text-primary"></span>
                                                <a className="ml-1" href="#!">{new Date(post.created_at).toLocaleDateString('fr-FR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}</a>
                                            </li>

                                        </ul>
                                        <p className="card-text my-4">{post.summary}</p>
                                        <Link to={`/${slugCategory}/${post.slug}`} className="btn btn-primary">Lire plus <img
                                            src="images/arrow-right.png" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <ul className='pagination justify-content-centre'>
                            {info.prev_page_url ? (
                                <li className="page-item">
                                    <button className='btn btn-primary' onClick={handlePreviousPage}>
                                        Précédent
                                    </button>
                                </li>
                            ) : null}
                            {info.next_page_url ? (
                                <li className="page-item">
                                    <button className='btn btn-primary' onClick={handleNextPage}>
                                        Suivant
                                    </button>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    )
}

export default Category
