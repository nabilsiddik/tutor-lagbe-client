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

            return <div key={tutor._id} className='shadow-lg rounded-lg py-5 px-5'>
              <div className="flex gap-3">
                <div>
                  <img src={tutorImage} alt="tutor profile" />
                  {console.log(tutorImage)}
                </div>
                <div>
                  <h3>{tutorName}</h3>
                  <p>{language}</p>
                  <p>{description}</p>
                  <p>{review} Review</p>
                  <p>BDT{price}</p>
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
