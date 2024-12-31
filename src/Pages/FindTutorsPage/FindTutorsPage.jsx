import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const FindTutorsPage = () => {

    const [allTutors, setAllTutors] = useState([])

    useEffect(() => {
        const findTutors = async () => {
            await axios.get(`${import.meta.env.VITE_MAIN_URL}/tutors`)
                .then(res => {
                    setAllTutors(res.data)
                })
        }

        findTutors()
    }, [])

    return (
        <div id='find_tutors_page'>
            <div className="container py-10">
                <h1 className='text-center mb-10'>All Tutors</h1>

                <div className="display_tutors grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allTutors.length > 0 && allTutors.map((tutor) => {

                        const { _id, tutorName, tutorImage, language, review, description } = tutor

                        return <div className="card card-side bg-base-100 shadow-xl">
                            <figure className='w-5/12'>
                                <img className='w-full'
                                    src={tutorImage && tutorImage}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{tutorName && tutorName}</h2>
                                <p>{description && description}</p>
                                <p>{language && language}</p>
                                <p>{review && review} Star Review</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/tutor-details/${_id}`}>
                                        <button className="btn bg-primary w-full mt-2 hover:bg-hover text-white">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FindTutorsPage
