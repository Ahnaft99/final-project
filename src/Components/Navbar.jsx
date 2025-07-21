import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaCaretDown, FaListUl, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoChevronForward } from 'react-icons/io5'

const Navbar = () => {
    let cateRef = useRef()
    let accRef = useRef()
    let [show, setShow] =useState(false)
    let [accshow, setAccShow] = useState(false)
   useEffect(()=>{
    document.addEventListener("click", (e)=>{
        console.log(cateRef);
        if(cateRef.current.contains(e.target)==true){
            setShow(!show)
        }else{
            setShow(false)
        }
        if(accRef.current.contains(e.target)==true){
            setAccShow(!accshow)
        }else{
            setAccShow(false)
        }
    })
   }, [show])
  return (
    <div className='bg-[#F5F5F3] py-3'>
        <Container>
            <div className='flex items-center '>
            <div className='w-2/7  relative'>
            <div className='flex items-center gap-x-2'> 
            <div className=''>
                <FaListUl ref={cateRef} className='cursor-pointer' />
            </div>
            <h2>Shop by Category</h2>
            </div>
            {show && (
           
           <div className='py-3 bg-[#262626] absolute left-0 top-[33px] w-full'>
            <ul className='gap-x-2'>
                <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                    <div className='flex justify-between'>
                      <span>Accesories</span> <IoChevronForward />
                      </div></li>
                      <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                    <div className='flex justify-between'>
                      <span>Furniture</span> <IoChevronForward />
                      </div></li>
                      <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                    <div className='flex justify-between'>
                      <span>Electronics</span> <IoChevronForward />
                      </div></li>
                      <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                    <div className='flex justify-between'>
                      <span>Clothes</span> <IoChevronForward />
                      </div></li>
                      <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                    <div className='flex justify-between'>
                      <span>Bags</span> <IoChevronForward />
                      </div></li>
                      <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                    <div className='flex justify-between'>
                      <span>Home appliances</span> <IoChevronForward />
                      </div></li>
                
            </ul>
           </div>
              )}   
            
            </div>
            <div className='w-4/7'>
            <div className='relative'>
            <input type="text" placeholder='search...' className='bg-[#fff] font-dm rounded-full pl-4 w-full py-2' />
            <div className='absolute right-6 top-[50%] translate-y-[-50%]'>
            <FaSearch />

            </div>
            </div>
           
          

            </div>
            <div className='w-1/7 relative'>
            <div className='flex items-center justify-end gap-x-5'>
            <div ref={accRef} className='flex'>
            <FaUser />
            <FaCaretDown />

            </div>
            <div>
            <FaShoppingCart />

            </div>
            </div>
            {accshow &&
              <div className='bg-[#fff] text-[#262626]  absolute left-0 top-[33px] w-full'>
                <ul>
                    <li className='hover:bg-[#262626] hover:text-[#fff] duration-300 ease-in-out font-dm py-2 text-center'>My Account</li>
                    <li className='hover:bg-[#262626] hover:text-[#fff] duration-300 ease-in-out font-dm py-2 text-center'>Login</li>
                </ul>
              </div>
             }
            </div>
            </div>
           
        </Container>
    </div>
  )
}

export default Navbar