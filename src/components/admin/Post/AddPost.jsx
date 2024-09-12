import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';


function AddPost() {

    const state = useSelector((state) => state.auth.value);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [picture, setPicture] = useState();
    const [categoryId, setCategoryId] = useState();
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

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

    const handleStore = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASE_URL_WITH_API}/add-post`, { title, summary, content, picture, categoryId }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            setErrors([]);
            setMessage(response.data.message);
            setLoading(true);
            setTimeout(() => {
                navigate('/dashboard')
            }, 2000
            )
        }).catch((error) => {
            if (error.status === 422) {
                console.log(error);
                setErrors(error.response.data.errors);
            } else {
                console.log(error);
            }
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
                    <div className="col-md-11">
                        <div className="contact-form bg-dark">
                            <h1 className="text-white add-letter-space mb-5">Ajouter un article</h1>
                            <form className="needs-validation" novalidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label for="title" className="text-black-300">Titre</label>
                                            <input type="text" id="title"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setTitle(e.target.value)} />
                                            <p className={`text-warning ${!errors.title && 'invisible'}`}>{errors.title ? errors.title[0] : 'Feedback'}</p>


                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label for="summary" className="text-black-300">Description</label>
                                            <input type="text" id="summary"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setSummary(e.target.value)} />
                                            <p className={`text-warning ${!errors.summary && 'invisible'}`}>{errors.summary ? errors.summary[0] : 'Feedback'}</p>

                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label for="picture" className="text-black-300">Image</label>
                                            <input type="file" id="picture"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setPicture(e.target.files[0])} />
                                            <p className={`text-warning ${!errors.picture && 'invisible'}`}>{errors.picture ? errors.picture[0] : 'Feedback'}</p>

                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label for="category" className="text-black-300">Catégorie</label>
                                            <select className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setCategoryId(e.target.value)}
                                            >
                                                <option value=""></option>
                                                {categories && categories.map((category) => (
                                                    <option key={category.id} value={category.id}>{category.name}</option>
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
                                                        // Core editing features
                                                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'searchreplace', 'visualblocks', 'wordcount',
                                                        // Your account includes a free trial of TinyMCE premium features
                                                        // Try the most popular premium features until Sep 20, 2024:
                                                        //  'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'mentions', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                                                    ],
                                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                    tinycomments_mode: 'embedded',
                                                    menubar: '',
                                                    tinycomments_author: 'Author name',
                                                    mergetags_list: [
                                                        { value: 'First.Name', title: 'First Name' },
                                                        { value: 'Email', title: 'Email' },
                                                    ],
                                                    // ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                                                }}
                                                initialValue=""
                                                onChange={(e) => setContent(e.target.getContent())}

                                            />
                                            {/* <textarea name="content" id="content"
                                                className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                                required onChange={(e) => setContent(e.target.value)}
                                            >
                                            </textarea> */}
                                            <p className={`text-warning ${!errors.content && 'invisible'}`}>{errors.content ? errors.content[0] : 'Feedback'}</p>
                                        </div>
                                    </div>


                                    <div className="col-md-12 mt-3">
                                        <button type="submit" className="btn btn-sm btn-primary" onClick={handleStore} disabled={loading}> {loading ? 'Chargement...' : 'Ajouter'} <img
                                            src="images/arrow-right.png" alt="" /></button>
                                        <Link to="/dashboard"><button type="button" className="btn btn-sm btn-primary" disabled={loading}>Annuler </button></Link>

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
    )
}

export default AddPost
