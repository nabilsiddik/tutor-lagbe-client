import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div id='login_page'>
            <div className="container py-10">
                <h1 className='text-center'>Login</h1>
                <form className="card-body w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <span href="#" className="label-text-alt">Don't have an account? <Link to={'/registration'} className='underline'>Register Now</Link></span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-primary text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
