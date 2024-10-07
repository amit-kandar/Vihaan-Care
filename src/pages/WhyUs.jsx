import React from 'react'
import FeaturesCard from '../components/FeaturesCard'
import { features } from '../utils/FeaturesData'

const WhyUs = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center p-5 md:p-10'>
      <div className='w-full flex justify-center items-center'>
        <h1 className="text-4xl capitalize lg:text-6xl font-bold text-teal-700 text-left tracking-widest">Why choose Vihaan?</h1>
      </div>
      <div className='w-fit mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5'>
        {
          features.map((feature, index) => <FeaturesCard feature={feature} key={index} />)
        }
      </div>
    </section>
  )
}

export default WhyUs