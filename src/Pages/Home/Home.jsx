import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import LanguageCategorySection from '../../Sections/LanguageCategorySection/LanguageCategorySection'

const Home = () => {

  return (
    <div id='home_page'>
      <LanguageCategorySection/>
    </div>
  )
}

export default Home
