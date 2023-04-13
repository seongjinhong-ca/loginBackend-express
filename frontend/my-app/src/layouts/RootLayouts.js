import React from 'react'
import {NavLink, Outlet} from "react-router-dom";

export default function RootLayouts() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1> routers navigation</h1>
                <NavLink to="/landing">Landing</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>

            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
