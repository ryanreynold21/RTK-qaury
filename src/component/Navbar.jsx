import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {cart} = useSelector(state => state.cart)
  return (
    <div className=' flex justify-between my-6'>
      <Link to={'/'}>
      <h2 className=' text-2xl border-lime-300 border-4 p-2 rounded-md shadow-md'>MMS-shop</h2>
       </Link>
      <div className=" flex gap-4">
        <input type="text" className=' bg-gray-200 p-2 rounded-lg  border-4 border-cyan-300' name="" id="" />
        <Link to='/cart'>
            <button className=' flex justify-center items-center text-2xl px-4 py-2 rounded shadow bg-cyan-300' >
                <AiOutlineShoppingCart/> 
                <span>- {cart.length}</span>
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
