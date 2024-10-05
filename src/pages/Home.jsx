import React from 'react'
import { HERO_DOCTOR_MOBILE_IMG, HERO_DOCTOR_TABLET_IMG } from '../utils/constants'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full block relative min-h-screen lg:h-full pb-5 lg:bg-gradient-to-b from-teal-50 to-teal-800">
      <div className="w-full min-h-screen flex flex-col-reverse lg:justify-center">
        <div className="mt-5 px-5 md:px-10 space-y-3 lg:space-y-5">
          <h1 className='text-5xl lg:text-7xl font-bold text-teal-700 text-left'>Take control your health with Vihaan</h1>
          <h3 className='text-xl text-teal-600 lg:text-teal-100'>Your personal healthcare companion for preventive care and well-being.</h3>
          <span className="inline-block cursor-pointer capitalize px-8 py-4 bg-teal-600 rounded-md transition-transform duration-300 hover:scale-110 hover:bg-teal-700">
            <Link to="/contact-us" className="block w-full h-full font-bold text-xl lg:text-2xl text-white">Book a Free Consultation</Link>
          </span>
        </div>

        <div className="relative bg-gradient-to-b from-teal-50 to-teal-800 flex flex-col items-center pt-14 lg:hidden">
          <img src={HERO_DOCTOR_MOBILE_IMG} alt="Doctor" className='h-96 md:hidden' />
          <img src={HERO_DOCTOR_TABLET_IMG} alt="Doctor" className='h-96 hidden md:block' />
          <div className="w-full py-5 bg-teal-600">
            <h2 className='text-4xl font-semibold text-white text-center'>Take control your health with Vihaan</h2>
          </div>
          <div className=' w-8 h-8 rounded-full flex justify-center items-center -bottom-4 left-1/2 -translate-x-1/2 absolute bg-teal-400 '>
            <div className='h-4 w-4 rounded-full bg-white'></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home