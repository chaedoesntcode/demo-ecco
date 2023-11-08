import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button';

const UserDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef();

  const handleUserIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && dropdownVisible && !dropdownRef.current.contains(event.target)) {
          setDropdownVisible(false);
      }
    }

    const closeDropdown = (event) => {
      if (dropdownVisible) {
        handleOutsideClick(event);
      }
    };

    if (dropdownVisible) {
      window.addEventListener('mousedown', closeDropdown);
    }

    return () => {
      window.removeEventListener('mousedown', closeDropdown);
    };
  }, [dropdownVisible]);

  return (
    <div className='relative'>
      {!dropdownVisible && (
      <div onClick={handleUserIconClick} className='cursor-pointer hover:bg-secondary p-2 rounded-md transition'> 
        <AiOutlineUser className='text-4xl cursor-pointer' />
      </div>
      )}
      {dropdownVisible && (
        <>
        <div onClick={handleUserIconClick} className='bg-secondary cursor-pointer p-2 rounded-t-md transition'> 
          <AiOutlineUser className='text-4xl cursor-pointer' />
        </div>
        <div ref={dropdownRef} className="absolute bg-secondary top-[50px] right-0 w-[300px] py-10 px-4 rounded-tl-md rounded-b-md shadow-xl text-center">
          <p className='text-sm text-black/80 mb-4'>Sign in to save items to your wishlists, track your orders, and check out faster!</p>
          <Tooltip arrow title="This site is for Front-End demonstration purposes only. Sign in is not functional." placement="bottom" enterTouchDelay={0}>
            <Button variant="contained" sx={{
                background: '#282828',
                width: '100%',
                padding: '16px',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgba(40, 40, 40, 0.7)',
                },
                textTransform: 'uppercase',
            }}>Sign In</Button>
            </Tooltip>
          <p className='mt-4 text-sm text-black/80'>Don't have an account? Sign Up</p>
        </div>
        </>
      )}
    </div>
  )
}

export default UserDropdown