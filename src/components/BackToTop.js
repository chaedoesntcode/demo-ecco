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
    {backToTop && (<div  onClick={scrollToTop} className='topBtn'>
        <BiChevronUp className='text-4xl'/>
    </div> )}
    </>
  )
}

export default BackToTop