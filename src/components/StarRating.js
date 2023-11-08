import React from 'react'
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#282828',
    },
    '& .MuiRating-iconHover': {
      color: '#f8f8f8',
    },
  });

const StarRating = ( {rating, count} ) => {
  return (
    <div className='flex items-center gap-x-1'>  
        <StyledRating name="read-only" value={rating} readOnly size="small"/>       
        <p className='text-sm'>({count})</p>
    </div>
  )
}

export default StarRating