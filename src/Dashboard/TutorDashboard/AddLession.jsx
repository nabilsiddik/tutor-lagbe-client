import React from 'react'
import AddLessionForm from '../../Components/AddLessionForm'

const AddLession = () => {
    return (
        <div className='p-4'>
            {/* breadcrumb  */}
            <div className="breadcrumbs text-sm mb-4">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Dashboard</a></li>
                    <li>Add Lession</li>
                </ul>
            </div>


            <h1 className='font-bold text-3xl text-center'>Add Lession</h1>
            <AddLessionForm/>
        </div>
    )
}

export default AddLession
