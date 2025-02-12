import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import TutorCard from '../../Components/TutorCard'
import { authContext } from './../../Contexts/AuthContext/AuthContext';
import { tutorCategories } from './../../Data/tutorCategories';

const FindTutorsPage = () => {

    const [allTutors, setAllTutors] = useState([])
    const [searchedLanguage, setSearchLanguage] = useState('')

    useEffect(() => {
        const findTutors = async () => {
            try{
                const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/tutors`, {
                    params: {language: searchedLanguage}
                })

                setAllTutors(res.data)
            }catch(error){
                console.log('Error fetching tutors', error)
            }
        }

        findTutors()
    }, [searchedLanguage])

    const handleSearchTutor = (e) => {
        setSearchLanguage(e.target.value.toLowerCase())
    }

    return (
        <div id='find_tutors_page' className='mt-[100px]'>
            <div className="container py-10">
                <h1 className='text-center mb-3'>All Tutors</h1>
                <div className="flex justify-between mb-10 gap-5 md:gap-10 lg:gap-20 flex-col md:flex-row">
                    <div className='w-full md:w-4/12'>
                        <label className='label font-bold'>Search By Name:</label>
                        <input onChange={handleSearchTutor} type="serach" className='input input-bordered w-full mx-auto text-black' placeholder='Search Tutor...' />
                    </div>
                    <div className='w-full md:w-4/12'>
                        <label className='label font-bold'>Sort By Language:</label>
                        <select className='select select-bordered w-full'>
                            {tutorCategories.length > 0 && tutorCategories.map((item, index) => {
                                return <option key={index} value={item.language.toLowerCase()}>{item.language}</option>
                            })}
                        </select>
                    </div>
                </div>


                <div className="display_tutors grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allTutors.length > 0 && allTutors.map((tutor) => {
                        return <TutorCard key={tutor._id} tutor={tutor} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default FindTutorsPage
