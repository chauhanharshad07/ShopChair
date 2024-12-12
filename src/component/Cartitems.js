import React, { useEffect, useState } from 'react'
import {products} from '../products'
import { useDispatch } from 'react-redux';
import { changeQuntityCart } from '../store/cart';

function Cartitems(props) {
    const {productid,quntity} = props.data;
    const [details,setDetails] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        const findDetails = products.filter(product => product.id === productid)[0];
        setDetails(findDetails);
    },[productid])


    const handleMinus = () =>{
        dispatch(changeQuntityCart({
            productid : productid,
            quntity : quntity - 1
        }))
    }

    const handlePlus = () =>{
        dispatch(changeQuntityCart({
            productid : productid,
            quntity : quntity + 1
        }))
    }
    
  return (
    <div className='flex  items-center p-5 bg-gray-200 rounded-md mb-2'>
        <div className='w-16 h-16 flex items-center gap-5'>
            <img src={details.image} alt="" />
            <h2 className='w-44 '>{details.name}</h2>
            <p>${details.price * quntity}</p>
            <div className='flex items-center'>
                <button onClick={handleMinus} className='px-3 bg-black text-white rounded-lg'>-</button>
                <span className='px-2'>{quntity}</span>
                <button onClick={handlePlus} className='px-3 bg-black text-white rounded-lg'>+</button>
            </div>
        </div> 
    </div>
  )
}

export default Cartitems
