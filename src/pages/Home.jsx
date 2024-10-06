import React from 'react'
import { HERO_DOCTOR_DESKTOP_IMG, HERO_DOCTOR_MOBILE_IMG, HERO_DOCTOR_TABLET_IMG } from '../utils/constants'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full block relative min-h-screen pb-5 lg:bg-gradient-to-b from-teal-50 to-teal-800">
      <div className="w-full h-full lg:min-h-screen flex flex-col-reverse lg:flex-row lg:items-center lg:justify-around">
        <div className="mt-5 px-5 md:px-10 space-y-3 lg:space-y-5 w-full lg:max-w-screen-xl">
          <h1 className='text-4xl capitalize lg:text-7xl font-bold text-teal-700 text-left tracking-widest'>Empowering Health, One Step at a Time.</h1>
          <h3 className='text-xl text-teal-600 lg:text-white tracking-wider'>Personalized preventive healthcare, AI-driven health tips, and instant access to medical consultations. Your personal healthcare companion for preventive care and well-being.</h3>
          <div className="w-full flex justify-start md:justify-center lg:justify-start">
            <Link to="/contact-us" className="cursor-pointer capitalize px-8 py-4 bg-teal-600 rounded-md transition-transform duration-700 hover:scale-95 hover:bg-teal-700 font-bold text-xl lg:text-2xl text-white">Book a Free Consultation</Link>
          </div>
        </div>
        <div className="relative hidden lg:flex justify-center items-end w-full h-full">
          <img src={HERO_DOCTOR_DESKTOP_IMG} alt="Doctor" className="h-[55rem] w-[55rem] object-cover" />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-800 opacity-75"></div> */}
        </div>

        <div className="relative bg-gradient-to-b from-teal-50 to-teal-800 flex flex-col items-center pt-14 lg:hidden">
          <img src={HERO_DOCTOR_MOBILE_IMG} alt="Doctor" className='h-96 md:hidden' />
          <img src={HERO_DOCTOR_TABLET_IMG} alt="Doctor" className='h-96 hidden md:block' />
          <div className="w-full py-5 bg-teal-600">
            <h2 className='text-4xl font-semibold text-white text-center'>Take control your health with Vihaan</h2>
          </div>
          <div className=' w-8 h-8 rounded-full flex justify-center items-center -bottom-4 left-1/2 -translate-x-1/2 absolute bg-teal-600 '>
            <div className='h-3 w-3 rounded-full bg-white'></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home