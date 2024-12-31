import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { authContext } from '../../Contexts/AuthContext/AuthContext'

const TutorDetailsPage = () => {

    const { _id, tutorName, tutorEmail, tutorImage, language, description, price, review } = useLoaderData()

    const {user} = useContext(authContext)
    const email = user && user?.email

    const bookedTutor = {_id, tutorName, tutorImage, language, price, review, email, tutorEmail}

    const handleBookTutor = async() => {
        // save booked tutor to databse
        await axios.post(`${import.meta.env.VITE_MAIN_URL}/booked-tutors`, bookedTutor)
    }

    return (
        <div id='tutor_details'>
            <div className="container py-10 flex gap-5">
                {/* <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={tutorImage && tutorImage}
                            className='w-[300px]'
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{tutorName && tutorName}</h2>
                        <p>{description && description}</p>
                        <p>Language: {language && language}</p>
                        <p>Price: BDT {price && price}</p>
                        <p>{review && review} Star Rating</p>
                        <div className="card-actions">
                            <button onClick={handleBookTutor} className="btn bg-primary hover:bg-hover text-white">Book Now</button>
                        </div>
                    </div>
                </div> */}


                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 w-full mx-auto">
                            <div className="flex-shrink-0">
                                <img
                                    src={tutorImage}
                                    alt="Teacher"
                                    className="rounded-full w-[200px]"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-lg md:text-xl font-semibold">{tutorName}</h3>
                                </div>

                                <p className="text-sm mb-2">
                                    <strong>Speaks:</strong>
                                    <span className="text-teal-600 font-medium"> {language}</span>
                                </p>

                                <p>Review: {review}</p>

                                <p className="text-sm text-gray-600 mb-4">
                                    {description}
                                </p>

                            </div>
                </div>

                <div className='w-[40%]'>
                    <img className='w-full' src={tutorImage} alt="" />
                    <h4 className='mt-3 font-bold'>Price: BDT{price}</h4>
                    <button onClick={()=> handleBookTutor()} className="btn bg-primary w-full mt-2 hover:bg-hover text-white">Book Lesson</button>
                </div>
            </div>
        </div>
    )
}

export default TutorDetailsPage
