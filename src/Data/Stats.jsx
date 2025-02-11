import React from 'react'
import { useContext } from "react"
import { tutorContext } from "../Contexts/TutorContext/TutorContext"
import { FaUsers } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";


const Stats = () => {
  const { allUsers, allTutors, totalReviews } = useContext(tutorContext)
  const stats = [
    {
      id: 1,
      icon: <GiTeacher />,
      title: 'Experienced Tutors',
      number: Array.isArray(allTutors) ? allTutors.length : 0
    },
    {
      id: 2,
      icon: <MdOutlineRateReview />,
      title: 'Reviews',
      number: typeof totalReviews === "number" ? totalReviews : 0
    },
    {
      id: 3,
      icon: <FaLanguage />,
      title: 'Languages',
      number: 9
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: 'Users',
      number: Array.isArray(allUsers) ? allUsers.length : 0
    },
  ]


  return stats
}

export default Stats
