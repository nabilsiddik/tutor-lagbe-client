import axios from 'axios';
import React, { useContext, useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import Swal from 'sweetalert2';
import { authContext } from '../Contexts/AuthContext/AuthContext';

const AddLessionForm = () => {
    const {user} = useContext(authContext)

    // add lesson
    const handleAddLesson = async (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const language = form.language.value
        const category = form.category.value
        const description = form.description.value
        const duration = form.duration.value
        const price = form.amount.value
        const features = form.features.value
        const featuresArr = features.split(',').map(item => item.trim())

        if (!title || !language || !category || !description || !duration || !price) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill out the required fields",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            const lesson = {
                title,
                language,
                category,
                description,
                duration,
                price,
                featuresArr,
                tutor: {
                    name: user?.displayName,
                    email: user?.email,
                    profile: user?.photoURL
                }
            }

            console.log(lesson)

            try {
                // Send data to database
                const { data } = await axios.post('http://localhost:5000/lesson', lesson)

                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Lesson Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            } catch (error) {
                console.error('Error while fetching lessons', error)
            }
        }


    }

    return (
        <form onSubmit={handleAddLesson} className='mt-4 w-11/12 md:w-8/12 lg:w-4/12 m-auto bg-white p-5 rounded-md shadow-sm'>
            <div className="input-group mb-3">
                <label htmlFor="title" className='label text-gray-500 block'>Title <span className='text-primary mb-2'>*</span></label>
                <input name='title' type="text" className='input input-bordered w-full' placeholder='Lesson Title' />
            </div>

            <div className="input-group mb-3">
                <label htmlFor="language" className='label text-gray-500 block'>Language <span className='text-primary mb-2'>*</span></label>

                <select name="language" className='select select-bordered w-full'>
                    <option value="" disabled selected>Select Language</option>
                    <option value='english'>English</option>
                    <option value='bangla'>Bangla</option>
                    <option value='japanese'>Japanese</option>
                    <option value='italian'>Italian</option>
                    <option value='german'>German</option>
                </select>
            </div>

            <div className="input-group mb-3">
                <label htmlFor="category" className='label text-gray-500 block'>Category <span className='text-primary mb-2'>*</span></label>

                <select name="category" className='select select-bordered w-full'>
                    <option value="" disabled selected>Select Category</option>
                    <option value='language essential'>Language Essential</option>
                    <option value='tutor class'>Tutor Class</option>
                </select>
            </div>

            <div className="input-group mb-3">
                <label htmlFor="description" className='label text-gray-500 block'>Description <span className='text-primary mb-2'>*</span></label>
                <textarea name="description" className='textarea textarea-bordered w-full' placeholder='Descripton'></textarea>
            </div>

            <div className="input-group mb-3">
                <label htmlFor="chapters" className='label text-gray-500 block'>What Students will get <span className='text-primary mb-2'>*</span></label>
                <textarea name="features" className='textarea textarea-bordered w-full' placeholder='Write what student will get from this lession. (Seperate by coma or new line)'></textarea>
            </div>

            <div className="input-group mb-3">
                <div className='flex items-center justify-between'>
                    <label htmlFor="price" className='label text-gray-500 block'>Add Price <span className='text-primary mb-2'>*</span></label>

                    <div className='text-2xl text-primary cursor-pointer'>
                        <IoMdAddCircleOutline />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <input name='duration' type="number" className='input input-bordered w-6/12' placeholder='Duration (min)' />
                    <input name='amount' type="number" className='input input-bordered w-6/12' placeholder='Amount ($USD)' />
                </div>

                <input type="submit" value={'Add Lession'} className='btn bg-primary hover:bg-red-500 text-white font-bold w-full mt-5' />
            </div>
        </form>
    )
}

export default AddLessionForm
