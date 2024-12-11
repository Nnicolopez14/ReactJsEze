import CartWidget from './CartWidget'
import "./navbar.css"
import React from 'react'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='brand'>
                <h1>Kloudd</h1>
            </div>

            <ul className='categories'>
                <li className='category'>
                    <Link>Remeras</Link>
                </li>
                <li className='category'>
                    <Link>Pantalones</Link>
                </li>
                <li className='category'>
                    <Link>Buzos</Link>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar