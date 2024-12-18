import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='flex flex-row justify-evenly mt-2 py-4 text-lg font-medium'>
        <Link to="/">Home</Link>
        <Link to="/basket">Basket</Link>
    </div>
  )
}

export default NavBar