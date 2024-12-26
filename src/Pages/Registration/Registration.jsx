import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {

    // Registration
    const handleRegistration = (e) => {
        e.preventDefault()

        // Collecting form data
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value
        const email = form.email.value
    }


    return (
        <div id='registration'>
            <div className="container py-10">
            <h1 className='text-center'>Registration</h1>
                <form onSubmit={handleRegistration} className="card-body w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name<span className='text-red-600'> *</span></span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL <span className='text-red-600'> *</span></span>
                        </label>
                        <input name='photoUrl' type="text" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email <span className='text-red-600'> *</span></span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password <span className='text-red-600'> *</span></span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <label className="label block">
                        Already have an account? <Link className='underline' to="/login">Login Now</Link>
                    </label>
                    <div className="form-control mt-6">
                        <button className="btn text-xl bg-primary hover:bg-hover text-white ">Registration</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration
