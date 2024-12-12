
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cart';

function ProductCart(props) {
  const carts = useSelector(store => store.cart.items)
  console.log(carts);
  
  const {id,name,price,image,slug} = props.data;

  const dispatch = useDispatch();

  const handleAddCart = () =>{
    dispatch(addToCart({
      productid:id,
      quntity:1
    }))
  }
  
  return (
    <div className='bg-white p-5 rounded-sm shadow-xl'>
      <Link to={slug}>
          <img src={image} alt="" className='w-full rounded-sm drop-shadow-sm object-cover hover:scale-110 transition-all ease-linear' />
      </Link>
      <h3 className='text-center text-2xl font-semibold hover:scale-105 cur'>{name}</h3>
      <div className='flex justify-between items-center my-5'>
        <p className='text-xl'>
          $<span>{price}</span>
        </p>
        <button onClick={handleAddCart} className='px-3 py-1 rounded-sm bg-blue-400 text-white hover:bg-red-500 ease-linear'>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCart;
