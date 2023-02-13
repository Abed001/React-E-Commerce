import React from 'react'



export default function Product({thing}) {
  return (
    <div className='indivdual-item-container'>
      <div className='circle'>
      <img className='image-circle' src={thing.img} alt="" />
      </div>
      <div  className= 'product-icons-container'>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-heart"></i>
      </div>
    
      
    </div>
  )
}
