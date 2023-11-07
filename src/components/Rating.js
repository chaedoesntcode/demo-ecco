import React from 'react'

const Rating = ({rating, count}) => {
  return (
    <div>
        <p>Rating: {rating}</p>
        <p>Count {count}</p>
    </div>
  )
}

export default Rating