import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import LanguageCategorySection from '../../Sections/LanguageCategorySection/LanguageCategorySection'
import SliderSection from '../../Sections/SliderSection/SliderSection'
import StatsSection from '../../Sections/StatsSection/StatsSection'

const Home = () => {

  return (
    <div id='home_page'>
      <SliderSection/>
      <div className="container">
        <StatsSection/>
        <LanguageCategorySection />
      </div>
    </div>
  )
}

export default Home
