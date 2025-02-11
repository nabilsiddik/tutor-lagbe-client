import React, { useContext, useState } from 'react'
import logo from '../assets/images/Tutor.png'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../Contexts/AuthContext/AuthContext'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header = () => {

    const { user, userSignOut, darkMode, setDarkMode } = useContext(authContext)

    const handleLogout = () => {
        userSignOut()
    }

    const mobileMenu =
        <nav className="header_menu">
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  dark:bg-red-600">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/find-tutors'}>Find Tutors</NavLink></li>
                {user?.email && <li><NavLink to={'/add-tutorials'}>Add Tutorials</NavLink></li>}
                {user?.email && <li><NavLink to={'/my-tutorials'}>My Tutorials</NavLink></li>}
                {user?.email && <li><NavLink to={'/my-booked-tutors'}>My Booked Tutors</NavLink></li>}
            </ul>
        </nav>

    const mainMenu = <nav className="header_menu">
        <ul
            tabIndex={0}
            className="menu menu-horizontal px-1">
            <li><NavLink className={'text-white text-md'} to={'/'}>Home</NavLink></li>
            <li><NavLink className={'text-white text-md'} to={'/find-tutors'}>Find Tutors</NavLink></li>
            {user?.email && <li><NavLink className={'text-white text-md'} to={'/add-tutorials'}>Add Tutorials</NavLink></li>}
            {user?.email && <li><NavLink className={'text-white text-md'} to={'/my-tutorials'}>My Tutorials</NavLink></li>}
            {user?.email && <li><NavLink className={'text-white text-md'} to={'/my-booked-tutors'}>My Booked Tutors</NavLink></li>}
        </ul>
    </nav>

    return (
        <header id='header' className='bg-primary py-2 fixed top-0 w-full z-[99999]'>
            <div className="container">
                <div className="navbar bg-primary flex flex-col md:flex-row gap-4">
                    <div className="navbar-start flex justify-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            {mobileMenu}
                        </div>
                        <a className="text-xl">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        {mainMenu}
                    </div>
                    <div className="navbar-end flex flex-col gap-3 sm:flex-row justify-center">
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

                        <div className="dark_light_mode flex items-center gap-3 text-3xl ml-5">
                            <MdDarkMode onClick={() => setDarkMode(true)} className='cursor-pointer' />
                            <MdLightMode onClick={() => setDarkMode(false)} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
