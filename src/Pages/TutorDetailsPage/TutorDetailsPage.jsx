import axios from 'axios'
import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
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
            <div className="container py-10">
                <div className="card card-side bg-base-100 shadow-xl">
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
                </div>
            </div>
        </div>
    )
}

export default TutorDetailsPage
