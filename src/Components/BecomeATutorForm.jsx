import axios from 'axios'
import React, { useContext } from 'react'
import { authContext } from '../Contexts/AuthContext/AuthContext'
import Swal from 'sweetalert2'

const BecomeATutorForm = () => {
    const { user } = useContext(authContext)
    // Become a tutor application
    const handleTutorApplication = async (e) => {
        e.preventDefault()
        const form = e.target
        const university = form.university.value
        const degree = form.degree.value
        const certificate = form.certificate.value
        const nationalId = form.nationalid.value
        const subjectsArr = form.subjects.value.split(',').map(subject => subject.trim())
        const description = form.description.value
        console.log(subjectsArr.length)

        if (!university || !degree || !certificate || !nationalId || subjectsArr.length < 2 || !description) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill out the required fields",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            const tutorInfo = {
                university,
                degree,
                certificate,
                nationalId,
                description,
                subjectsArr,
            }

            // send tutor info to database
            try {
                const { data } = await axios.post(`${import.meta.env.VITE_MAIN_URL}/tutor-application?email=${user?.email}`, tutorInfo)
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Thank you for applying",
                        text: "Your application is now pending. You will be a tutor after the admin approval.",
                        icon: "success"
                    });
                }else if(data.modifiedCount === 0){
                    Swal.fire({
                        title: "You have already applied",
                        text: "Please wait for admin approval",
                        icon: "success"
                    });
                }

            } catch (error) {
                console.error('Error while submitting tutor application', error)
            }
        }

    }

    return (
        <div>
            <form onSubmit={handleTutorApplication} className='mt-4 w-11/12 md:w-8/12 lg:w-6/12 m-auto bg-white p-5 rounded-md shadow-sm'>
                <div className="input-group mb-3">
                    <label htmlFor="title" className='label text-gray-500 block'>College / University <span className='text-primary mb-2'>*</span></label>
                    <input name='university' type="text" className='input input-bordered w-full' placeholder='Your College / University' />
                </div>
                <div className="input-group mb-3">
                    <label htmlFor="title" className='label text-gray-500 block'>Degree <span className='text-primary mb-2'>*</span></label>
                    <input name='degree' type="text" className='input input-bordered w-full' placeholder='Your Degree' />
                </div>
                <div className="input-group mb-3">
                    <label htmlFor="title" className='label text-gray-500 block'>Certificate Link <span className='text-primary mb-2'>*</span></label>
                    <input name='certificate' type="text" className='input input-bordered w-full' placeholder='Insert Certificate Link' />
                </div>

                <div className="input-group mb-3">
                    <label htmlFor="title" className='label text-gray-500 block'>National ID Photo Link <span className='text-primary mb-2'>*</span></label>
                    <input name='nationalid' type="text" className='input input-bordered w-full' placeholder='National ID Photo Link' />
                </div>

                <div className="input-group mb-3">
                    <label htmlFor="chapters" className='label text-gray-500 block'>What Subjects You Want to Teach <span className='text-primary mb-2'>*</span></label>
                    <textarea name="subjects" className='textarea textarea-bordered w-full' placeholder='Write what subjects you want to teach. (Seperate by coma or new line)'></textarea>
                </div>

                <div className="input-group mb-3">
                    <label htmlFor="description" className='label text-gray-500 block'>Description <span className='text-primary mb-2'>*</span></label>
                    <textarea name="description" className='textarea textarea-bordered w-full' placeholder='Teall me something about yourself and why you want to becomoe a tutor?'></textarea>
                </div>

                <input type="submit" value={'Submit'} className='bg-primary text-white font-bold btn w-full' />
            </form>
        </div>
    )
}

export default BecomeATutorForm
