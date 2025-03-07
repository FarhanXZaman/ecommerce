import React from 'react'

export default function Info(props) {
    const {quantity, addProduct, removeProduct, addToCart} = props
  return (
    <>
        <main className='w-96 h-96 flex flex-col gap-4 py-4'>
            <h3 className='text-[hsl(219,9%,45%)] text-sm font-medium'>SNEAKER COMPANY</h3>
            <h1 className='text-[hsl(220,13%,13%)] text-4xl font-bold'>Fall Limited Edition Sneakers</h1>
            <p className='text-[hsl(219,9%,45%)]'>These low-profile sneakers are your perfect casual wear companion. Feature a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='flex gap-3'>
                <h1 className='text-2xl font-bold'>$125.00</h1>
                <h3 className='bg-black text-[14px] text-white text-center px-2 py-1 w-auto h-auto rounded-xl'>50%</h3>
            </div>
            <span className='text-xm text-[hsl(219,9%,45%)] line-through'>$250.00</span>
            <div className='flex gap-3'> 
                <div className='bg-[hsl(223,64%,98%)] w-30 h-12 flex items-center justify-around gap-3'>
                    <button className='cursor-pointer' onClick={removeProduct}><img src="./images/icon-minus.svg" alt="" /></button>
                    <div>{quantity}</div>
                    <button className='cursor-pointer' onClick={addProduct}><img src="./images/icon-plus.svg" alt="" /></button>
                </div>
                <button onClick={addToCart} className='cursor-pointer flex items-center justify-center font-bold gap-3 bg-[hsl(26,100%,55%)] w-xs'>
                    <img className='text-black' src="./images/icon-cart.svg" alt="" />
                    <span className='text-white'>Add to carts</span>
                </button>
            </div>
        </main>
    </>
  )
}
