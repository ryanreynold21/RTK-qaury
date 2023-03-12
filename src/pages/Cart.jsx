import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../component/Item'
import { clearHandler } from '../feature/cartSlice'

const Cart = () => {
    const {cart,totalAmount} = useSelector(state => state.cart)
    const dispatch = useDispatch();
  return (
    <div>
      {cart?.map(item => <Item key={item.id} item={item} /> )}
      <div className=" mt-5 flex items-center flex-col">
        <h1 className=' text-xl'>Total - £ {totalAmount.toFixed(2)} </h1>
        <button
        onClick={() => dispatch(clearHandler())}
        className=' mt-4 px-4 py-2 text-white rounded-lg bg-rose-600'
        >Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart
