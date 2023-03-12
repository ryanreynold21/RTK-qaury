import React from 'react'
import {BsDashCircle,BsPlusCircle} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { decrease, increase, removeFromCart } from '../feature/cartSlice'

const Item = ({item}) => {
  const {title,image,price,id,qty} = item;
  const dispatch = useDispatch();
  const productPrice =( price*qty).toFixed(2)
  return (
       <div className='w-[30rem] mx-auto flex items-center justify-evenly border border-b-cyan-700 shadow-md shadow-lime-500/50 my-2 py-6'>
      <div className="">
        <img src={image} className='h-32 w-32' alt="" />
        <h1 className='w-56'>{title.substring(0,20)}...</h1>
        <p className=' text-xl font-bold'> £ {productPrice}</p>
      </div>
    <div className="">
        <div className=" flex items-center gap-3 my-3">
          <button onClick={() => dispatch(decrease(item))} className=' text-xl px-4 text-black bg-zinc-300 rounded-md py-1'> <BsDashCircle /> </button>
          <span>{qty}</span>
          <button onClick={() => dispatch(increase(item))} className=' text-xl px-4 text-black bg-zinc-300 rounded-md py-1'> <BsPlusCircle /> </button>
        </div>
      <button onClick={() => dispatch(removeFromCart(item))} className=' btn text-red-500 mt-10 cursor-pointer'>Remove</button>
    </div>
</div>
  )
}

export default Item
