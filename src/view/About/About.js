
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import React, { useState, useEffect } from 'react';

function About() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 2) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // 1 saniyede bir artır

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>

          <div className='w-full md:basis-1/2'>
            <h5 data-aos="fade-right" data-aos-duration="1500" className='text-[16px] font-[600]'>Hello Welcome</h5>
            <h1 data-aos="fade-up" data-aos-duration="1500" className='text-[1.8rem] font-[800] sm:text-[40px] leading-[40px] sm:leading-[46px] mt-5'>I am Samet KATI<br />Software Developer</h1>

            <div data-aos="fade-right" data-aos-duration="1500" className='flex items-center  mt-7'>
              <a href="contact">
                <button className='flex items-center justify-center gap-x-3 bg-blue-400 px-2 text-white w-32 h-10 text-[18px] font-[500]
                rounded-full transition-all hover:bg-blue-600 hover:text-white hover:scale-105 hover:duration-300 '>
                  <BiMessageSquareDetail className='text-white' /> Hire Me
                </button>
              </a>
            </div>

            <div data-aos="fade-right" data-aos-duration="1500"
              className='flex mt-14 leading-7 sm:pl-10 sm:pr-5 font-[500] text-[15px]'
            >
              <span className='mr-1 mt-[7px]'>
                <BsFillArrowRightCircleFill />
              </span>
              <p>
                Hello, I am a frontend and mobile developer. I'm a student at IUC and my departmant is Computer Engineering and now I'm in
                3. lesson.I interest in coding something.
              </p>
            </div>
          </div>

          <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>

            </figure>
          </div>

          <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
          md:flex-col md:justify-end md:text-end '>

            <div className='mb-10'>
              <h2 className='font-[700] text-[32px]'>
                {count}+
              </h2>
              <h4>Years of Experience</h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About