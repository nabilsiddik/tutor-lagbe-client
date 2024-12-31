import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StatsSection = () => {

    const [allUsers, setAllUsers] = useState([])
    const [allTutors, setAllTutors] = useState([])

    useEffect(()=> {
        const fetchAllUsers = async() => {
            const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/users`)
            setAllUsers(res.data)

        }

        fetchAllUsers()


        const fetchAllTutors = async() => {
            const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/tutors`)
            setAllTutors(res.data)

        }

        fetchAllTutors()
    }, [])

    console.log(allTutors)

  return (
    <div id='stats_section' className='py-20'>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className='shadow-lg p-5 rounded-lg border'>
                <h3>{allTutors.length - 1}+</h3>
                <p>Experienced Tutor</p>
            </div>

            <div className='shadow-lg p-5 rounded-lg border'>
                <h3>{allUsers.length - 1}+</h3>
                <p>Experienced Tutor</p>
            </div>

            <div className='shadow-lg p-5 rounded-lg border'>
                <h3>9+</h3>
                <p>Languages</p>
            </div>

            <div className='shadow-lg p-5 rounded-lg border'>
                <h3>{allUsers.length - 1}+</h3>
                <p>Users</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
