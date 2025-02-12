import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import StatsBox from '../../Components/StatsBox'
import Stats from '../../Data/Stats'

const StatsSection = () => {
    const stats = Stats()
    return (
        <div id='stats_section' className='my-20'>
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {stats.length > 0 && stats.map((stat, index) => {
                        return <StatsBox key={index} stat = {stat}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default StatsSection
