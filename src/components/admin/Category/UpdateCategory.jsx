import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateCategory() {
    const state = useSelector((state)=>state.auth.value);
    const { slugCategory } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);


    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_WITH_API}/get-category`, { params: { 'slug': slugCategory } }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            setCategory(response.data.category)
        }).catch((error) => {
            console.log(error);
        });
    }, [slugCategory])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_BASE_URL_WITH_API}/update-category/${category.slug}-${category.id}`, {name, description}, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.access_token}`,
            }
        }).then((response) => {
            console.log(response)
            setErrors([]);
            setMessage(response.data.message);
            setLoading(true);
            setTimeout(() => {
                navigate('/dashboard/categories')
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
                    <h1 className="text-white add-letter-space mb-5">Modifer la catégorie {category && (category.name)}</h1>
                    <form className="needs-validation" novalidate>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <label for="name" className="text-black-300">Nom</label>
                                    <input type="text" id="name"
                                        // value={category.name}
                                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                        required 
                                        onChange={(e) => setName(e.target.value)}
                                         />
                                    <p className={`text-warning ${!errors.name && 'invisible'}`}>{errors.name ? errors.name[0] : 'Feedback'}</p>


                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <label for="description" className="text-black-300">Description</label>
                                    <input type="text" id="description"
                                        // value={category.description}
                                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                                        required 
                                        onChange={(e) => setDescription(e.target.value)} 
                                        />
                                    <p className={`text-warning ${!errors.description && 'invisible'}`}>{errors.description ? errors.description[0] : 'Feedback'}</p>

                                </div>
                            </div>

                            <div className="col-md-12 mt-3">
                                <button type="submit" className="btn btn-sm btn-primary" disabled={loading} onClick={handleUpdate}>{loading ? 'Chargement...' : 'Modifier'} <img
                                    src="images/arrow-right.png" alt="" /></button>
                                    <Link to="/dashboard/categories"><button type="button" className="btn btn-sm btn-primary" disabled={loading}>Annuler </button></Link>
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

export default UpdateCategory
