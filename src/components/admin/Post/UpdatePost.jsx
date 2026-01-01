import { Editor } from '@tinymce/tinymce-react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'

function UpdatePost() {

    // Pour récupérer le post souhaité.
    const [post, setPost] = useState([]);

    // On utilise cette variable pour récupérer le slugPost stocké sur le URL.
    const { slugPost } = useParams()
        ;

    // On récupère les données stockées au store (RTK).
    const state = useSelector((state) => state.auth.value)

    // Pour gérer les erreurs.
    const [error404, setError404] = useState(false)
    const [errors, setErrors] = useState([]);

    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);

    // Pour récupérer les catégories si l'utilisateur veut modifier la catégorie.
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    // Pour les nouvelles données du post.
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [picture, setPicture] = useState();
    const [categoryId, setCategoryId] = useState();
    const [content, setContent] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASE_URL_WITH_API}/update-post/${slugPost}`, { title, summary, content, picture, categoryId }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            setMessage(response.data.message)
            setLoading(true);
            setTimeout(() => {
                navigate('/dashboard/articles')
            }, 2000
            )
        }).catch((error) => {
            if (error.status === 404) {
                setError404(true)
            } else if (error.status === 422) {
                setErrors(error.response.data.errors)
            }
        });
    }

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

        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/edit-post/${slugPost}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            setLoadingPage(true)
            setPost(response.data.post)
        }).catch((error) => {
            if (error.status === 404) {
                setError404(true)
            }
            if (error.status === 403) {
                navigate('/dashboard/articles')
            }
        });
    }, [])

    return (
        loadingPage ? (
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
                        <div className="col-md-11">
                            <div className="contact-form bg-dark">
                                <h1 className="text-white add-letter-space mb-5">{post && post.title}</h1>
                                <form className="needs-validation" novalidate>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-2">
                                                <label for="title" className="text-black-300">Titre</label>
                                                <input type="text" id="title"
                                                    defaultValue={post && post.title}
                                                    className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                    required onChange={(e) => setTitle(e.target.value)}
                                                />
                                                <p className={`text-warning ${!errors.title && 'invisible'}`}>{errors.title ? errors.title[0] : 'Feedback'}</p>


                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-2">
                                                <label for="summary" className="text-black-300">Description</label>
                                                <input type="text" id="summary"
                                                    defaultValue={post && post.summary}

                                                    className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                    required onChange={(e) => setSummary(e.target.value)}
                                                />
                                                <p className={`text-warning ${!errors.summary && 'invisible'}`}>{errors.summary ? errors.summary[0] : 'Feedback'}</p>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group mb-2">
                                                <label for="picture" className="text-black-300">Image</label>
                                                <input type="file" id="picture"
                                                    className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                    required onChange={(e) => setPicture(e.target.files[0])}
                                                />
                                                <p className={`text-warning ${!errors.picture && 'invisible'}`}>{errors.picture ? errors.picture[0] : 'Feedback'}</p>
                                                <img src={`${process.env.REACT_APP_BASE_URL_WITHOUT_API}/uploads/posts/picture/${post && post.picture}`} alt="" srcset="" className='mt-4' width='80px' height='50px' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group mb-2">
                                                <label for="category" className="text-black-300">Catégorie</label>
                                                <select className="form-control select bg-transparent rounded-0 border-bottom shadow-none px-0"
                                                    required onChange={(e) => setCategoryId(e.target.value)}
                                                >
                                                    {post.categories && categories && categories.map((category) => (
                                                        <option key={category.id} value={category.id}
                                                            selected={category.id === post.categories[0].id}
                                                        >{category.name}</option>
                                                    ))}
                                                </select>
                                                <p className={`text-warning ${!errors.categoryId && 'invisible'}`}>{errors.categoryId ? errors.categoryId[0] : 'Feedback'}</p>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group mb-2">
                                                <label for="content" className="text-black-300">Contenu</label>
                                                <Editor
                                                    apiKey='odjod7b9ev49934ntonrw0oqnostx31tenifmpp3ep7z2yev'
                                                    init={{
                                                        plugins: [
                                                            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'searchreplace', 'visualblocks', 'wordcount',
                                                        ],
                                                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                        tinycomments_mode: 'embedded',
                                                        menubar: '',
                                                        tinycomments_author: 'Author name',
                                                        mergetags_list: [
                                                            { value: 'First.Name', title: 'First Name' },
                                                            { value: 'Email', title: 'Email' },
                                                        ],
                                                    }}
                                                    initialValue={post && post.content}
                                                    onChange={(e) => setContent(e.target.getContent())}
                                                />
                                                <p className={`text-warning ${!errors.content && 'invisible'}`}>{errors.content ? errors.content[0] : 'Feedback'}</p>
                                            </div>
                                        </div>


                                        <div className="col-md-12 mt-3">
                                            <button type="submit" className="btn btn-sm btn-primary"
                                                onClick={handleUpdate}
                                                disabled={loading}
                                            >
                                                {loading ? 'Chargement...' : 'Ajouter'}
                                                <img
                                                    src="images/arrow-right.png" alt="" /></button>
                                            <Link to="/dashboard/articles"><button type="button" className="btn btn-sm btn-primary"
                                                disabled={loading}
                                            >Annuler </button></Link>

                                            <p className="text-danger mt-3"></p>
                                        </div>
                                        <div className="col-md-12">
                                            {message && <h2 className="text-success mt-3">{message}</h2>}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    )
}

export default UpdatePost
