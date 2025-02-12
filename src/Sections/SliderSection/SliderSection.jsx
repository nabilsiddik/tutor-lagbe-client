import React from 'react'
import slide1 from '../../assets/images/slide-2.jpg'
import slide2 from '../../assets/images/online-tutor-1.jpg'
import slide3 from '../../assets/images/online-tutor-2.jpg'

const SliderSection = () => {
    return (
        <div id='slider_section'>
            <div className="carousel w-full h-[400px] md:h-[800px]">
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slide2})`,
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 text-5xl font-bold">Find the Perfect Tutor for You</h1>
                                <p className="mb-5 max-w-md mx-auto">
                                    Browse expert tutors in various Languages to enhance your learning journey.
                                </p>
                                <button className="btn bg-primary text-white border-none hover:bg-primary">Get Started</button>
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
                                <h1 className="mb-5 text-5xl font-bold">Learn a New Language with Native Tutors</h1>
                                <p className="mb-5 max-w-md mx-auto">
                                Connect with expert language tutors worldwide and practice speaking like a native
                                </p>
                                <button className="btn bg-primary text-white border-none hover:bg-primary">Get Started</button>
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
                                <h1 className="mb-5 text-5xl font-bold">Speak with Confidence, Master Any Language</h1>
                                <p className="mb-5 max-w-md mx-auto">
                                Enhance your pronunciation, grammar, and conversation skills with professional tutors.
                                </p>
                                <button className="btn bg-primary text-white border-none hover:bg-primary">Get Started</button>
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
