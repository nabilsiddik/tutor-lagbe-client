import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const userContext = createContext(null)

const UserContextProvider = ({ children }) => {

    const [allUsers, setAllUsers] = useState([])


    // Get all users
    useEffect(()=> {
        const getAllUsers = async() => {
            try{
                const {data} = await axios.get(`${import.meta.env.VITE_MAIN_URL}/users`)
                setAllUsers(data)
            }catch(error){
                console.error('Error while fetching all users', error)
            }
        }
        getAllUsers()
    }) 



    const userContextValues = {
        allUsers,
    }

    return (
        <userContext.Provider value={userContextValues}>
            {children}
        </userContext.Provider>
    )
}

export { UserContextProvider, userContext }
