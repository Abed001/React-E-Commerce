import React from 'react'
import {useNavigate } from 'react-router-dom'


export default function Product({thing}) {
    const navigate = useNavigate();
  
    function handleClick() {
      navigate("/product");
    }
  
   



  return (
    <div className='indivdual-item-container'>
      <div className='circle'>
      <img className='image-circle' src={thing.img} alt="" />
      </div>
      <div  className= 'product-icons-container'>
      <i onClick={handleClick} class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-heart"></i>
      </div>
    
      
    </div>
  )
}
