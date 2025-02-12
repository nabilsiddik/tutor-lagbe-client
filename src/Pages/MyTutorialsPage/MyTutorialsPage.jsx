import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import PageTitle from '../../Components/PageTitle'

const MyTutorialsPage = () => {
    const [myTutorials, setMyTutorials] = useState([])
    const { user, allTutorials, setAllTutorials } = useContext(authContext)

    const handleDeleteTutorial = (tutorial_id) => {
        // Delete tutorial from database
        axios.delete(`${import.meta.env.VITE_MAIN_URL}/delete-tutorial/${tutorial_id}`)
            .then(result => {

                if (result.data.deletedCount > 0) {
                    const remainingTutorial = myTutorials.filter(tutorial => tutorial._id !== tutorial_id)

                    setMyTutorials(remainingTutorial)
                }

                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "Deleted",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${error.code}. ${error.message}`
                })
            })

    }

    useEffect(() => {
        if (user?.email) {
            const fetchMyTutorials = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_MAIN_URL}/my-tutorials?email=${user && user?.email}`)
                    setMyTutorials(response.data)
                } catch (error) {
                    
                }
            }

            fetchMyTutorials()
        }
    }, [])


    return (
        <div id='my_tutorials' className='mt-[100px]'>
            <div className="container py-10">
                <PageTitle title='My Tutorials'></PageTitle>

                <div className="display_my_tutorials">
                    <div className="overflow-x-auto">
                        <table className="table table-lg flex items-center">
                            <thead className='hidden md:block'>
                                <tr className='flex justify-between flex-col md:flex-row dark:bg-darklight dark:text-white'>
                                    <th>Info</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myTutorials.length > 0 && myTutorials.map((tutorial) => {
                                    const { tutorialName, tutorName, tutorialImage, price, language, description, review, _id } = tutorial
                                    return <tr key={_id} className='flex items-center justify-between flex-col md:flex-row dark:bg-darklight dark:text-white'>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={tutorialImage && tutorialImage}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{tutorialName && tutorialName}</div>
                                                    <div className="text-sm opacity-50">By {tutorName && tutorName}</div>
                                                    <div className="text-sm opacity-50">BDT {price}</div>
                                                    <div className="text-sm opacity-50">{language && language}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='flex-1 md:w-5/12 w-full'>
                                            <span>{description && description}</span>
                                            <br />
                                        </td>
                                        <td>
                                            <Link to={`/update-tutorial/${_id}`}>
                                                <button className='btn bg-green-600 text-white hover:bg-green-700'>Update</button>
                                            </Link>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteTutorial(_id)} className='btn bg-primary text-white hover:bg-hover'>Delete</button>
                                        </th>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTutorialsPage
