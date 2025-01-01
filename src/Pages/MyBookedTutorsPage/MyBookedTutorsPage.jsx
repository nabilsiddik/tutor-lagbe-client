import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { authContext } from './../../Contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const MyBookedTutorsPage = () => {

  const [myBookedTutors, setMyBookedTutors] = useState([])
  const {user} = useContext(authContext)

  
  const handleReviewTutorial = async(tutor) => {
    const response = await axios.post(`${import.meta.env.VITE_MAIN_URL}/my-booked-tutors/${tutor._id}`, tutor)
  }

 
  useEffect(()=>{
    if(user){
      const getMybookedTutors = async() => {
        await axios.get(`${import.meta.env.VITE_MAIN_URL}/my-booked-tutors?email=${user && user?.email}`)
        .then(res => {
          setMyBookedTutors(res.data)
        })
      }
  
      getMybookedTutors()
    }
  }, [handleReviewTutorial])


  return (
    <div id='my_booked_tutors'>
      <div className="container py-10">
        <div className="display_my_booked_tutors">
          <div className="overflow-x-auto">
            <table className="table flex items-center">
              {/* head */}
              <thead className='hidden md:block'>
                <tr className='flex justify-between flex-col md:flex-row dark:bg-darklight dark:text-white'>
                  <th>Info</th>
                  <th>Review</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myBookedTutors.length > 0 && myBookedTutors.map((tutor) => {
                  const { tutorName, tutorImage, price, language, review, _id } = tutor
                  return <tr key={_id} className='flex items-center justify-between flex-col md:flex-row dark:bg-darklight dark:text-white'>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={tutorImage && tutorImage}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{tutorName && tutorName}</div>
                          <div className="text-sm opacity-50">{language && language}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <br />
                      <span className="badge badge-ghost badge-sm">{review ? review : 0} Review</span>
                    </td>
                    <td>
                      <p>BDT {price && price}</p>
                    </td>
                    <th>
                      <button onClick={() => handleReviewTutorial(tutor)} className='btn bg-primary text-white hover:bg-hover'>Review</button>
                    </th>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBookedTutorsPage
