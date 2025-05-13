import React, { useState } from 'react'
import DashboardMenuItem from '../Components/DashboardMenuItem'
import { FaUsers } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

const DashboardSidebar = () => {
  const [admin, setAdmin] = useState(true)
  const [tutor, setTutor] = useState(true)
  const [user, setUser] = useState(true)
  return (
    <div className='py-5 px-3 flex flex-col justify-between h-full'>
      <div>
        {/* admin routes  */}
        {admin &&
          <ul id='admin_ul'>
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'All Users'} link='all-users' />
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'All Lessons'} link='all-lessons' />
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'Tutor Request'} link='tutor-request' />
          </ul>
        }

        {/* tutor routes  */}
        {tutor &&
          <ul id='tutor_ul'>
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'Add Lession'} link='add-lesson' />
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'My Lessions'} link='my-lessons' />
          </ul>
        }


        {/* tutor routes  */}
        {user &&
          <ul id='tutor_ul'>
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'My Booked Lessons'} link='my-booked-lessons' />
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'Become a Tutor'} link='become-a-tutor' />
          </ul>
        }
      </div>
      <div className='flex items-center gap-3 font-bold text-xl cursor-pointer'>
        <RxExit />
        <p className='mt-[-4px]'>Logout</p>
      </div>
    </div>
  )
}

export default DashboardSidebar
