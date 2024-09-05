import React from 'react'

function Founder() {
    return (
        <div className="widget text-center">
            <img className="author-thumb-sm rounded-circle d-block mx-auto" src="images/profile.jpg"
                alt="" />
            <h2 className="widget-title text-white d-inline-block mt-4">Le créateur</h2>
            <p className="mt-4">Sif eddine HADI, LPC est votre plume curieuse, vous pouvez trouver tout ce qui vous intéresse, c'est l'endroit idéal pour partager nos idées dans tous les domaines.
            </p>
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
    )
}

export default Founder
