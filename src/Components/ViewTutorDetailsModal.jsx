import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTutorDetailsModal = ({ pendingTutorId, modalId }) => {
    const [currPendingTutor, setCurrPendingTutor] = useState({})
    useEffect(() => {
        const getCurrentPendingTutor = async (pendingTutorId) => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_MAIN_URL}/user/${pendingTutorId}`)
                setCurrPendingTutor(data)
            } catch (error) {
                console.error('Error while fetching pending tutor')
            }
        }
        getCurrentPendingTutor(pendingTutorId)
    }, [pendingTutorId])

    useEffect(() => {
        if (currPendingTutor?.userInfo) {
            const modal = document.getElementById(modalId)
            if (modal) {
                modal.showModal()
            }
        }
    }, [currPendingTutor, modalId])

    console.log(currPendingTutor)

    return (
        <div>
            <dialog id={modalId} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-center mb-5">Pending Tutor Details</h3>

                    {currPendingTutor &&
                        <div className='flex flex-col gap-3'>
                            <p className='text-xl'><span className='font-bold'>University:</span> {currPendingTutor?.userInfo?.university}</p>
                            <p className='text-xl'><span className='font-bold'>Degree:</span> {currPendingTutor?.userInfo?.degree}</p>
                            <p className='text-xl'><span className='font-bold'>Certificate:</span> {currPendingTutor?.userInfo?.certificate}</p>
                            <p className='text-xl'><span className='font-bold'>National ID:</span> {currPendingTutor?.userInfo?.nationalId}</p>
                            <p className='text-xl'><span className='font-bold'>Description:</span> {currPendingTutor?.userInfo?.description}</p>
                        </div>
                    }

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ViewTutorDetailsModal
