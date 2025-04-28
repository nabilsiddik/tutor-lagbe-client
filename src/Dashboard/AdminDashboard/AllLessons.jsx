import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import { useQuery } from '@tanstack/react-query'
import LoadingPage from '../../Pages/LoadingPage/LoadingPage'
import { FaEdit } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'

const AllLessons = () => {

    const { user } = useContext(authContext)
    const [lessonId, setLessonId] = useState('')

    // Get all lessons
    const { data: allLessons = [], isLoading, refetch } = useQuery({
        queryKey: ['allLessons', user?.email],
        queryFn: async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/lessons`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        },
        enabled: !!user?.email
    })


    return (
        <div id='all-lessons' className='p-5'>
            {/* <LessonEditModal lessonId={lessonId} /> */}
            {/* Breadcrumb */}
            <div className='mb-5'>
                <div className="breadcrumbs text-sm mb-6">
                    <ul>
                        <li><Link href={"/dashboard"}>Dashboard</Link></li>
                        <li><Link className="text-primary" href={"/dashboard/all-lessons"}>All lessons</Link></li>
                    </ul>
                </div>
            </div>

            <div className='bg-white shadow-md p-5 rounded-md'>
                {/* Filters (left static, implement if needed) */}
                <div className='grid grid-cols-12 gap-5 mb-6'>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Show By</legend>
                            <select className="select w-full blesson" onChange={(e) => setLimit(parseInt(e.target.value))}>
                                <option value={12}>12 Row</option>
                                <option value={24}>24 Row</option>
                                <option value={36}>36 Row</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Payment By</legend>
                            <select className="select w-full blesson" value={'df'} onChange={(e) => setFilterRole(e.target.value)}>
                                <option value="">All</option>
                                <option value="bkash">Bkash</option>
                                <option value="nagad">Nagad</option>
                                <option value="rocket">Rocket</option>
                                <option value="upay">Upay</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Status By</legend>
                            <select className="select w-full blesson" value={'df'} onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="">All</option>
                                <option value="pending">Pending</option>
                                <option value="shipped">Shipped</option>
                                <option value="received">Received</option>
                                <option value="cancled">Cancled</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Search By</legend>
                            <input
                                className='input blesson w-full'
                                type='search'
                                placeholder='Transection ID / Customer Email'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </fieldset>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table blesson blesson-[#e3e3e3]">
                        <thead className='bg-primary text-white'>
                            <tr className='blesson-b blesson-[#e3e3e3]'>
                                <th>Number</th>
                                <th>Added By</th>
                                <th>Lesson Title</th>
                                <th>Language</th>
                                <th>Category</th>
                                <th>Duration</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {isLoading ?
                            <LoadingPage />
                            :
                            <tbody>
                                {allLessons.map((lesson, index) => (
                                    <tr key={lesson?._id} className='blesson-b blesson-[#e3e3e3]'>
                                        {/* <th>#{(currentPage - 1) * limit + index + 1}</th> */}
                                        <th>#{index + 1}</th>
                                        <th>
                                            <div className='flex items-center gap-3'>
                                                <img className='rounded-full w-[50px]' src={lesson?.tutor?.profile} alt={lesson?.tutor?.name} />
                                                <div>
                                                    <p>{lesson?.tutor?.name}</p>
                                                    <p className='font-normal'>{lesson?.tutor?.email}</p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className='font-bold'>
                                            {lesson?.title}
                                        </td>
                                        <td className='capitalize'>{lesson?.language}</td>
                                        <td className='capitalize'>{lesson?.category}</td>
                                        <td>
                                            {lesson?.duration} Min
                                        </td>
                                        <td>${lesson?.price}</td>
                                        <td className='flex gap-4'>
                                            <span onClick={() => openModal(lesson?._id)} className='text-lg text-[#2AA75F] cursor-pointer'><FaEdit /></span>
                                            <span onClick={() => handleDeleteLesson(lesson?._id)} className='text-lg text-[#E32A46] cursor-pointer'><FaTrashCan /></span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllLessons
