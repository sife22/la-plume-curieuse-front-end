import React, { useEffect } from 'react'
import SideNav from '../SideNav/SideNav'
import About from '../About/About'
import Contact from '../Contact/Contact'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import ErrorPage from '../ErrorPage/ErrorPage'


function Layout() {

    return (
        <section className="d-flex">
            <SideNav />
            <Outlet />
        </section>
    )
}

export default Layout
