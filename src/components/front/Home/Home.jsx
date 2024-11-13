import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../Newsletter/Newsletter'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import Founder from '../Founder/Founder'
import Categories from '../Categories/Categories'
import AOS from 'aos';
import "aos/dist/aos.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function Home() {

    // On utilise cette variable pour stocker les posts.
    const [posts, setPosts] = useState([]);

    // Cette variable est utilisée pour stocker les informations de pagination envoyées par le backend.
    const [info, setInfo] = useState({});

    const url = `${process.env.REACT_APP_BASE_URL_WITH_API}/get-posts`

    const [loading, setLoading] = useState(true)


    // On utilise cette fonction pour récupérer les postes.
    const getPosts = (url) => {

        // On récupére tous les articles.
        axios.get(url, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setPosts(response.data.posts.data);
            setInfo(response.data.posts)
            console.log(response.data.posts);
            setLoading(false)
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        // On met cette ligne pour initialiser le package AOS.
        AOS.init({ duration: 1000 });

        // On appelle la fonction getPosts.
        getPosts(url);
    }, [])

    // On gère le clic sur le bouton 'Précédent'.
    const handlePreviousPage = () => {
        getPosts(info.prev_page_url)
        window.scrollTo(0, 0)
    }

    // On gère le clic sur le bouton 'Suivant'.
    const handleNextPage = () => {
        getPosts(info.next_page_url)
        window.scrollTo(0, 0)
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

            <div className="container pt-4 mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-8">
                        <h1 className='mb-5 text-white lato'>La Plume Curieuse</h1>
                        {/* On affiche tous les posts récupérés par la fonction getPosts */}
                        {loading ?
                            <div
                                style={{
                                    marginTop: '2rem',
                                }}
                            >
                                <SkeletonTheme baseColor="#202020" highlightColor="#E4112F">
                                    <p>
                                        <Skeleton count={10} />
                                    </p>
                                </SkeletonTheme>
                            </div>
                            : (
                            posts && posts.map((post) => (
                                <div className="card post-item bg-transparent border-0 mb-3" key={post.id} data-aos="zoom-out">
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
                                                    hour: 'numeric',
                                                    minute: 'numeric'
                                                })}</a>
                                            </li>
                                            <li className="d-inline-block mr-3">
                                                <span className="fas fa-list-alt text-primary"></span>
                                                <Link className="ml-1" to={`/${post.categories[0].slug}`}>{post.categories[0].name}</Link>
                                            </li>
                                            <li className="d-inline-block mr-3">
                                                <span className="fas fa-eye text-primary"></span>
                                                <span className="ml-1 text-white">{post.views}</span>
                                            </li>
                                        </ul>
                                        <h2 className="card-title">
                                            <Link className="text-white opacity-75-onHover" to={`/${post.categories[0].slug}/${post.slug}`}>{post.title.slice(0, 50)}...</Link>
                                            <p className="span">{post.summary.slice(0, 100)}...</p>
                                        </h2>
                                    </div>
                                </div>
                            )))
                        }

                        {/* On affiche conditionnellement les boutons de pagination */}
                        <ul className='pagination justify-content-centre mb-5'>
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
                    <div className="col-lg-4 col-md-5">
                        <Founder />
                        <Newsletter />
                        <Categories />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
