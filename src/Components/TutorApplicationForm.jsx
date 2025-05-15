import React, { useContext, useEffect, useState } from 'react'
import { languages } from '../Data/languages'
import { teachingMaterials } from '../Data/teachingMaterials'
import axios from 'axios'
import Swal from 'sweetalert2'
import { authContext } from './../Contexts/AuthContext/AuthContext';

const TutorApplicationForm = ({onSubmitted}) => {
  const {user} = useContext(authContext)
  const [step, setStep] = useState(1)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [formData, setFormData] = useState({
    aboutMe: '',
    asATeacher: '',
    teachingStyle: '',
    institution: '',
    institutionStarted: '',
    institutionEnded: '',
    majorTopic: '',
    degree: '',
    description: ''
  })


  // Check if steps filled up completely
  useEffect(() => {
    if (selectedLanguages.length > 0) {
      setNextBtnDisabled(false)
      if (step === 2) {
        setNextBtnDisabled(true)

        if (formData.aboutMe !== '' && formData.asATeacher !== '' && formData.teachingStyle !== '' && selectedMaterials.length > 0) {
          setNextBtnDisabled(false)
        } else {
          setNextBtnDisabled(true)
        }
      }
    } else {
      setNextBtnDisabled(true)
    }


  }, [selectedLanguages, step, formData.aboutMe, formData.asATeacher, formData.teachingStyle, selectedMaterials])


  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
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
    const { value, checked } = e.target
    setSelectedMaterials((prev) =>
      checked ? [...prev, value] : prev.filter((material) => material !== value)
    )
  }



  // Step one form submit
  const handleTutorApplication = async (e) => {
    e.preventDefault()

    if (selectedLanguages.length < 0 || formData.aboutMe === '' || formData.asATeacher === '' || formData.teachingStyle === '' || selectedMaterials.length < 0 || formData.institution === '' || formData.majorTopic === '' || formData.degree === '' || formData.institutionStarted === '' || formData.institutionEnded === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Opps!",
        text: 'Please fill out the required fields',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      const tutorApplication = {
        selectedLanguages,
        selectedMaterials,
        aboutMe: formData.aboutMe,
        asATeacher: formData.asATeacher,
        teachingStyle: formData.teachingStyle,
        institution: formData.institution,
        institutionStarted: formData.institutionStarted,
        institutionEnded: formData.institutionEnded,
        majorTopic: formData.majorTopic,
        degree: formData.degree,
        description: formData.description,
        user: {
          displayName: user?.displayName,
          photoUrl: user?.photoURL,
          email: user?.email
        }
      }

      try {
        const { data } = await axios.post(`${import.meta.env.VITE_MAIN_URL}/tutor-application`, tutorApplication)

        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull",
            text: 'Thank you. You have successfully submited the application',
            showConfirmButton: false,
            timer: 1500
          });
          if(onSubmitted){
            onSubmitted()
          }
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something Went Wrong",
            description: 'Opps! Something went wrong while submitting the application',
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        console.error(error)
      }
    }



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
      <h3 className='text-center mb-5'>Step {step} {step === 1 && `(Language and Introduction)`} {step === 2 && `(Teacher information)`} {step === 3 && `(Background)`}</h3>
      <form onSubmit={handleTutorApplication} className='mx-auto w-11/12 md:w-8/12 lg:w-6/12 bg-white p-5 rounded-md shadow-md'>
        {step === 1 && <div>
          <label className='label block'>Select the languages you want to teach (<span className='text-primary'>*</span>)</label>
          {languages.length > 0 && languages.map((language) => {
            return <div key={language?.id}>
              <input name='selectedLanguage' value={language?.language} type="checkbox" checked={selectedLanguages.includes(language?.language)} onChange={handleLanguageChange} />
              <label> {language?.language}</label>
            </div>
          })}
        </div>}

        {step === 2 && <div>
          <label className='block mb-1 label font-bold'>About Me (<span className='text-primary'>*</span>)</label>
          <div className='mb-5'>
            <textarea value={formData.aboutMe} onChange={handleInputChange} rows={5} className='textarea textarea-bordered w-full' name="aboutMe" placeholder='Write about yourself...'></textarea>
          </div>

          <div className='mb-5'>
            <label className='block mb-1 label font-bold'>Me As a Teacher (<span className='text-primary'>*</span>)</label>
            <textarea value={formData.asATeacher} onChange={handleInputChange} rows={5} className='textarea textarea-bordered w-full' name="asATeacher" placeholder='Write what you are as a teacher...'></textarea>
          </div>

          <div className='mb-5'>
            <label className='block mb-1 label font-bold'>My lessons & teaching style (<span className='text-primary'>*</span>)</label>
            <textarea value={formData.teachingStyle} onChange={handleInputChange} rows={5} className='textarea textarea-bordered w-full' name="teachingStyle" placeholder='Your lessons & teaching style...'></textarea>
          </div>

          <div>
            <label className='label block font-bold mb-1'>My teaching material (<span className='text-primary'>*</span>)</label>
            {teachingMaterials.length > 0 && teachingMaterials.map((material) => {
              return <div key={material?.id}>
                <input name='selectedLanguage' value={material?.material} type="checkbox" checked={selectedMaterials.includes(material?.material)} onChange={handleMaterialChange} />
                <label> {material?.material}</label>
              </div>
            })}
          </div>
        </div>}

        {step === 3 && <div>
          <div className='mb-3'>
            <label className='font-bold mb-1 block label'>Institution</label>
            <input value={formData.institution} name='institution' onChange={handleInputChange} type="text" placeholder='Institution' className='input input-bordered w-full' />
          </div>

          <div className='flex items-center gap-5 mb-5'>
            <div className='w-6/12'>
              <label className='font-bold mb-1 block label'>From</label>
              <input value={formData.institutionStarted} onChange={handleInputChange} name='institutionStarted' className='input input-bordered w-full' type="date" />
            </div>
            <div className='w-6/12'>
              <label className='font-bold mb-1 block label'>To</label>
              <input value={formData.institutionEnded} onChange={handleInputChange} name='institutionEnded' className='input input-bordered w-full' type="date" />
            </div>
          </div>

          <div className='flex items-center gap-5 mb-5'>
            <div className='w-6/12'>
              <label className='font-bold mb-1 block label'>Major Topic</label>
              <input value={formData.majorTopic} onChange={handleInputChange} name='majorTopic' className='input input-bordered w-full' type="text" placeholder='Major Topic' />
            </div>
            <div className='w-6/12'>
              <label className='font-bold mb-1 block label'>Degree</label>
              <input value={formData.degree} onChange={handleInputChange} name='degree' className='input input-bordered w-full' type="text" placeholder='degree' />
            </div>
          </div>


          <div>
            <label className='font-bold mb-1 block label'>Description (optional)</label>
            <textarea value={formData.description} onChange={handleInputChange} rows={5} className='textarea textarea-bordered w-full' name="description" placeholder='description...'></textarea>
          </div>

          <div>
            <input type="submit" value={'Submit Application'} className='mt-5 bg-primary text-white w-full btn' />
          </div>
        </div>}
      </form>

      <div className='flex items-center justify-between mt-10 mx-auto w-11/12 md:w-8/12 lg:w-6/12'>
        <button disabled={step < 2 && true} onClick={prevStep} className='btn bg-primary text-white font-bold'>Perv</button>
        <button disabled={nextBtnDisabled || step === 3} onClick={nextStep} className='btn bg-primary font-bold text-white'>Next</button>
      </div>
    </div>
  )
}

export default TutorApplicationForm
