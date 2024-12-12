import React, { useEffect, useState } from 'react'
import iconCart from '../assets/images/iconCart.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartTab } from '../store/cart'
function Header() {

  const carts = useSelector(store => store.cart.items)
  const [totalquntity, setTotalquntity] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    let total = 0;
      carts.forEach(item => total += item.quntity)
      setTotalquntity(total)
      console.log("This is the cart from header",carts);      
  }, [carts]);

  const toggle = ()=>{
    dispatch(toggleCartTab())
  }

  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to="/" className='text-xl font-semibold'>Home.</Link>
      <div onClick={toggle} className='flex justify-between items-center w-10 h-10 px-2  bg-gray-100  rounded-full relative'>
        <img src={iconCart} className='w-6 ' alt="" />
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white w-5 h-5 rounded-full flex justify-center items-center '>{totalquntity}</span>
      </div>
    </header>
  )
}

export default Header
