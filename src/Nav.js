import React from 'react'
import "./Nav.css"
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        
            
        <div className="navbar">

            <Link to="/">
            <h3 className="logo">Blog</h3>
            </Link>

            <ul className="navlinks">

            <Link to="/">

            <li>Home</li>

            </Link>
            
            <Link to="/about">
            
            <li>About</li>

            </Link>

            <Link to="/contact">
            
            <li>Contact</li>
            
            </Link>
        </ul>
        </div>
    )
}
