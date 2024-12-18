import React from 'react'
import NavBar from '../components/NavBar'
import { storeData } from '../Data'
import Product from '../components/Product'
const Home = () => {
  return (
   <>
 

   <div>
   <NavBar />
   <h2 className='text-3xl text-center font-semibold mt-2 py-4'>UseContext + UseReducer Store</h2>
   <h2 className='text-4xl tracking-wide py-4 pl-8'>New In</h2>

   {storeData.map((item,i)=> 
    <Product key={i}
    item={item}/>
   )}
   </div>
  
   </>
  )
}

export default Home