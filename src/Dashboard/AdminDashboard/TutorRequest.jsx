import React from 'react'
import { Link } from 'react-router-dom'

const TutorRequest = () => {
    return (
        <div className='p-5'>
            {/* Breadcrumb */}
            <div className='mb-5'>
                <div className="breadcrumbs text-sm mb-6">
                    <ul>
                        <li><Link href={"/dashboard"}>Dashboard</Link></li>
                        <li><Link className="text-primary" href={"/dashboard/tutor-request"}>All lessons</Link></li>
                    </ul>
                </div>
            </div>

            <h1>Tutor Requests</h1>
        </div>
    )
}

export default TutorRequest
