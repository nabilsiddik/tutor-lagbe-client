import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const MyTutorialsPage = () => {
    const [myTutorials, setMyTutorials] = useState([])
    const { user, allTutorials, setAllTutorials } = useContext(authContext)

    const handleDeleteTutorial = (tutorial_id) => {
        // Delete tutorial from database
        axios.delete(`${import.meta.env.VITE_MAIN_URL}/delete-tutorial/${tutorial_id}`)
            .then(result => {
                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "Deleted",
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('google', result.user)
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${error.code}. ${error.message}`
                })
            })

        // Update remaining tutorials in front-end instantly
        const remainingTutorials = allTutorials.filter((tutorial) => tutorial._id !== tutorial_id)
        setAllTutorials(remainingTutorials)

        const updatedMyTutorials = myTutorials.filter((tutorial) => tutorial._id !== tutorial_id);
        setMyTutorials(updatedMyTutorials);
    }

    useEffect(() => {
        if (user?.email) {
            const fetchMyTutorials = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_MAIN_URL}/my-tutorials?email=${user && user?.email}`)
                    setMyTutorials(response.data)
                } catch (error) {
                    console.log(error)
                }
            }

            fetchMyTutorials()
        }
    }, [])

    console.log(myTutorials)

    return (
        <div id='my_tutorials'>
            <div className="container py-10">
                <h1 className='text-center mb-10'>My Tutorials</h1>

                <div className="display_my_tutorials">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Info</th>
                                    <th>Description</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myTutorials.length > 0 && myTutorials.map((tutorial) => {
                                    const { tutorName, tutorialImage, price, language, description, review, _id } = tutorial
                                    return <tr key={_id}>
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
                                                    <div className="font-bold">{tutorName && tutorName}</div>
                                                    <div className="text-sm opacity-50">BDT {price}</div>
                                                    <div className="text-sm opacity-50">{language && language}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{description && description}</span>
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{review && review} Star Review</span>
                                        </td>
                                        <td>
                                            <Link to={`/update-tutorial/${_id}`}>
                                                <button className='btn bg-green-600 text-white hover:bg-green-700'>Update</button>
                                            </Link>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteTutorial(_id)} className='btn bg-primary text-white hover:bg-hover'>Update</button>
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
