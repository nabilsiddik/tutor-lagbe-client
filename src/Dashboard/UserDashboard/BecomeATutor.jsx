import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BecomeATutorForm from '../../Components/BecomeATutorForm'
import TutorApplicationForm from '../../Components/TutorApplicationForm'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import { tutorContext } from '../../Contexts/TutorContext/TutorContext'

const BecomeATutor = () => {
    const { user } = useContext(authContext)
    const { getTutorApplicationByEmail } = useContext(tutorContext)
    const [isSubmited, setIsSubmited] = useState(false)

    useEffect(() => {
        const fetchApplication = async () => {
            if (user?.email) {
                const data = await getTutorApplicationByEmail(user?.email)

                console.log(data)

                if (data?.isApplicationSubmitted) {
                    setIsSubmited(true)
                }
            }
        }
        fetchApplication()
    }, [user?.email])

    return (
        <div className='p-5'>
            {/* Breadcrumb */}
            <div className='mb-5'>
                <div className="breadcrumbs text-sm mb-6">
                    <ul>
                        <li><Link to={"/dashboard"}>Dashboard</Link></li>
                        <li><Link className="text-primary" to={"/dashboard/become-a-tutor"}>Become a Tutor</Link></li>
                    </ul>
                </div>
            </div>

            {isSubmited ?

                <div className='text-center w-11/12 lg:w-5/12 mx-auto'>
                    <h3 className='mb-3 text-green-600'>Thank you. We received your application.</h3>
                    <p>Thank you. We received your application and it's now on a pending status. Once it is approved you will be a tutor.</p>
                </div>

                :

                <div>
                    {/* <BecomeATutorForm/> */}
                    < TutorApplicationForm onSubmitted = {() => setIsSubmited(true)} />
                </div>

            }

        </div>
    )
}

export default BecomeATutor
