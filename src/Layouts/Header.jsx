import React, { useContext, useState } from 'react'
import logo from '../assets/images/Tutor.png'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../Contexts/AuthContext/AuthContext'

const Header = () => {

    const { user, userSignOut } = useContext(authContext)

    const handleLogout = () => {
        userSignOut()
    }

    return (
        <header id='header' className='bg-primary'>
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <nav className="header_menu">
                    <ul className='flex items-center gap-5 text-white font-[500]'>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Login</NavLink></li>
                        <li><NavLink>Blog</NavLink></li>
                    </ul>
                </nav>

                {user?.email ?
                    <button onClick={handleLogout} className='btn'>Sign Out</button> 
                    :
                    <Link to={'/login'}><button className='btn'>Sign In</button></Link>
                }
               
            </div>
        </header>
    )
}

export default Header
