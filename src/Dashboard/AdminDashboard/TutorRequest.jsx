import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import TutorRequestCard from '../../Components/TutorRequestCard'

const TutorRequest = () => {

    const { user } = useContext(authContext)
    // Get all applied users
    const { data: allAppliedUsers = [] } = useQuery({
        queryKey: ['allAppliedUser', user?.email],
        queryFn: async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/applied-users`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        },
        enabled: !!user?.email
    })

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

            <h1 className='text-center font-bold text-3xl mb-2'>Tutor Requests</h1>
            <p className='text-center mb-8'>All the users applied to become a tutor</p>

            <div className='grid grid-cols-12 gap-5'>
                {allAppliedUsers.map((user) => {
                    return <div className='col-span-full lg:col-span-6 xl:col-span-4'>
                        <TutorRequestCard key={user?._id} user={user} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default TutorRequest
