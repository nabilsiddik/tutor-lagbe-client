import React from 'react'
import { Link } from 'react-router-dom'

const TutorCard = ({tutor}) => {

    const { _id, tutorName, tutorImage, language, review, description } = tutor

    return (
        <div key={_id} className="bg-white border rounded-lg shadow-md py-10 px-6 block md:flex gap-5 dark:bg-darklight dark:text-white">
            <div className="w-4/12 mb-3 md:mb-0">
                <img
                    src={tutorImage}
                    alt="Teacher"
                    className="rounded-full mb-2 w-20"
                />
                <p className="text-sm mb-1">
                    <span><strong>Speaks:</strong></span>
                    <span className="text-teal-600 font-medium"> {language}</span>
                </p>
                <p>Review: {review}</p>
            </div>

            <div className="w-8/12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-semibold">{tutorName}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    {description}
                </p>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link to={`/tutor-details/${_id}`}>
                            <button className="btn bg-primary w-fullhover:bg-hover text-white">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TutorCard
