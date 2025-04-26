import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMenuItem = ({icon, menuTitle, link}) => {
  return <li className={`pl-3 py-2 rounded-r-sm border-l-2 border-primary bg-red-200 mb-2`}>
    <Link className='flex items-center gap-3 text-lg' to={`/dashboard/${link && link}`}>
    <span>{icon && icon}</span>
    <span>{menuTitle && menuTitle}</span>
  </Link>
  </li>
}

export default DashboardMenuItem
