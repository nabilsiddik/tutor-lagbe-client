import React, { useState } from 'react'
import { languages } from '../Data/languages'
import { teachingMaterials } from '../Data/teachingMaterials'

const TutorApplicationForm = () => {
  const [step, setStep] = useState(1)
  const [stepOneFullfiled, setStepOneFullfilled] = useState(false)
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [formData, setFormData] = useState({
    aboutMe: '',
    asATeacher: '',
    teachingStyle: ''
  })


  // Handle input change
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  // Handle Language Change
  const handleLanguageChange = (e) => {
    const { value, checked } = e.target
    setSelectedLanguages((prev) =>
      checked ? [...prev, value] : prev.filter((lang) => lang !== value)
    )
  }

  // Hangle Material change
  const handleMaterialChange = (e) => {
    const {value, checked} = e.target
    setSelectedMaterials((prev) => 
      checked ? [...prev, value] : prev.filter((material) => material !== value)
    )
  }



  // Step one form submit
  const handleTutorApplication = (e) => {
    e.preventDefault()

    console.log(selectedLanguages)
    console.log(selectedMaterials)

  }

  // Go to prev step
  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  // Go to next step
  const nextStep = () => {
    if (step < 3) {
      setStep((prev) => prev + 1)
    }
  }
  return (
    <div>
      <h3 className='text-center mb-5'>Step {step} {step === 1 && `(Language and Introduction)`} {step === 2 && `(Teacher information)`}</h3>
      <form onSubmit={handleTutorApplication} className='mx-auto w-11/12 md:w-8/12 lg:w-6/12 bg-white p-5 rounded-md shadow-md'>
        {step === 1 && <div>
          <label>Please select the languages you want to teach.</label>
          {languages.length > 0 && languages.map((language) => {
            return <div key={language?.id}>
              <input name='selectedLanguage' value={language?.language} type="checkbox" checked={selectedLanguages.includes(language?.language)} onChange={handleLanguageChange} />
              <label> {language?.language}</label>
            </div>
          })}
        </div>}

        {step === 2 && <div>
          <label className='block mb-1 label font-bold'>About Me</label>
          <div className='mb-5'>
            <textarea value={formData.aboutMe} onChange={handleInputChange} rows={5} className='textarea textarea-bordered w-full' name="aboutMe" placeholder='Write about yourself...'></textarea>
          </div>

          <div className='mb-5'>
            <label className='block mb-1 label font-bold'>Me As a Teacher</label>
            <textarea value={formData.asATeacher} onChange={handleInputChange} rows={5} className='textarea textarea-bordered w-full' name="asATeacher" placeholder='Write what you are as a teacher...'></textarea>
          </div>

          <div>
            <label className='block mb-1 label font-bold'>My lessons & teaching style</label>
            <textarea value={formData.teachingStyle} onChange={handleInputChange} rows={5} className='textarea textarea-bordered w-full' name="teachingStyle" placeholder='Your lessons & teaching style...'></textarea>
          </div>

          <div>
            My teaching material (Optional)
            {teachingMaterials.length > 0 && teachingMaterials.map((material) => {
            return <div key={material?.id}>
              <input name='selectedLanguage' value={material?.material} type="checkbox" checked={selectedMaterials.includes(material?.material)} onChange={handleMaterialChange} />
              <label> {material?.material}</label>
            </div>
          })}
          </div>
        </div>}

        {step === 3 && <div>
          <input type="submit" value={'Submit Application'} className='btn bg-primary text-white mt-10 w-full' />
        </div>}
      </form>

      <div className='flex items-center justify-between mt-10 mx-auto w-11/12 md:w-8/12 lg:w-6/12'>
        <button onClick={prevStep} className='btn bg-primary text-white font-bold'>Perv</button>
        <button onClick={nextStep} className='btn bg-primary font-bold text-white'>Next</button>
      </div>
    </div>
  )
}

export default TutorApplicationForm
