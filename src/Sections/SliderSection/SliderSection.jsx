import React from 'react'
import slide1 from '../../assets/images/slide-1.png'
import slide2 from '../../assets/images/slide-2.jpg'
import slide3 from '../../assets/images/slide-3.jpg'

const SliderSection = () => {
    return (
        <div id='slider_section'>
            <div className="carousel w-full h-[400px] md:h-[800px]">
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <img
                        src={slide1}
                        className="w-full h-full object-cover object-center" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={slide2}
                        className="w-full h-full object-cover object-center" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={slide3}
                        className="w-full h-full object-cover" />
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
