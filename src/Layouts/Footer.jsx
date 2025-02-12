import React from 'react'
import footerLogo from '../assets/images/Tutor.png'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer id='footer' className='bg-primary py-10'>
            <div className="container footer text-neutral-content p-10">
                <nav>
                    <img src={footerLogo} alt="" />
                    <p  className='text-white'>Leargest Tutor finding website <br /> in the world.</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Important Links</h6>
                    <li><NavLink className='text-white' to={'/find-tutors'}>Find Tutors</NavLink></li>
                    <li><NavLink className='text-white' to={'/my-tutorials'}>My Tutorials</NavLink></li>
                    <li><NavLink className='text-white' to={'/my-booked-tutors'}>My Booked Tutors</NavLink></li>
                </nav>

                <div>
                    <h6 className="footer-title text-white">Social Links</h6>
                    <ul className="mt-5 flex items-center gap-3 text-lg">
                        <li className='w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full text-black'><a href="https://www.facebook.com/codewithnabil"><FaFacebookF />
                        </a></li>
                        <li className='w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full text-black'><a href="https://www.linkedin.com/in/nabilsiddik/"><FaLinkedinIn />
                        </a></li>
                        <li className='w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full text-black'><a href="https://www.linkedin.com/in/nabilsiddik/"><BsTwitterX />
                        </a></li>
                        <li className='w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full text-black'><a href="https://www.linkedin.com/in/nabilsiddik/"><FaYoutube />
                        </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
