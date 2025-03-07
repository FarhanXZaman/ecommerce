import React from 'react'

export default function Product(props) {
    const {showBorder, selectImage, displayImg} = props
    const display = `/images/image-product-${displayImg}.jpg`
    
  return (
    <>
        <main className='w-fit flex items-center justify-center flex-col gap-6'>
            <img className=' h-80 rounded-xl' src={display} alt="" />
            <nav>
                <ul className='w-xs flex items-center justify-center gap-6'>
                    {showBorder.map((_,idx)=>{
                        const image = `../images/image-product-${idx+1}-thumbnail.jpg`
                        return(
                        <li key={idx}><img style={showBorder[idx] ? {outline: "2px solid hsl(26, 100%, 55%)", opacity:"0.5"} : {}} onClick={()=> selectImage(idx)} className='rounded-md cursor-pointer' src={image} alt="" /></li>)
                        })}
                    
                </ul>
            </nav>
        </main>
    </>
  )
}

