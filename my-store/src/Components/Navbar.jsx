
import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className='left-nav'>
      <span>En</span>
      <div className='search-container'>
        <div className='inside-search'>
          <input className='input-search' type="text" placeholder='Search' />
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  

        </div>

        <div className='middle-nav'>
        <span className='para-middle'>LAMA</span>
        </div>
     
        <div className='right-nav'>
        <span>REGISTER</span>
        <span>SIGN IN</span>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
      
     

      
    </div>
  )
}
