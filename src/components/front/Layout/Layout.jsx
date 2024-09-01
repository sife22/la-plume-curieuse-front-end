import React from 'react'
import SideNav from '../SideNav/SideNav'
import About from '../About/About'
import Contact from '../Contact/Contact'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import ErrorPage from '../ErrorPage/ErrorPage'

function Layout() {
    return (
        <section class="d-flex">
            <SideNav />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/qui-somme-nous' element={<About />} />
                <Route path='/politique-confidentialite' element={<PrivacyPolicy />} />
                <Route path='/connexion' element={<Login />} />
            </Routes>
        </section>
    )
}

export default Layout
