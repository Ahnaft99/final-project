import React, { useState } from 'react';
import Container from '../Components/Container';
import logo from '../assets/Logo.png';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (menuOpen === false) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header className='py-3'>
      <Container>
        <div className='flex items-center justify-between relative'>
          {/* Logo */}
          <div className='w-4/12 md:w-2/12'>
            <img src={logo} alt="Logo" />
          </div>

          {/* Menu (always centered in desktop) */}
          <div className={`absolute left-1/2 -translate-x-1/2 lg:translate-x-[-50%] lg:left-1/2 top-[70px] lg:top-auto w-full lg:w-auto ${menuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className='flex flex-col lg:flex-row items-center gap-3 lg:gap-6 bg-white lg:bg-transparent py-4 lg:py-0'>
              <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626]'>Home</li>
              <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626]'>Shop</li>
              <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626]'>About</li>
              <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626]'>Contact</li>
              <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626]'>Journal</li>
            </ul>
          </div>

          {/* Mobile Icon (right side) */}
          <div className='block lg:hidden'>
            {menuOpen === false ? (
              <FaBars onClick={handleMenuClick} className='text-xl cursor-pointer' />
            ) : (
              <RxCross1 onClick={handleMenuClick} className='text-xl cursor-pointer' />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
