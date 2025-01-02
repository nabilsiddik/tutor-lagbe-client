import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'

const StatsSection = () => {

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

    }, [])


    return (
        <div id='stats_section' className='py-20'>
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className='shadow-lg p-5 rounded-lg border dark:bg-darklight dark:text-white'>
                        <h3>{allTutors.length - 1}+</h3>
                        <p>Experienced Tutor</p>
                    </div>

                    <div className='shadow-lg p-5 rounded-lg border dark:bg-darklight dark:text-white'>
                        <h3>{totalReviews - 1}+</h3>
                        <p>Reviews</p>
                    </div>

                    <div className='shadow-lg p-5 rounded-lg border dark:bg-darklight dark:text-white'>
                        <h3>9+</h3>
                        <p>Languages</p>
                    </div>

                    <div className='shadow-lg p-5 rounded-lg border dark:bg-darklight dark:text-white'>
                        <h3>{allUsers.length - 1}+</h3>
                        <p>Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsSection
