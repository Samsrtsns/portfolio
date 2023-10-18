import React from 'react'
import { CiMobile3 } from 'react-icons/ci';
import { CgWebsite } from 'react-icons/cg';
import {MdDesignServices} from 'react-icons/md';
function Service() {
  return (
    <section id='services'>
      <div className='container lg:pt-5'>
        
        <div className='text-center'>
          <h1 className='font-[800] text-[2.4rem] mb-5'>What is the my skills?</h1>

          <p className='font-[500] text-[16px] lg:max-w-[600px] lg:mx-auto text-gray-400 leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro temporibus eos dolorum consectetur molestiae excepturi quas quo nulla!
            Incidunt corrupti debitis temporibus eaque quidem soluta ducimus sed, architecto quia error?
          </p>
        </div>

        <div className='flex flex-col justify-center sm:mb-12 mt-12'>
          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative antialiased text-sm font-semibold'>

              <div className='hidden absolute w-1 sm:block bg-blue-300 h-full left-1/2 transform -translate-x-1/2' data-aos="fade-down" data-aos-duration="1500"></div>

              <div className='mt-6 sm:mt-0 sm:mb-12 '>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8 ' data-aos="fade-right" data-aos-duration="1200">
                      <div className=' p-4 rounded-lg shadow-lg group cursor-pointer ease-in duration-100 transition-all hover:scale-105 hover:duration-300'>
                        <h3 className='text-2xl  mb-3 text-blue-400'>Frontend</h3>
                        <p className='text-15px '>I know how to use React and I can develop 
                        website by React.And I made this web site by React.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className='rounded-full bg-blue-400 border-white border-4 w-10 h-10 absolute left-1/2 transform
                    -translate-x-1/2 -translate-y-2 sm:translate-y-0 flex items-center justify-center'>
                    <figure >
                      <CgWebsite className='text-white text-[18px]' />
                    </figure>
                  </div>

                </div>
              </div>

              <div className='mt-6 sm:mt-0 sm:mb-12 '>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8 ' data-aos="fade-left" data-aos-duration="1200">
                      <div className=' p-4 rounded-lg shadow-lg group cursor-pointer ease-in duration-100 transition-all hover:scale-105 hover:duration-300'>
                        <h3 className='text-2xl  mb-3 text-blue-400'>Mobile</h3>
                        <p className='text-15px '>I know how to use Flutter and I can develop 
                        cross app for mobile by Flutter.And I hove done realtime app before.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-blue-400 border-white border-4 w-10 h-10 absolute left-1/2 transform
                    -translate-x-1/2 -translate-y-2 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <CiMobile3 className='text-white text-[18px]' />
                    </figure>
                  </div>

                </div>
              </div>

              <div className='mt-6 sm:mt-0 sm:mb-12 '>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8 ' data-aos="fade-right" data-aos-duration="1200">
                      <div className=' p-4 rounded-lg shadow-lg group cursor-pointer ease-in duration-100 transition-all hover:scale-105 hover:duration-300'>
                        <h3 className='text-2xl  mb-3 text-blue-400'>CSS and Tailwind</h3>
                        <p className='text-15px '>I know how to use CSS and Tailwind and I can design 
                        website by CSS and Tailwind.And I made this web site by Tailwind.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-blue-400 border-white border-4 w-10 h-10 absolute left-1/2 transform
                    -translate-x-1/2 -translate-y-2 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <MdDesignServices className='text-white text-[18px]' />
                    </figure>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service