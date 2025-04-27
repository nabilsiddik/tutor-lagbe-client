import React, { useState } from 'react'
import DashboardMenuItem from '../Components/DashboardMenuItem'
import { FaUsers } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

const DashboardSidebar = () => {
  const [admin, setAdmin] = useState(true)
  const [tutor, setTutor] = useState(false)
  return (
    <div className='py-5 px-3 flex flex-col justify-between h-full'>
      <div>
        {/* admin routes  */}
        {admin &&
          <ul>
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'All Users'} link='all-users' />
          </ul>
        }

        {/* tutor routes  */}
        {tutor &&
          <ul>
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'Add Lession'} link='add-lession' />
            <DashboardMenuItem icon={<FaUsers />} menuTitle={'All Lessions'} link='all-lession' />
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
