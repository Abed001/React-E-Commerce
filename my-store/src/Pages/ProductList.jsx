import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'

export default function ProductList() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1 className='productList-title'>Dresses</h1>
      <div className='filter-container'>
        <div className='filter'><span> Filter products:</span>

          <select className='filter-select filter-select-size' name="colors" id="colors">
            <option value="color" selected="true" disabled="disabled">Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>


          <select  className='filter-select' name="sizes" id="sizes">
            <option value="size" selected="true" disabled="disabled">Size</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className='filter'><span> Sort products:</span>
        
        <select className='filter-select-sort'>
            <option value="size" selected="true">Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
         
          </select>
        </div>

      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}
