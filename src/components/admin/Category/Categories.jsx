import React from 'react'

function Categories() {
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
                <h1 className="text-white add-letter-space mb-3">Catégories</h1>
            </div>
        </div>
    </div>
</div>
  )
}

export default Categories
