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

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && dropdownVisible && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
    }
  }

  useEffect(() => {
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
      <div onClick={handleUserIconClick}>
        <AiOutlineUser className='text-4xl cursor-pointer' />
      </div>

      {dropdownVisible && (
        <div ref={dropdownRef} className="absolute bg-white top-12 right-0 w-[300px] py-10 px-4 rounded-md shadow-xl">
          <Tooltip arrow title="Site for demonstration purposes only. Sign in is not functional" placement="bottom">
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
          <p className='mt-4 text-sm text-black/60'>Don't have an account? Sign Up</p>
        </div>
      )}
    </div>
  )
}

export default UserDropdown