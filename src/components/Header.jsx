import React from 'react'
import { useSelector } from 'react-redux'
import {FcShop} from 'react-icons/fc'

const Header = () => {
  const basket =useSelector((state)=>state.basket.amount)
  
  return (
    <div className='flex items-center justify-between px-[7rem] py-[0.5rem] bg-gradient-to-r from-[#323232] to-[#00317a]'><h1 className='text-5xl p-4 text-center font-bold from-[#25ffc1] via-[#e0b712] to-[#fff] bg-gradient-to-r bg-clip-text text-transparent'>Glasess</h1> <h1 className='relative'><FcShop className='w-[4rem] h-[4rem]'></FcShop> <span className='absolute  top-[0] bg-[#ff4040] rounded-[50%] text-[1.5rem] w-[1.8rem] h-[1.8rem] flex items-center justify-center text-[#fff] right-[-15px]' >{basket}</span></h1></div>
  )
}

export default Header