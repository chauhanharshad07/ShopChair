// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartitems from './Cartitems'
import { toggleCartTab } from '../store/cart';

function CartTab() {
  const carts = useSelector(store => store.cart.items)
  const statustab = useSelector(store => store.cart.statustab)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleCartTab())
  }
  return (
    <>
      <div className={`fixed h-full shadow-2xl w-96 bg-gray-700 top-0 right-0 grid grid-rows-[60px_1fr_60px] transform duration-500 transition-transform ${statustab === false ? "translate-x-full" : ""}`}>
        <h2 className='text-4xl text-white p-5 font-semibold'>Shopping Cart</h2>
        <div className='pb-2 mx-3 mt-4'>
        {carts.length < 0 ? (
          <p className='text-white'>Your cart is empty.</p>
        ) : (carts.length > 0 ? 
          carts.map((item,key) => (
            <Cartitems key={key} data={item} />
          )) : ''
        )}
        </div>

        <div className='grid grid-cols-2'>
          <button onClick={handleClose} className='bg-black text-white px-3 text-2xl'>Close</button>
          <button className='bg-yellow-400 text-black px-3 text-2xl'>CheackOut</button>
        </div>

      </div>
    </>
  )
}

export default CartTab
