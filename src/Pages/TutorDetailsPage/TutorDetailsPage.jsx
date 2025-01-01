import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { authContext } from '../../Contexts/AuthContext/AuthContext'

const TutorDetailsPage = () => {

    const { _id, tutorName, tutorEmail, tutorImage, language, description, price } = useLoaderData()

    const {user} = useContext(authContext)
    const email = user && user?.email
    const tutorId = _id

    const bookedTutor = {tutorId, tutorName, tutorImage, language, price, email, tutorEmail}

    const handleBookTutor = async() => {
        // save booked tutor to databse
        await axios.post(`${import.meta.env.VITE_MAIN_URL}/booked-tutors`, bookedTutor)
    }

    return (
        <div id='tutor_details'>
            <div className="container py-10 flex gap-5">
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
