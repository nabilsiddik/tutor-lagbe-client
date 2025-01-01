import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const FindTutorsPage = () => {

    const [allTutors, setAllTutors] = useState([])
    const [searchedLanguage, setSearchLanguage] = useState('')

    useEffect(() => {
        const findTutors = async () => {
            await axios.get(`${import.meta.env.VITE_MAIN_URL}/tutors`)
                .then(res => {
                    setAllTutors(res.data)
                })
        }

        findTutors()
    }, [])

    const handleSearchTutor = (e) => {
        setSearchLanguage(e.target.value)
    }

    const filteredTutors = allTutors.filter((tutor) => tutor.language.toLowerCase().startsWith(searchedLanguage))
    

    return (
        <div id='find_tutors_page'>
            <div className="container py-10">
                <div className="flex justify-center flex-col mb-10">
                    <h1 className='text-center mb-3'>Find Tutors</h1>
                    <input onChange={handleSearchTutor} type="serach" className='input input-bordered md:w-6/12 lg:w-4/12 mx-auto text-black' placeholder='Search Tutor...' />
                </div>


                <div className="display_tutors grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredTutors.length > 0 && filteredTutors.map((tutor) => {

                        const { _id, tutorName, tutorImage, language, review, description } = tutor

                        return <div key={_id} className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 w-full max-w-md md:max-w-2xl mx-auto dark:bg-darklight dark:text-white">
                            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                                <img
                                    src={tutorImage}
                                    alt="Teacher"
                                    className="rounded-full"
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

                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Link to={`/tutor-details/${_id}`}>
                                            <button className="btn bg-primary w-full mt-2 hover:bg-hover text-white">Details</button>
                                        </Link>
                                    </div>
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
