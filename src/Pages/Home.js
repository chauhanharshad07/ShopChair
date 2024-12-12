import React from 'react'
import {products} from '../products'
import ProductCart from "../component/productCart"

function Home() {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Product List</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product,key)=>
        <ProductCart data={product} key={key} />
        )}
      </div>
    </div>
  )
}

export default Home
