import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import DashboardHeader from './DashboardHeader'
import DashboardFooter from './DashboardFooter';
import { Outlet } from 'react-router-dom';



const DashboardLayout = () => {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <div className='bg-primary py-5 px-5 text-white'>
        <DashboardHeader/>
      </div>

      <div className='grid grid-cols-[250px_1fr]'>
        <aside className='h-full bg-white'>
          <DashboardSidebar/>
        </aside>

        <main className='bg-[#E4E5EB]'>
          <Outlet/>
        </main>
      </div>

      <div className='bg-white py-5'>
        <DashboardFooter/>
      </div>
    </div>
  )
}

export default DashboardLayout
