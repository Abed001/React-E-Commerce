import React from 'react'
import {useNavigate } from 'react-router-dom'




export default function CategoryItem({item}) {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/productlist");
  }

  return (
    <div className ="category-item-container">
      <div className = "category-item-inner-container">
      <div className ="category-item-card-container">
      <img className = "category-item-img" 
       src={item.img} alt="" />
       <div className ="category-item-info-container">
      <span className =" category-item-span">{item.title}</span>
      <button onClick={handleClick} className = "category-item-btn">SHOP NOW</button>
      </div>
      </div>
       </div>
  </div>
   
  )
}
