import React from 'react'

const StatsBox = ({ stat }) => {

    return (
        <div className='shadow-lg p-5 rounded-lg border dark:bg-darklight dark:text-white border-primary bg-primary text-white'>
            <div className='flex items-center gap-5'>
                <div className='text-5xl'>
                    {stat?.icon && stat.icon}
                </div>
                <div>
                    <h3 className='text-3xl mb-1'>{stat.number && stat.number} +</h3>
                    <p>{stat.title && stat.title}</p>
                </div>
            </div>
        </div>
    )
}

export default StatsBox
