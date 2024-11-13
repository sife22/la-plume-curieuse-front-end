import React, { useEffect, useState } from 'react'
import Newsletter from '../Newsletter/Newsletter'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../Footer/Footer';
import './Post.css';
import Categories from '../Categories/Categories';
import FlipMove from 'react-flip-move';
import AOS from 'aos';
import "aos/dist/aos.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Post() {
    const [active, setActive] = useState(false)

    // On augmente cette variable à chaque fois qu'on est sur cette page.
    const [views, setViews] = useState([]);

    // On utilise cette variable pour récupérer le slugPost stocké sur le URL.
    const { slugPost } = useParams();

    // Au cas où le post n'a pas été trouvée, On va utiliser cette variable pour une page 404.
    const [error404, setError404] = useState(false)

    // Pour stocker le post.
    const [post, setPost] = useState([]);

    // Ces deux variables pour gérer les commentaires.
    const [authorName, setAuthorName] = useState('');
    const [content, setContent] = useState('');

    const [errors, setErrors] = useState([]);
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingPost, setLoadingPost] = useState(true);

    // Pour récupérer tous les commentaires associés à ce post.
    const [comments, setComments] = useState([]);

    // On utilise cette fonction pour gérer l'envoi de commentaires.
    const handleComment = (e) => {
        setLoading(true)
        axios.post(`${process.env.REACT_APP_BASE_URL_WITH_API}/add-comment/${slugPost}`, { authorName, content }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setLoading(false)
            setResponse(response.data)
            setErrors([]);
            console.log(response.data.message);
            setComments(prevComments => [
                ...prevComments,
                { author_name: authorName, content }
            ]);
        }
        ).catch((error) => {
            setLoading(false)
            if (error.status === 422) {
                setErrors(error.response.data.errors);
                console.log(error);
            }
            console.log(error);
        }
        )
    }

    useEffect(() => {
        // On met cette ligne pour initialiser le package AOS.
        AOS.init({ duration: 1000 });
        axios.put(`${process.env.REACT_APP_BASE_URL_WITH_API}/add-view/${slugPost}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setViews(response.data.post.views);
        }
        ).catch((error) => console.log(error)
        )

        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-post/${slugPost}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setPost(response.data.post)
            setLoadingPost(false)
        }).catch((error) => {
            if (error.status === 404) {
                setError404(true)
            }
        });

        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-comments/${slugPost}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            console.log(response);

            setComments(response.data.comments)
        }).catch((error) => {
            if (error.status === 404) {
                setError404(true)
            }
        });
    }, [])

    if (error404) {
        return <ErrorPage />;
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
                    {loadingPost ? (
                        <>
                            <div
                                className="col-lg-8 mb-5"
                                style={{
                                    marginTop: '2rem',
                                }}
                            >
                                <SkeletonTheme baseColor="#202020" highlightColor="#E4112F">
                                    <p>
                                        <Skeleton count={20} />
                                    </p>
                                </SkeletonTheme>
                            </div>
                            <div
                                className="col-lg-4 col-md-5"
                                style={{
                                    marginTop: '2rem',
                                }}
                            >
                                <SkeletonTheme baseColor="#202020" highlightColor="#E4112F">
                                    <p>
                                        <Skeleton count={30} />
                                    </p>
                                </SkeletonTheme>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-lg-8 mb-5">
                                <img className="img-fluid" src={`${process.env.REACT_APP_BASE_URL_WITHOUT_API}/uploads/posts/picture/${post?.picture}`} alt="" />
                                <h1 className="text-white add-letter-space mt-4">{post?.title}</h1>
                                <h3 className="text-white add-letter-space mt-4">{post?.summary}</h3>
                                <ul className="post-meta mt-3 mb-4">
                                    <li className="d-inline-block mr-3">
                                        <span className="fas fa-clock text-primary"></span>
                                        <a className="ml-1" href='#!'>{post.created_at ? new Date(post?.created_at).toLocaleDateString('fr-FR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric'
                                        }) : null}</a>
                                    </li>
                                    <li className="d-inline-block mr-3">
                                        <span className="fas fa-list-alt text-primary"></span>
                                        {post.categories && post.categories.length > 0 ? (
                                            <Link className="ml-1" to={`/${post.categories[0].slug}`}>{post.categories[0].name}</Link>
                                        ) : (
                                            <span className="ml-1"></span>
                                        )}
                                    </li>
                                    <li className="d-inline-block mr-3">
                                        <span className="fas fa-eye text-primary"></span>
                                        <span className="ml-1 text-white">{views ? views : ''}</span>
                                    </li>
                                </ul>
                                <div dangerouslySetInnerHTML={{ __html: post?.content }} className='text-white' />
                            </div>

                            <div className="col-lg-4 col-md-5">
                                <Newsletter />
                                <Categories />
                                <div className="widget bg-dark p-4 text-center">
                                    <h2 className="widget-title text-white d-inline-block mt-4">Commentaires</h2>
                                    <div className="form-group mt-4 comments">
                                        <FlipMove>
                                            {comments.length !== 0 && comments.map((item) => (
                                                <p className="btn btn-dark comment mb-2"><span><u>{item.author_name}</u> : </span>{item.content}
                                                </p>
                                            ))}
                                        </FlipMove>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Pour les commentaires */}
                    <div className="col-md-8 mb-5" data-aos="zoom-out">
                        <div className="contact-form bg-dark">
                            <h1 className="text-white add-letter-space mb-5">Laisser un commentaire</h1>
                            <form className="needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <input type="text" id="name"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0" required
                                                placeholder='Nom complet : '
                                                onChange={(e) => setAuthorName(e.target.value)}
                                            />
                                            <p className={`text-warning ${!errors.authorName && 'invisible'}`}>{errors.authorName ? errors.authorName[0] : 'Feedback'}</p>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <input type="text" id="comment"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0" required
                                                placeholder='Votre commentaire : '
                                                onChange={(e) => setContent(e.target.value)}
                                            />
                                            <p className={`text-warning ${!errors.content && 'invisible'}`}>{errors.content ? errors.content[0] : 'Feedback'}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-3">
                                        <button type="button"
                                            onClick={handleComment}
                                            className="btn btn-sm btn-primary"
                                            disabled={loading || response.length !== 0}
                                        >{response.length !== 0 ? 'Merci' : 'Commenter'}</button>
                                        {response && (<p className="text-success mt-3">{response.message}</p>)}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Post
