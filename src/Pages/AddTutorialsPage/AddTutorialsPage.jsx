import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import axios from 'axios'
import Swal from 'sweetalert2'
import PageTitle from '../../Components/PageTitle'

const AddTutorialsPage = () => {

    const { user } = useContext(authContext)

    const handleAddTutorial = async (e) => {
        e.preventDefault()

        const form = e.target
        const tutorName = user && user?.displayName
        const tutorImage = user && user?.photoURL
        const tutorEmail = user && user?.email
        const tutorialImage = form.tutorialImageUrl.value
        const tutorialName = form.tutorialName.value
        const price = form.price.value
        const language = form.language.value
        const description = form.description.value

        if (tutorialImage !== '' && tutorialName !== '' && price !== '' && language !== '' && description !== '') {

            const tutorial = {
                tutorName,
                tutorEmail,
                tutorImage,
                tutorialName,
                tutorialImage,
                price,
                language,
                description
            }


            // Send tutorial to database
            const response = await axios.post(`${import.meta.env.VITE_MAIN_URL}/tutorials`, tutorial)
                .then(result => {
                    Swal.fire({
                        position: "center center",
                        icon: "success",
                        title: "Tutorial Added Successfully",
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
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: `Please fill out the required fields`
            })
        }


    }

    return (
        <div id='add_tutorial' className='mt-[100px]'>
            <div className="container py-10">
                <PageTitle title='Add Tutorial'></PageTitle>
                <form onSubmit={handleAddTutorial} className='w-11/12 md:w-8/12 lg:w-6/12 mx-auto'>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Tutorial Name<span className='text-red-600'> *</span></span>
                        </label>
                        <input name='tutorialName' type="text" placeholder="Tutorial Name" className="input input-bordered dark:bg-darklight border dark:border-white" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Image URL<span className='text-red-600'> *</span></span>
                        </label>
                        <input name='tutorialImageUrl' type="text" placeholder="Image URL" className="input input-bordered dark:bg-darklight border dark:border-white" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Language<span className='text-red-600'> *</span></span>
                        </label>
                        <select className='input input-bordered  dark:bg-darklight border dark:border-white' name="language" defaultValue={'english'}>
                            <option value="english">English</option>
                            <option value="bangla">Bangla</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                            <option value="italian">Italian</option>
                            <option value="chinese">Chinese</option>
                            <option value="arabic">Arabic</option>
                            <option value="japanese">Japanese</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Price<span className='text-red-600'> *</span></span>
                        </label>
                        <input name='price' type="number" placeholder="Price" className="input input-bordered  dark:bg-darklight border dark:border-white" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Description<span className='text-red-600'> *</span></span>
                        </label>
                        <textarea name='description' placeholder="Description..." className="textarea textarea-bordered  dark:bg-darklight border dark:border-white" />
                    </div>

                    <div className="submit">
                        <input type="submit" value={'Add Tutorial'} className='btn w-full mt-5 bg-primary hover:bg-hover text-white' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTutorialsPage
