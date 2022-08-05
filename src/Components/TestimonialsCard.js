import React from 'react'

const TestimonialsCard = () => {
  return (
    <div className='relative h-48 w-80 md:w-96 border-y border-y-[#312d2d] p-4 flex flex-col justify-around mb-12 mr-8 '>
        <img src="https://ksets.netlify.app/personal/quote.png" alt="" className='absolute -top-3'/>
        <p className='text-[#9C9C9C] text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, 
            incidunt sunt magni aperiam aut, harum pariatur similique, 
            velit accusamus culpa nam amet dolorem! Laborum explicabo hic 
            necessitatibus sunt nostrum corrupti.</p>
            <div className='flex items-center space-x-2 '>
                <span className='h-[2rem] w-[2rem] rounded-full bg-cover ' style={{backgroundImage:`url(https://ksets.netlify.app/personal/kev.jpeg)`}}> 
                </span>
                <p className='text-white text-lg font-medium'>John Doe </p>
            </div>
    </div>
  )
}

export default TestimonialsCard