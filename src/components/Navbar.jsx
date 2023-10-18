
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaComment } from 'react-icons/fa';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div className='container'>
      <div className='flex items-center justify-between'>
        {/* ICON AND NAME */}
        <div className='flex items-center gap-[10]'>
          <span className='flex justify-center items-center text-bold text-[20px]
            text-white bg-blue-500 h-[40px] w-[40px] rounded-full' onClick={scrollToTop}>
            S
          </span>
          <div>
            <h2 className='text-[18px] font-[700] ml-[10.5px]'>Samet</h2>
            <p className='text-[13px] font-[500] ml-[12px]'>personal</p>
          </div>
        </div>

        {/* ELEMENT OF NAVBAR */}
        <div className='menu'>
          <ul className='flex items-center gap-x-10'>
            <li>
              <Link to="about" spy={true} smooth={true} duration={500} offset={-100}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} duration={500} offset={-100}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500} offset={-100}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* BUTTON */}
        {!isMobile && (
          <div className='flex items-center gap-x-3'>
            <button className="flex items-center gap-[5px] bg-blue-500 text-white px-5 py-2 rounded-full transition-all hover:bg-blue-600 hover:text-white hover:scale-105 hover:duration-300">
              <FaComment />
              Let's Talk
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;
