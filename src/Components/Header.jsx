import React from 'react'
import Container from '../Components/Container'
import logo from '../assets/Logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";



const Header = () => {
  return (
    <header className='py-3'>
 <Container>
    <div className='flex items-center'>
        <div className='w-2/12'>
            <img src={logo} alt="" />
        </div>
        <div className='w-10/12'>
            <ul className='flex gap-6 justify-center '>
                <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>Home</li>
                <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>Shop</li>
                <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>About</li>
                <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>Contact</li>
                <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>Journal</li>
            </ul>
        </div>
        <div>
        <FaBars/>
        <RxCross1/>
        </div>
    </div>
</Container>
    </header>
   
  )
}

export default Header