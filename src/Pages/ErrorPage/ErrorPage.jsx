import React from 'react'
import PageTitle from '../../Components/PageTitle'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <div className="container py-20">
                <PageTitle title='Opps! 404 Error'></PageTitle>
                <div className='flex justify-center'>
                    <Link to={'/'}>
                        <button className='btn bg-primary text-white'>Go To Home</button>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img className='w-[500px] text-center mt-10' src={'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?t=st=1735625730~exp=1735629330~hmac=f658c8f48474b45747bbea55a8d063fc8c9e9f47e4c491c3891d723dcc75d986&w=826'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
