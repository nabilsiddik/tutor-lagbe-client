import React from 'react'
import logo from '../assets/images/Tutor.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
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

            <Link to={'/login'}><button className='btn'>Login</button></Link>
        </div>
    </header>
  )
}

export default Header
