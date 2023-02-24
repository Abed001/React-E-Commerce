import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function Cart() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className='cart-container'>
        <h1>YOUR BAG</h1>
        <div className='cart-wrapper'>
          <button>CONTINUE SHOPPING</button>
          <div className='cart-top-text'>
            <p>Shopping Bag (2)</p>
            <p>Your Wishlist (0)</p>
          </div>
          <button>
            CHECKOUT NOW
          </button>

        </div>
        <div className='product-order-wrapper'>
          <div className='product-container'>
            <div className='product-container-wrapper'>

              <div className='cart-product-details'>
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />

                <ul><li><span>Product:</span> JESSIE THUNDER SHOES</li>
                  <li><span>ID:</span> 7895184845458</li>
                  <li> <span className='circle-black'></span></li>
                  <li className='-cart-size'><span>Size:</span> 37.5</li></ul>
              </div>

            </div>
            <div className='cart-price-counter'>
              <div className="icon-counter-container">
                <i class="fa-solid fa-minus"></i>
                <div className='cart-counter'>1</div>
                <i class="fa-solid fa-plus"></i>
              </div>
              <span>$ 50</span>


            </div>

          </div>

          <div className='order-summery-container'>
            <div className='order-summery-wrapper'>

              <h3>ORDER SUMMERY</h3>
              <div className='order-summery-info'><span> Sub total</span>
                <span> $80.0</span>
              </div>

              <div className='order-summery-info'><span> Estimated Shipping</span>
                <span> $5.90</span>
              </div>

              <div className='order-summery-info'><span> Shipping Discount</span>
                <span> -$5.90</span>
              </div>

              <div className='order-summery-info change'><span>Total</span>
                <span>$80.0</span>
              </div>
              <div >
                <button>CHECKOUT NOW</button></div>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
