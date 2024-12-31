import React from 'react'
import { tutorCategories } from '../../Data/tutorCategories'
import { Link } from 'react-router-dom'; import { FaArrowRight } from "react-icons/fa";


const LanguageCategorySection = () => {
    return (
        <div id='language_category_section' className='py-16'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {tutorCategories.length > 0 && tutorCategories.map((category, index) => {
                    const { logo, title, subtitle, slug } = category

                    return <Link to={`/find-tutors/${slug}`} key={index}>
                        <div className='flex items-center justify-between gap-4 p-5 shadow-lg border rounded-lg'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <img className='w-[66px]' src={logo} alt="" />
                                </div>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{subtitle}</p>
                                </div>
                            </div>
                            <div>
                                <FaArrowRight />
                            </div>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default LanguageCategorySection
