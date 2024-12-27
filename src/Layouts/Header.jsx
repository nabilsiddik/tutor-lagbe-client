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
                        <li><NavLink>Find Tutors</NavLink></li>
                        <li><NavLink to={'/add-tutorials'}>Add Tutorials</NavLink></li>
                        <li><NavLink>My Tutorials</NavLink></li>
                        <li><NavLink>My Booked Tutors</NavLink></li>
                    </ul>
                </nav>

                {user?.email ?
                    <div className='flex items-center gap-5'>
                        <button onClick={handleLogout} className='btn'>Sign Out</button>
                        <div className="tooltip tooltip-bottom" data-tip={user?.email && user.displayName}>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                    <img src={user?.photoURL} alt="profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Link to={'/login'}><button className='btn'>Sign In</button></Link>
                }

            </div>
        </header>
    )
}

export default Header
