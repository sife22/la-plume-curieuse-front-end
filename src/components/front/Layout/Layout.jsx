import React from 'react'
import SideNav from '../SideNav/SideNav'
import { Outlet } from 'react-router-dom'


function Layout() {

    return (
        <section className="d-flex">
            <SideNav />
            <Outlet />
        </section>
    )
}

export default Layout
