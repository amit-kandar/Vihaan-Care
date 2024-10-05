import React from 'react'
import { HERO_IMG } from '../utils/constants'

const Home = () => {
  return (
    <div className='w-full max-h-screen lg:h-full'>
      <img src={HERO_IMG} alt="health" className='w-full min-h-screen max-h-screen lg:h-full md:block' />
    </div>
  )
}

export default Home