import React from 'react'
import { useEffect, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 100) {
        setBackToTop(true);
    } else {
        setBackToTop(false); 
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  }, [])
    
  return ( 
  <>
    {backToTop && (<div  onClick={scrollToTop} className='bg-white hover:cursor-pointer rounded-full shadow-md fixed flex justify-center items-center z-40 h-[50px] w-[50px] bottom-5 right-5 md:bottom-10 md:right-10'>
        <BiChevronUp className='text-4xl'/>
    </div> )}
    </>
  )
}

export default BackToTop