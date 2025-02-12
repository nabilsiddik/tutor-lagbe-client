import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import TutorCard from '../../Components/TutorCard'
import { authContext } from './../../Contexts/AuthContext/AuthContext';

const FindTutorsPage = () => {

    const [allTutors, setAllTutors] = useState([])
    const [searchedLanguage, setSearchLanguage] = useState('')
    const {user} = useContext(authContext)

    useEffect(() => {
        const findTutors = async () => {
            await axios.get(`${import.meta.env.VITE_MAIN_URL}/tutors`)
                .then(res => {

                    setAllTutors(res.data)
                })
        }

        findTutors()
    }, [])

    const handleSearchTutor = (e) => {
        setSearchLanguage(e.target.value)
    }

    const filteredTutors = allTutors.filter((tutor) => tutor.language.toLowerCase().startsWith(searchedLanguage))
    

    return (
        <div id='find_tutors_page'>
            <div className="container py-10">
                <div className="flex justify-center flex-col mb-10">
                    <h1 className='text-center mb-3'>Find Tutors</h1>
                    <input onChange={handleSearchTutor} type="serach" className='input input-bordered md:w-6/12 lg:w-4/12 mx-auto text-black' placeholder='Search Tutor...' />
                </div>


                <div className="display_tutors grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allTutors.length > 0 && allTutors.map((tutor) => {
                        return <TutorCard key={tutor._id} tutor={tutor}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FindTutorsPage
