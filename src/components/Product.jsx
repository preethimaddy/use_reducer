import React from 'react'
const Product = ({item}) => {
  return (
    <div>
        <img src={item.image} alt="Missing image"/>
    </div>
  )
}

export default Product