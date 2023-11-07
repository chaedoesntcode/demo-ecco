import React from 'react'

const AboutUs = () => {
  return (
    <div className='h-[400px] xl:h-[450px] bg-orange-300 w-full bg-about bg-top flex items-center text-center justify-center xl:justify-end px-5 lg:px-10'>
        <div className='bg-white text-sm flex flex-col gap-y-2 justify-center items-center w-full md:w-2/3 xl:w-1/3 h-1/2'>
            <p className='uppercase'>20 years of consistency</p>
            <h2 className='text-3xl font-semibold'>We are DemoEcco</h2>
            <p>Crafting Elegance Across Time and Trends</p>
            <p className='underline'>Learn More</p>
        </div>  
    </div>
  )
}

export default AboutUs