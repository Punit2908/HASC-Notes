import React from 'react'


const Props = ({ name, price, discount, isAvailable } ) => {
    
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Discount: {discount}%</p>
      <p>Is Available: {isAvailable ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default Props
