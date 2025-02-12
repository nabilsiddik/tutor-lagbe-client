import React, { useContext, useState } from 'react'
import logo from '../assets/images/Tutor.png'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../Contexts/AuthContext/AuthContext'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6"

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const { user, userSignOut, darkMode, setDarkMode } = useContext(authContext)

    const handleLogout = () => {
        userSignOut()
    }

    return (
        <header id='header' className={`h-20overflow-hidden bg-primary text-white py-3 fixed top-0 w-full z-[99999]`}>
            <nav className={`mobile-menu order-3 lg:order-2 ${mobileMenu ? 'translate-x-[0]' : 'translate-x-[120%]'} fixed top-[103px] right-0 border-l-2 w-[80%] py-5 rounded-m min-h-screen transition-all duration-[.3s] ease-in-out z-[9999] bg-primary`}>

                <div className='flex items-center gap-3 ml-5 mb-7'>
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

                <ul className='flex flex-col gap-4 ml-5'>
                    <li><NavLink className={'text-white text-md'} to={'/'}>Home</NavLink></li>
                    <li><NavLink className={'text-white text-md'} to={'/find-tutors'}>Find Tutors</NavLink></li>
                    {user?.email && <li><NavLink className={'text-white text-md'} to={'/add-tutorials'}>Add Tutorials</NavLink></li>}
                    {user?.email && <li><NavLink className={'text-white text-md'} to={'/my-tutorials'}>My Tutorials</NavLink></li>}
                    {user?.email && <li><NavLink className={'text-white text-md'} to={'/my-booked-tutors'}>My Booked Tutors</NavLink></li>}
                </ul>

                <div className="social-icons mt-8 pl-5">
                    <h3 className='mb-3 font-bold text-white text-2xl'>Follow Me</h3>
                    <ul className='flex items-center gap-4 text-white'>
                        <NavLink to='https://github.com/nabilsiddik' className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-[.3s]'>
                            <FaGithub />
                        </NavLink>
                        <NavLink to={'https://www.linkedin.com/in/nabilsiddik/'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-[.3s]'>
                            <FaLinkedinIn />
                        </NavLink>
                        <NavLink to={'https://x.com/SiddikNabil'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-[.3s]'>
                            <FaXTwitter />
                        </NavLink>
                        <NavLink to={'https://www.facebook.com/codewithnabil'} className='border w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-[.3s]'>
                            <FaFacebookF />
                        </NavLink>
                    </ul>
                </div>
            </nav>

            <div className="container h-20 flex items-center justify-between">
                <div className="logo order-1 lg:order-1">
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="order-3 lg:order-2 hidden lg:block">
                    <ul
                        className="flex items-center gap-5">
                        <li className='hover:border-b-2 border-white'><NavLink to={'/'}>Home</NavLink></li>
                        <li className='hover:border-b-2 border-white'><NavLink to={'/find-tutors'}>Find Tutors</NavLink></li>
                        {user?.email && <li className='hover:border-b-2 border-white'><NavLink to={'/add-tutorials'}>Add Tutorials</NavLink></li>}
                        {user?.email && <li className='hover:border-b-2 border-white'><NavLink to={'/my-tutorials'}>My Tutorials</NavLink></li>}
                        {user?.email && <li className='hover:border-b-2 border-white'><NavLink to={'/my-booked-tutors'}>My Booked Tutors</NavLink></li>}
                    </ul>
                </nav>

                <div className="actions order-2 lg:order-3 flex items-center gap-5">
                    <div className='sm:flex items-center gap-7 hidden'>
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

                        <div className="dark_light_mode md:flex items-center gap-3 text-3xl ml-5 hidden">
                            <MdDarkMode onClick={() => setDarkMode(true)} className='cursor-pointer' />
                            <MdLightMode onClick={() => setDarkMode(false)} className='cursor-pointer' />
                        </div>
                    </div>
                    <div className="mobile_menu_icon text-2xl lg:hidden">
                        <div onClick={() => setMobileMenu(!mobileMenu)} className='cursor-pointer'>
                            <FaBarsStaggered />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
