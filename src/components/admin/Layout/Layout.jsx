import React from 'react'
import SideNav from '../SideNav/SideNav'
import { Outlet } from 'react-router-dom'

function Layout() {
    console.log('AdminLayout rendu');

    return (
        <section class="d-flex">
            <SideNav />
            <Outlet />
        </section>
    )
}

export default Layout
