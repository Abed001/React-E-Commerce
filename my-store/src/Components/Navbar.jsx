
import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate } from 'react-router-dom'


export default function Navbar() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/register");
  }

  function handleClickCart() {
    navigate("/cart");
  }
 
 

  return (
    <div className="navbar-container">
      <div className='left-nav'>
      <span>En</span>
      <div className='search-container'>
       
          <input className='input-search' type="text" placeholder='Search' />
        <i class="fa-solid fa-magnifying-glass"></i>
       
       
        </div>
  

        </div>

        <div className='middle-nav'>
        <span className='para-middle'>LAMA.</span>
        </div>
     
        <div className='right-nav'>
          <Link className='right-nav-links' to="/register">REGISTER</Link>
          <Link className='right-nav-links' to="/login">SIGN IN</Link>
        <i onClick={handleClickCart} class="fa-solid fa-cart-shopping"></i>
        </div>
      
     

      
    </div>
  )
}
