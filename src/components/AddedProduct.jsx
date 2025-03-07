import React from 'react'

export default function AddedProduct(props) {
  return (
    <>
        <div className='w-auto h-14 pl-2 flex items-center justify-around'>
            <img className='w-10 rounded-md' src="../images/image-product-1-thumbnail.jpg" alt="" />
            <div className='text-[14px]'>
                <span>Fall Limited Edition Sneakers</span>
                <p>$125 x {props.quantity} <b>${125 * props.quantity}</b></p>

            </div>
            <button onClick={props.removeFromCart}><img className='relative top-3 right-4 w-3' src="../images/icon-delete.svg" alt="" /></button>
        </div>
    </>
  )
}
