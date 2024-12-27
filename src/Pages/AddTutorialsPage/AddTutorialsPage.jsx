import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import axios from 'axios'

const AddTutorialsPage = () => {

    const {user} = useContext(authContext)

    const handleAddTutorial = async (e) => {
        e.preventDefault()

        const form = e.target
        const tutorName = user && user?.displayName
        const tutorEmail = user && user?.email
        const tutorialImage = form.tutorialImageUrl.value
        const price = form.price.value
        const language = form.language.value
        const description = form.description.value
        const review = form.review.value

        const tutorial = {
            tutorName,
            tutorEmail,
            tutorialImage,
            price,
            language,
            description,
            review
        }


        // Send tutorial to database
        const response = await axios.post(`${import.meta.env.VITE_MAIN_URL}/tutorials`, tutorial)

    }

    return (
        <div id='add_tutorial'>
            <div className="container py-10">
                <h1 className='mb-10 text-center'>Add Tutorial</h1>
                <form onSubmit={handleAddTutorial} className='w-11/12 md:w-8/12 lg:w-6/12 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL<span className='text-red-600'> *</span></span>
                        </label>
                        <input name='tutorialImageUrl' type="text" placeholder="Image URL" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Language<span className='text-red-600'> *</span></span>
                        </label>
                        <input name='language' type="text" placeholder="Language" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price<span className='text-red-600'> *</span></span>
                        </label>
                        <input name='price' type="number" placeholder="Price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description<span className='text-red-600'> *</span></span>
                        </label>
                        <textarea name='description' placeholder="Description..." className="textarea textarea-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review<span className='text-red-600'> *</span></span>
                        </label>
                        <input name='review' defaultValue={0} type="number" placeholder="Review" className="input input-bordered" />
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
