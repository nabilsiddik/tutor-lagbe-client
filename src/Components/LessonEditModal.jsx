import React, { useContext, useEffect, useState, useTransition } from 'react'
import { tutorContext } from '../Contexts/TutorContext/TutorContext'
import axios from 'axios'
import { IoMdAddCircleOutline } from 'react-icons/io'

const LessonEditModal = ({ lessonId }) => {
    const [currentLesson, setCurrentLesson] = useState(null)

    useEffect(() => {
        const getLessonById = async (lessonId) => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_MAIN_URL}/lesson/${lessonId}`)
                setCurrentLesson(data)
            } catch (error) {
                console.error('Error while get lesson by id', error)
            }
        }

        getLessonById(lessonId)
    }, [lessonId])

    const [currentLanguage, setCurrentLanguage] = useState(currentLesson?.language)


    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-center">Update Lesson</h3>

                    <form>
                        <form className='m-auto bg-white p-5 rounded-md shadow-sm'>
                            <div className="input-group mb-3">
                                <label htmlFor="title" className='label text-gray-500 block'>Title </label>
                                <input defaultValue={currentLesson?.title} name='title' type="text" className='input input-bordered w-full' placeholder='Lesson Title' />
                            </div>

                            <div className="input-group mb-3">
                                <label htmlFor="language" className='label text-gray-500 block'>Languag</label>

                                <select value={'dfsdf'} name="language" className='select select-bordered w-full'>
                                    <option value='english'>English</option>
                                    <option value='bangla'>Bangla</option>
                                    <option value='japanese'>Japanese</option>
                                    <option value='italian'>Italian</option>
                                    <option value='german'>German</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <label htmlFor="category" className='label text-gray-500 block'>Category </label>

                                <select name="category" className='select select-bordered w-full'>
                                    <option value="" disabled>Select Category</option>
                                    <option value='language essential'>Language Essential</option>
                                    <option value='tutor class'>Tutor Class</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <label htmlFor="description" className='label text-gray-500 block'>Description </label>
                                <textarea defaultValue={currentLesson?.description} name="description" className='textarea textarea-bordered w-full' placeholder='Descripton'></textarea>
                            </div>

                            <div className="input-group mb-3">
                                <label htmlFor="chapters" className='label text-gray-500 block'>What Students will get </label>
                                <textarea defaultValue={currentLesson?.featuresArr} name="features" className='textarea textarea-bordered w-full' placeholder='Write what student will get from this lession. (Seperate by coma or new line)'></textarea>
                            </div>

                            <div className="input-group mb-3">
                                <div className='flex items-center justify-between'>
                                    {/* <label htmlFor="price" className='label text-gray-500 block'>Add Price <span className='text-primary mb-2'>*</span></label> */}
{/* 
                                    <div className='text-2xl text-primary cursor-pointer'>
                                        <IoMdAddCircleOutline />
                                    </div> */}
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <label className='label block'>Duration</label>
                                        <input defaultValue={currentLesson?.duration} name='duration' type="number" className='input input-bordered' placeholder='Duration (min)' />
                                    </div>
                                    <div>
                                        <label className='label block'>Price</label>
                                        <input defaultValue={currentLesson?.price} name='amount' type="number" className='input input-bordered' placeholder='Amount ($USD)' />
                                    </div>
                                </div>

                                <input type="submit" value={'Add Lession'} className='btn bg-primary hover:bg-red-500 text-white font-bold w-full mt-5' />
                            </div>
                        </form>
                    </form>

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

export default LessonEditModal
