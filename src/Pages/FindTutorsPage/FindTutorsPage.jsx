import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import TutorCard from '../../Components/TutorCard'
import { authContext } from './../../Contexts/AuthContext/AuthContext';
import { tutorCategories } from './../../Data/tutorCategories';
import PageTitle from '../../Components/PageTitle';
import LoadingPage from '../LoadingPage/LoadingPage';

const FindTutorsPage = () => {

    const [allTutors, setAllTutors] = useState([])
    const [searchedLanguage, setSearchLanguage] = useState('')
    const [sortBy, setSortBy] = useState('')
    const {user} = useContext(authContext)

    useEffect(() => {
        const findTutors = async () => {
            try{
                const res = await axios.get(`${import.meta.env.VITE_MAIN_URL}/tutors`, {
                    params: {language: searchedLanguage, sortBy}
                })

                setAllTutors(res.data)
            }catch(error){
                console.log('Error fetching tutors', error)
            }
        }

        findTutors()
    }, [searchedLanguage, sortBy])

    const handleSearchTutor = (e) => {
        setSearchLanguage(e.target.value.toLowerCase())
    }

    const handleSortChange = (e) => {
        setSortBy(e.target.value.toLowerCase())
    }

    return (
        <div id='find_tutors_page' className='mt-[100px]'>
            <div className="container py-10">
                <PageTitle title='All Tutors'></PageTitle>
                <div className="flex justify-between mb-10 gap-5 md:gap-10 lg:gap-20 flex-col md:flex-row">
                    <div className='w-full md:w-4/12'>
                        <label className='label font-bold'>Search By Name:</label>
                        <input onChange={handleSearchTutor} type="serach" className='input input-bordered w-full mx-auto text-black bg-white dark:bg-darklight dark:border-white dark:text-white' placeholder='Search Tutor...' />
                    </div>
                </div>


                <div className="display_tutors grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {!user ? <LoadingPage/> : allTutors.length > 0 && allTutors.map((tutor) => {
                        return <TutorCard key={tutor._id} tutor={tutor} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default FindTutorsPage
