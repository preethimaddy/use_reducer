import {useContext} from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from './context-and-reducer/storeContent';

const NavBar = () => {
  const {products} = useContext(StoreContext)
  return (
   <>
    <div className='flex flex-row justify-evenly mt-2 py-4 text-lg font-medium'>
        <Link to="/">Home</Link>
        <Link to="/basket">Basket
        <span className='text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1 '>{products.length}</span></Link>
    </div>
          <h2 className='text-3xl text-center font-semibold mt-2 py-4'>UseContext + UseReducer</h2>
    </>
      
  )
}

export default NavBar