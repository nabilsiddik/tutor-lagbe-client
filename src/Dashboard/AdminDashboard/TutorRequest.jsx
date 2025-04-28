import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import TutorRequestCard from '../../Components/TutorRequestCard'

const TutorRequest = () => {

    const { user } = useContext(authContext)
    const [allAppliedUsers, setAllAppliedUsers] = useState([])
    // Get all users
    const { data: allUsers = [] } = useQuery({
        queryKey: ['allUsers', user?.email],
        queryFn: async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/users`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        },
        enabled: !!user?.email
    })

    // Get all users who applied to become a tutor
    useEffect(() => {
        const allAppliedUsers = () => {
            const appliedUsers = allUsers.filter((user) => user?.userStatus === 'pending')
            setAllAppliedUsers(appliedUsers)
        }
        allAppliedUsers()

    }, [user?.email, allUsers])

    return (
        <div className='p-5'>
            {/* Breadcrumb */}
            <div className='mb-5'>
                <div className="breadcrumbs text-sm mb-6">
                    <ul>
                        <li><Link href={"/dashboard"}>Dashboard</Link></li>
                        <li><Link className="text-primary" href={"/dashboard/tutor-request"}>Tutor Request</Link></li>
                    </ul>
                </div>
            </div>

            <h1 className='text-center font-bold text-3xl mb-5'>Tutor Requests</h1>

            <div className='grid grid-cols-12 gap-5'>
                {allAppliedUsers.map((user) => {
                    return <div className='md:col-span-6'>
                        <TutorRequestCard key={user?._id} user={user} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default TutorRequest
