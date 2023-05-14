import React from 'react'
import Navbar from '../components/Navbar'
import CartItemCard from '../components/CardItem'

function Cart() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-1/2'>
      <CartItemCard/>

      
        {/* //Show total price */}
        <p className="text-gray-700 font-medium mr-4">Total Price: 22222</p>
        
        {/* Checkout */}
        <button className="bg-primary btn-primary text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>

        </div>
     
    </div>
  )
}

export default Cart
