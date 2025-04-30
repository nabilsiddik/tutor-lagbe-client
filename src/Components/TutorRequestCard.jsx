import React, { useState } from 'react'
import ViewTutorDetailsModal from './ViewTutorDetailsModal'
import axios from 'axios'
import Swal from 'sweetalert2'

const TutorRequestCard = ({ user }) => {
    const [pendingTutorId, setPendingTutorId] = useState(null)
    // Handle user Status
    const handleUserStatus = async (e, userId) => {
        e.preventDefault()
        const form = e.target
        const userStatus = form.userstatus.value

        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_MAIN_URL}/update-status/${userId}`, { userStatus })

            if (data.message) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }else if(data.modifiedCount > 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'User Status updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }


        } catch (error) {
            console.error('Error while changing user status', error)
        }
    }

    // View tutor details
    const handleViewTutorDetails = (userId) => {
        setPendingTutorId(userId)
    }

    return (
        <div className='p-5 bg-primary flex flex-col lg:flex-row items-center gap-5 rounded-md'>
            <img className='w-[100px] h-[100px] object-cover rounded-lg' src={user?.photoUrl} alt={user?.name} />
            <div className='text-center lg:text-left'>
                <h3 className='text-white'>{user?.name}</h3>
                <p className='text-white'>{user?.email}</p>
                <form onSubmit={(e) => handleUserStatus(e, user?._id)}>
                    <select name="userstatus" className='select select-sm mt-3 w-full'>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="cancled">Cancled</option>
                    </select>
                    <input type="submit" value='Submit' className='btn btn-sm w-full mt-3 bg-green-600 hover:bg-green-700 text-white' />

                    {/* <div className='flex items-center gap-2 mt-3'>
                        <input type="submit" value='Submit' className='btn btn-sm w-6/12 bg-green-600 hover:bg-green-700 text-white' />
                        <button onClick={() => handleViewTutorDetails(user?._id)} className='btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-black'>Details</button>
                    </div> */}
                </form>
            </div>

            {/* {pendingTutorId && (
                <ViewTutorDetailsModal pendingTutorId={pendingTutorId}  modalId={`modal_${user._id}`} />
            )} */}
        </div>
    )
}

export default TutorRequestCard
