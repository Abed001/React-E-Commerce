import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'


export default function Product() {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className='details-container'>
                <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
                <div className='product-details'>
                    <h1>Denim Jumpsuit</h1>
                    <p>Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Id nam vitae magnam labore enim eveniet
                        impedit mollitia quidem dicta alias?
                        Maiores voluptatibus ratione magnam
                        nulla aliquid aut quaerat nobis unde.</p>
                    <span className='detail-price'>$20.00</span>

                    <div className='color-size-filter-container'>
                        <div className='circle-container'>
                            <span className='filter-title'>Color</span>


                            <span className='circle1'></span>
                            <span className='circle2'></span>
                            <span className='circle3'></span></div>

                        <div className='size-container'>
                            <span className='filter-title'>Size</span>

                            <select className='filter-select' name="sizes" id="sizes">
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='button-counter-container'>
                        <div className="icon-counter-container">
                        <i class="fa-solid fa-minus"></i>
                        <div className='counter'>1</div>
                        <i class="fa-solid fa-plus"></i>
                        </div>
                        <div className='counter-btn'>
                            <button>ADD TO CART</button>
                        </div>


                    </div>
                </div>

            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
