import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TutorCategoryPage = () => {

  const tutors = useLoaderData()
  console.log(tutors)

  return (
    <div id='tutor_category_page'>
      <div className="container py-20">
        <h2 className='text-center'>Tutors</h2>
        <div className="display_tutors_by_language grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tutors.length > 0 && tutors.map((tutor) => {
            const { tutorName, tutorImage, language, price, review, description } = tutor

            return <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 w-full max-w-md md:max-w-2xl mx-auto">
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
      
              <p className="text-sm text-gray-600 mb-4">
                {description}
              </p>
      
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="text-lg font-semibold text-gray-800 mb-4 md:mb-0">
                  BDT {price}
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-hover">
                    Book trial
                  </button>
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

export default TutorCategoryPage
