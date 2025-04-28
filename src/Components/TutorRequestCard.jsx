import React from 'react'

const TutorRequestCard = ({ user }) => {
    return (
        <div className='p-5 bg-primary text-white flex flex-col lg:flex-row items-center gap-5 rounded-md'>
            <img src={user?.profile} alt={user?.name} />
            <div className=''>
                <h3>{user?.name}</h3>
                <p>{user?.email}</p>
            </div>
        </div>
    )
}

export default TutorRequestCard
