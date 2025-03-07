import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Product from './components/Product'
import Info from './components/Info'

function App() {

  const [quantity, setQuantity] = useState(0)
  const [showBorder, setShowBorder] = useState([null,null,null,null])
  const [displayImg, setDisplayImg] = useState(1)
  const [cart, setCart] = useState(false)
  const [showProduct, setShowProduct] = useState(false)

  function addProduct(){
    setQuantity(q=> q+1)
  }
  function removeProduct(){
    if(quantity>0){
    setQuantity(q=> q-1)
    }
  }
  function selectImage(selectedImage){
    setShowBorder(showBorder.map((_, idx) => idx === selectedImage));
    setDisplayImg(()=>selectedImage+1)
  }

  function showCart(){
    setCart(!cart)
  }

  function addToCart(){
    setShowProduct(true)
    showCart()
  }

  function removeFromCart(){
    setShowProduct(false)
  }
  

  return (
    <>
    <main>
      <header className='w-auto'>
        <NavBar cart={cart} showCart={showCart} quantity={quantity} showProduct={showProduct} removeFromCart={removeFromCart}/>
      </header>
      <hr className="my-4 mx-auto w-7/8 border-t border-gray-200 mb-14" />
      <div className='flex items-center justify-center gap-28'>
        <Product showBorder={showBorder} selectImage={selectImage} displayImg={displayImg}/>
        <Info quantity={quantity} addProduct={addProduct} removeProduct={removeProduct} addToCart={addToCart}/>
      </div>
    </main>
    </>
  )
}

export default App
