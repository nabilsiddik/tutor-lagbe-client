import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../Contexts/UserContext/UserContext'
import { FaEdit } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6';
import userIcon from '../../assets/images/icons/user.png'
import { authContext } from '../../Contexts/AuthContext/AuthContext';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import LoadingPage from '../../Pages/LoadingPage/LoadingPage';

const AllUsers = ({ userId }) => {
    const { user } = useContext(authContext)
    // Get Specific tutors lessons
    const { data: allUsers = [], isLoading, refetch } = useQuery({
        queryKey: ['allUsers', user?.email],
        queryFn: async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/users`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        },
        enabled: !!user?.email
    })

    // Delete user
    const handleDeleteUser = async (userId) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_MAIN_URL}/delete-user/${userId}`)

            if (data.deletedCount > 0) {
                refetch()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Deleted Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Opps! Error while deleting user",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Error while deleting user', error)
        }
    }

    return (
        <div id='all-users' className='p-5'>
            {/* <userEditModal userId={userId && userId} /> */}
            {/* Breadcrumb */}
            <div className='mb-5'>
                <div className="breadcrumbs text-sm mb-6">
                    <ul>
                        <li><Link href={"/dashboard"}>Dashboard</Link></li>
                        <li><Link className="text-primary" href={"/dashboard/all-users"}>All Users</Link></li>
                    </ul>
                </div>
            </div>

            <div className='bg-white shadow-md p-5 rounded-md'>
                {/* Filters (left static, implement if needed) */}
                <div className='grid grid-cols-12 gap-5 mb-6'>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Show By</legend>
                            <select className="select w-full buser" onChange={(e) => setLimit(parseInt(e.target.value))}>
                                <option value={12}>12 Row</option>
                                <option value={24}>24 Row</option>
                                <option value={36}>36 Row</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className='col-span-3'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Payment By</legend>
                            <select className="select w-full buser" value={'df'} onChange={(e) => setFilterRole(e.target.value)}>
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
                            <select className="select w-full buser" value={'df'} onChange={(e) => setFilterStatus(e.target.value)}>
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
                                className='input buser w-full'
                                type='search'
                                placeholder='Transection ID / Customer Email'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </fieldset>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table buser buser-[#e3e3e3]">
                        <thead className='bg-primary text-white'>
                            <tr className='buser-b buser-[#e3e3e3]'>
                                <th>Number</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {isLoading ?
                            <LoadingPage/>
                            :
                            <tbody>
                                {allUsers.map((user, index) => (
                                    <tr key={user?._id} className='buser-b buser-[#e3e3e3]'>
                                        {/* <th>#{(currentPage - 1) * limit + index + 1}</th> */}
                                        <th>#{index + 1}</th>
                                        <td>
                                            <img className='w-[50px] rounded-full' src={user?.photoUrl ? user?.photoUrl : userIcon} alt={user?.name} />
                                        </td>
                                        <td className='font-bold'>{user?.name ? user?.name : 'Unavailable'}</td>
                                        <td className='capitalize'>{user?.email ? user?.email : 'Unavailable'}</td>
                                        <td className='capitalize'>{user?.role ? user?.role : 'N/A'}</td>
                                        <td>{user?.userStatus ? user?.userStatus : 'N/A'}</td>
                                        <td className='capitalize'>{user?.phone ? user?.phone : 'N/A'}</td>
                                        <td className='flex gap-4'>
                                            <span onClick={() => openModal(user?._id)} className='text-lg text-[#2AA75F] cursor-pointer'><FaEdit /></span>
                                            <span onClick={() => handleDeleteUser(user?._id)} className='text-lg text-[#E32A46] cursor-pointer'><FaTrashCan /></span>
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

export default AllUsers
