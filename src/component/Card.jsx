import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../feature/cartSlice'

const Card = ({item}) => {
    const {image,title,price} = item
    const dispatch = useDispatch();
   return (
    <div className=' shadow-lg border-black border-2 rounded-md p-4 mx-auto'>
      <img className=' w-[200px] h-[200px]' src={image} alt="" />
      <h2 className=' text-xl'>{title.substring(0,20)}...</h2>
      <p className=' text-xl font-bold'>£{price}</p>
      <div className=" flex gap-2">
        <button 
        onClick={() => dispatch(addToCart(item))}
        className=' bg-lime-500 rounded-md  text-white px-4 py-2'>Add to Cart</button>
        <button className=' bg-cyan-500 rounded-md  text-white px-4 py-2'>Details</button>
      </div>
    </div>
  )
}

export default Card
