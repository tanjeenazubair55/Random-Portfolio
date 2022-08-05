import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import Fade from 'react-reveal/Fade';
function Testimonials() {
  return (
    <div className='overflow-hidden text-center flex flex-col items-center pb-16 pt-12 '>
       <div className=' text-center items-center flex flex-col pb-16 pt-12 '>
         <Fade bottom>
          <h1 className='text-white text-[2rem] font-medium '>Testimonials</h1>
          </Fade>
          <Fade bottom>
          <p className='text-[#9C9C9C] md:w-[33rem] text-center mx-4 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Suscipit error nemo hic, sint provident delectus eaque quaerat voluptas sit omnis qui, 
             sunt a quibusdam. Voluptate, alias! Repudiandae quis illum porro!
          </p> 
          </Fade>

        </div>
        <div className=' flex flex-wrap px-29 items-center justify-center ' >
        <Fade left>
           <TestimonialsCard/>
           </Fade>
           <Fade right>
            <TestimonialsCard/>
            </Fade>
           <Fade left>
            <TestimonialsCard/>
            </Fade>
            <Fade right>
            <TestimonialsCard/>
            </Fade>
            <Fade left>
            <TestimonialsCard/>
            </Fade>
            <Fade right>
            <TestimonialsCard/>
            </Fade>
        </div>
    </div>
  )
}

export default Testimonials