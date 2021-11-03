import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="./">Home</Link> 
                    <Link className="nav-item nav-link" to="./login">Login</Link>
                    <Link className="nav-item nav-link" to="./about">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
