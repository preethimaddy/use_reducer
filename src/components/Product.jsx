import React from 'react'
const Product = ({item}) => {
  return (
    <div className='mx-auto px-8 border border-gray-200'>
        <img src={item.image} alt="Missing image"/>
        <p className='text-xl'>{item.name}</p>
        <p className='text-lg'>${item.price}</p>
    </div>
  )
}

export default Product