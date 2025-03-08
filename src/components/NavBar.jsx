import React from 'react'
import AddedProduct from './AddedProduct'


export default function NavBar(props) {
  const {cart, showCart, quantity, showProduct, removeFromCart} = props
  const dropStyle = showProduct? "dropbox-active" : "dropbox-empty"
  return (
    <>
    <main className='h-18 flex items-center justify-between gap-9 px-20'>
        <div className='flex items-center justify-center gap-10'>
        <img src="/images/logo.svg" alt="" />
        <nav>
            <ul className='text-[hsl(219,9%,45%)] flex items-center justify-center w-5/4 gap-5'>
                <a href="/"><li>Collections</li></a>
                <a href="/"><li>Men</li></a>
                <a href="/"><li>Women</li></a>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Contact</li></a>
            </ul>
        </nav>
        </div>
        <div className= 'flex items-center justify-between w-24'>
            <button onClick={showCart}><img src={import.meta.env.BASE_URL + "/images/icon-cart.svg"} alt="" /></button>
            <img className='w-10' src="./images/image-avatar.png" alt="" />
        </div>
        <div style={cart?{display: 'block'}:{display:'none'}} className='absolute bg-white shadow-xl w-66 h-44 right-15 top-15'>
          <span className='font-bold m-4'>Cart</span>
          <hr className="my-4 mx-auto w-7/8 border-t border-gray-200" />
          <div className={dropStyle}>
            {showProduct? <AddedProduct quantity={quantity} removeFromCart={removeFromCart}/> : <p>Empty Cart</p>}
          </div>
        </div>
    </main>
    </>
  )
}
