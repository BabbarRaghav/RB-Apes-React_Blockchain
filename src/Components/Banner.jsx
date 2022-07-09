import React from 'react'
import Logo from '../assets/1.png'
import back from '../assets/banner1.png'

const Banner = () => {
  return (
    <div className='h-80'>
        <div className="relative z-20 top-56 px-5 flex justify-center">
            <img src={Logo} alt="" className="h-40 w-30 rounded-full" />
        </div>
        <div className="absolute z-10 inset-0">
            <img src={back} alt="" className="w-full h-80" />
        </div>
    </div>
  )
}

export default Banner