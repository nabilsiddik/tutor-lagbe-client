import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const DashboardMenuItem = ({icon, menuTitle, link}) => {
  return <li className={`mb-2`}>
    <NavLink className='flex items-center gap-3 text-lg py-3 pl-3 rounded-r-sm' to={`/dashboard/${link && link}`}>
    <span>{icon && icon}</span>
    <span>{menuTitle && menuTitle}</span>
  </NavLink>
  </li>
}

export default DashboardMenuItem
