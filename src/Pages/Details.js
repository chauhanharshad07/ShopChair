import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products'
import { addToCart } from '../store/cart'
import { useDispatch } from 'react-redux'

function Details() {
  const { slug } = useParams()
  const [details, setDetails] = useState([])
  const [quntity, setQuntity] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    const findDetails = products.filter(product => product.slug === slug);
    if (findDetails.length > 0) {
      setDetails(findDetails[0])
    }
    else {
      window.location.href = "/"
    }
  }, [slug]);

  const handleMinusQuntity = () => {
    setQuntity(quntity - 1 < 1 ? 1 : quntity - 1)
  }
  const handlePlusQuntity = () => {
    setQuntity(quntity + 1)
  }
  const handleAddToCart = () => {
    dispatch(addToCart({
      productid: details.id,
      quntity: quntity
    }))
  }
  return (
    <div className='h-[86vh] bg'>
      <h2 className='text-4xl font-semibold text-center'>Product Details</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div className=''>
          <img src={details.image} className='hover:scale-105 ease-linear duration-100 cursor-pointer' alt="" />
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <h3 className='text-4xl font-semibold uppercase'>{details.name}</h3>
          <p className='text-2xl font-semibold'>${details.price}</p>
          <div className='flex items-center gap-5'>
            <div className='flex items-center mt-3'>
              <button onClick={handleMinusQuntity} className='px-2 py-1 bg-gray-100 h-10 w-20 rounded-l-lg text-2xl'>-</button>
              <span className='px-2 py-1 bg-black h-10 w-20 text-white  text-2xl text-center'>{quntity}</span>
              <button onClick={handlePlusQuntity} className='px-2 py-1 bg-gray-100 h-10 w-20 rounded-r-lg text-2xl'>+</button>
            </div>
            <button onClick={handleAddToCart} className='px-4 py-1 bg-black h-10  rounded-lg text-white text-xl mt-3'>Add To Cart</button>
          </div>
          <p className='opacity-55 capitalize  font-semibold'>{details.description}</p>
        </div>
      </div>

    </div>
  )
}

export default Details
