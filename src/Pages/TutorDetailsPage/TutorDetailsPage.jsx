import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import Swal from 'sweetalert2'
import PageTitle from '../../Components/PageTitle'

const TutorDetailsPage = () => {

    const { _id, tutorName, tutorEmail, tutorImage, language, description, price, review } = useLoaderData()

    const { user } = useContext(authContext)
    const email = user && user?.email
    const tutorId = _id

    const bookedTutor = { tutorId, tutorName, tutorImage, language, price, email, tutorEmail }

    const handleBookTutor = async () => {
        try {
            // save booked tutor to databse
            const response = await axios.post(`${import.meta.env.VITE_MAIN_URL}/booked-tutors`, bookedTutor)

            if (response.status === 200) {
                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "Lesson Booked",
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (err) {
            if (err.response) {
                if (err.response.status === 400) {
                    Swal.fire({
                        position: "center center",
                        icon: "error",
                        title: err.response.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        }
    }

    return (
        <div id='tutor_details' className='mt-[100px] py-10'>
            <div className="container">
                <PageTitle title={'Tutor Details'}/>
                <div className="bg-white  dark:bg-darklight dark:border-white border rounded-lg shadow-md flex flex-col md:flex-row  md:items-center mx-auto border-primary border mb-5 py-16 lg:px-20 md:px-10 px-5 gap-10">
                    <div className="mx-auto md:mx-0">
                        <img
                            src={tutorImage}
                            alt="Teacher"
                            className="rounded-full w-[100px] lg:w-[130px]"
                        />
                         <p className='mt-3 text-center md:text-left'>
                            <b>Speaks:</b>
                            <span className="text-teal-600 font-medium"> {language}</span>
                        </p>
                        <p className='text-center md:text-left'><b>Total Review:</b> {review && review}</p>
                    </div>

                    <div className="flex flex-col items-center mx-auto md:block md:mx-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-lg md:text-xl font-semibold">{tutorName}</h3>
                        </div>
                        <p className="mb-2">
                            {description}
                        </p>
                        <h4 className='mb-3'>Price: BDT {price}</h4>
                        <button onClick={() => handleBookTutor()} className="btn bg-primary w-full mt-2 hover:bg-hover text-white">Book Lesson</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TutorDetailsPage
