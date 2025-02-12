import React, { createContext, useContext, useEffect, useState } from 'react'
import { authContext } from '../AuthContext/AuthContext'
import axios from 'axios'

const tutorContext = createContext(null)

const TutorContextProvider = ({children}) => {

        const [allUsers, setAllUsers] = useState([])
        const [allTutors, setAllTutors] = useState([])
        const [totalReviews, setTotalReviews] = useState()
        const { user } = useContext(authContext)

    useEffect(() => {
        const fetchAllUsers = async () => {
            const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/users`)
            setAllUsers(res.data)

        }

        fetchAllUsers()


        const fetchAllTutors = async () => {
            const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/tutors`)
            setAllTutors(res.data)

        }

        fetchAllTutors()


        const fetchAllReviews = async () => {
            const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/booked-tutors`)
                .then(res => {
                    const total = res.data.reduce((sum, tutor) => sum + (tutor.review || 0), 0)
                    setTotalReviews(total)
                })


        }

        fetchAllReviews()

    }, [user?.email])


    const tutorContextValues = {
        allUsers,
        allTutors,
        totalReviews
    }

  return (
    <tutorContext.Provider value={tutorContextValues}>
      {children}
    </tutorContext.Provider>
  )
}

export {TutorContextProvider, tutorContext}
