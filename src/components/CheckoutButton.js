import React from 'react'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button';

const CheckoutButton = () => {
  
  return (
    <div className='relative flex justify-center'>
        <Tooltip arrow title="This site is for Front-End demonstration purposes only. Checkout is not functional." placement="top" enterTouchDelay={0}>
        <Button variant="contained" sx={{
          background: '#282828',
          width: '100%',
          marginTop: 4,
          padding: '16px',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(40, 40, 40, 0.7)',
          },
          textTransform: 'uppercase',
        }}>Checkout</Button>
        </Tooltip>
    </div>
  )
}

export default CheckoutButton