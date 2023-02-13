import React from 'react'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-left'>
                <h1>LAMA.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt delectus cupiditate qui ullam earum eos. Vel praesentium voluptatibus, consequatur eligendi maxime ex beatae sint libero vero incidunt, numquam magnam.
                    .</p>
                <div className='footer-icon-container'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            <div className='footer-middle'>

                <p className='footer-span-container-middle'>Useful Links</p>
                <div className='list-container'>
                    <ul className='first-list'>
                        <li>Home</li>
                        <li>Man Fashion</li>
                        <li>Accessories</li>
                        <li>Order Tracking</li>
                        <li>Wishlist</li></ul>
                    <ul className='first-list'>
                        <li>Cart</li>
                        <li>Women Fashion</li>
                        <li>Accessories</li>
                        <li>Order Tracking</li>
                        <li>Wishlist</li>
                    </ul>
                </div>


            </div>
            <div className='footer-right'>
                <p className='footer-title-right'>Contact</p>

                <div><i class="fa-solid fa-location-dot"></i>
                    <p>622 Dixie Path , South Tobinchester 98336</p>
                </div>
                <div><i class="fa-solid fa-phone"></i>
                    <p>+1/123 456</p>
                </div>
                <div><i class="fa-regular fa-envelope"></i>
                    <p>contact@lama.dev</p>
                </div>
                <div><img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
                </div>

            </div>
        </div>
    )
}
