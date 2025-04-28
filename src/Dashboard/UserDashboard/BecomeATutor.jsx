import React from 'react'
import { Link } from 'react-router-dom'
import BecomeATutorForm from '../../Components/BecomeATutorForm'

const BecomeATutor = () => {
    return (
        <div className='p-5'>
            {/* Breadcrumb */}
            <div className='mb-5'>
                <div className="breadcrumbs text-sm mb-6">
                    <ul>
                        <li><Link to={"/dashboard"}>Dashboard</Link></li>
                        <li><Link className="text-primary" to={"/dashboard/become-a-tutor"}>Become a Tutor</Link></li>
                    </ul>
                </div>
            </div>

            <h1 className='mb-10 text-3xl text-center'>Apply To Become a Tutor</h1>
            <BecomeATutorForm/>
        </div>
    )
}

export default BecomeATutor
