import React, { useEffect, useState } from 'react'
import Newsletter from '../Newsletter/Newsletter'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';

function Post() {
    const [categories, setCategories] = useState([]);
    const { slugPost } = useParams();
    const [error404, setError404] = useState(false)
    const [post, setPost] = useState([]);


    useEffect(() => {
        // console.log(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-post/${slugPost}-${idPost}`);
        console.log(slugPost);

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

        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-post/${slugPost}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setPost(response.data.post)
            console.log(response);
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
                    <div className="col-lg-8">
                        <img className="img-fluid" src={`${process.env.REACT_APP_BASE_URL_WITHOUT_API}/uploads/posts/picture/${post?.picture}`} alt="" />
                        <h1 className="text-white add-letter-space mt-4">{post?.title}</h1>
                        <h3 className="text-white add-letter-space mt-4">{post?.summary}</h3>
                        <ul className="post-meta mt-3 mb-4">
                            <li className="d-inline-block mr-3">
                                <span className="fas fa-clock text-primary"></span>
                                <a className="ml-1" href='#!'>{new Date(post?.created_at).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}</a>
                            </li>
                            <li className="d-inline-block">
                                <span className="fas fa-list-alt text-primary"></span>
                                {post.categories && post.categories.length > 0 ? (
                                    <Link className="ml-1" to={`/${post.categories[0].slug}`}>{post.categories[0].name}</Link>
                                ) : (
                                    <span className="ml-1"></span>
                                )}
                            </li>
                        </ul>

                        <p>{post?.content}</p>
                    </div>
                    <div className="col-lg-4 col-md-5">
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
        </div>
    )
}

export default Post
