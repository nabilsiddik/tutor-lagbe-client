import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext/AuthContext'
import LanguageCategorySection from '../../Sections/LanguageCategorySection/LanguageCategorySection'
import SliderSection from '../../Sections/SliderSection/SliderSection'
import StatsSection from '../../Sections/StatsSection/StatsSection'
import OffersSection from '../../Sections/OffersSection/OffersSection'
import FaqSection from '../../Sections/FaqSection/FaqSection'

const Home = () => {

  return (
    <div id='home_page'>
      <SliderSection />
      <div className="container">
        <StatsSection />
        <LanguageCategorySection />
      </div>
      <div className='bg-gray-100 '>
        <OffersSection />
      </div>
      <div>
        <FaqSection/>
      </div>
    </div>
  )
}

export default Home
