import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesCard = ({ feature }) => {
  const { title, sub_title, path, icon } = feature;
  return (
    <div className='max-w-sm flex flex-col p-5 border-2 border-teal-700 rounded-md min-h-[400px]'> {/* Reduce or adjust min-height */}
      <div className='flex-grow'>
        <div className='w-full flex justify-center'>
          {icon}
        </div>
        <div className=''>
          <h2 className='text-3xl text-center font-medium mt-4 text-teal-700 capitalize'>{title}</h2>
        </div>
        <div className='flex-grow'>
          <p className='text-lg text-center tracking-wider mt-3 text-teal-600'>{sub_title}</p>
        </div>
      </div>
      <div className='w-full flex justify-center mt-auto'>
        <Link to={path} className="px-4 py-1 mt-3 border-2 border-teal-700 flex items-center capitalize text-lg text-teal-700 rounded-md cursor-pointer hover:bg-teal-700 hover:text-white duration-300">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0d9488" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default FeaturesCard;
