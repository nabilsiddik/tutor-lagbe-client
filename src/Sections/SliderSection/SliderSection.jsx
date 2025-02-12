import React from 'react'
import slide1 from '../../assets/images/slide-2.jpg'
import slide2 from '../../assets/images/online-tutor-1.jpg'
import slide3 from '../../assets/images/online-tutor-2.jpg'
import { Link } from 'react-router-dom'

const SliderSection = () => {
    return (
        <div id='slider_section' className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-full ">
                    <div
                        className="hero md:h-[650px] h-[450px] lg:h-[800px]"
                        style={{
                            backgroundImage: `url(${slide2})`,
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold w-10/12 md:w-8/12 lg:w-8/12 mx-auto">Find the Perfect Tutor for You</h1>
                                <p className="mb-5 w-10/12 md:w-8/12 lg:w-8/12 mx-auto px-3">
                                    Browse expert tutors in various Languages to enhance your learning journey.
                                </p>
                                <Link to='/find-tutors'>
                                    <button className="btn bg-primary text-white border-none hover:bg-primary">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slide1})`,
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold w-10/12 md:w-8/12 lg:w-8/12 mx-auto">Learn a New Language with Native Tutors</h1>
                                <p className="mb-5 w-9/12 md:w-8/12 lg:w-8/12 mx-auto px-3">
                                    Connect with expert language tutors worldwide and practice speaking like a native
                                </p>
                                <Link to='/find-tutors'>
                                    <button className="btn bg-primary text-white border-none hover:bg-primary">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slide3})`,
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold w-10/12 md:w-8/12 lg:w-8/12 mx-auto">Speak with Confidence, Master Any Language</h1>
                                <p className="mb-5 w-10/12 md:w-8/12 lg:w-8/12 mx-auto px-3">
                                    Enhance your pronunciation, grammar, and conversation skills with professional tutors.
                                </p>
                                <Link to='/find-tutors'>
                                    <button className="btn bg-primary text-white border-none hover:bg-primary">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderSection
