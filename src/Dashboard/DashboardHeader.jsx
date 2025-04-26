import React from 'react'
import Logo from '../Components/Logo'
import logoImage from '../assets/images/Tutor.png'
import { MdMenuOpen } from "react-icons/md";

const DashboardHeader = () => {
  return (
    <div>
      {/* dashboard header logo  */}
      <div className='flex items-center gap-4'>
        <Logo image={logoImage} width={'130px'}/>
        <MdMenuOpen className='text-4xl cursor-pointer' />
      </div>
    </div>
  )
}

export default DashboardHeader
