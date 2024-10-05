import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { LOGO } from '../utils/constants'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works?", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" }
  ]

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  const listVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <header className='w-full fixed flex justify-between items-center px-5 md:px-10 py-1 bg-transparent lg:overflow-hidden'>
      <div className='w-20 h-20 z-20'>
        <img src={LOGO} alt="Vihaan" className='w-full h-full' />
      </div>
      <nav className='hidden lg:block'>
        <ul className='flex gap-6 items-center text-[#ffffff] text-xl font-medium'>
          {
            navLinks.map((item, index) =>
              <li className="relative cursor-pointer group capitalize" key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-bold border-b-[3px] border-[#7FC8A9]'
                      : ''
                  }
                >
                  {item.name}
                  <span className="absolute left-1/2 top-[26px] w-0 h-[3px] bg-[#7FC8A9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </NavLink>
              </li>
            )
          }
          <li className='cursor-pointer capitalize px-8 py-3 bg-teal-600 rounded-md transition-transform duration-300 hover:scale-110 hover:bg-teal-700'>
            <Link to="/contact-us" className="block w-full h-full font-bold text-xl">
              Get Started
            </Link>
          </li>

        </ul>
      </nav>

      <div className='lg:hidden'>
        <div className={`${isOpen ? 'hidden' : 'block'}`} onClick={handleOnClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7FC8A9" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>

        <div onClick={handleOnClick} className={`${isOpen ? 'block' : 'hidden'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-x" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7FC8A9" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 4l10 16" />
            <path d="M17 4l-10 16" />
          </svg>
        </div>
      </div>

      <div className={`w-1/2 flex flex-col items-end justify-start absolute top-[87px] right-0 min-h-screen bg-transparent transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='flex flex-col items-start gap-3'>
          {
            navLinks.map((item, index) => {
              return (
                <motion.li
                  key={index}
                  initial="hidden"
                  custom={index}
                  animate={isOpen ? 'visible' : 'hidden'}
                  variants={listVariants}
                  className='text-2xl text-teal-200'
                >
                  <NavLink to={item.path}>
                    {item.name}
                  </NavLink>
                </motion.li>
              )
            })
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar