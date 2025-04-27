import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../Contexts/UserContext/UserContext'
import { FaEdit } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6';
import userIcon from '../../assets/images/icons/user.png'

const AllUsers = ({ userId }) => {
    const { allUsers } = useContext(userContext)

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
                                <th>Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
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
                                    <td className='capitalize'>{user?.phone ? user?.phone : 'N/A'}</td>
                                    <td className='flex gap-4'>
                                        <span onClick={() => openModal(user?._id)} className='text-lg text-[#2AA75F] cursor-pointer'><FaEdit /></span>
                                        <span onClick={() => handleDeleteuser(user?._id)} className='text-lg text-[#E32A46] cursor-pointer'><FaTrashCan /></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllUsers
