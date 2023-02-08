
import pink from './images/pink.png'
import React from 'react'
import { Carousel } from 'react-bootstrap'



const sliderItems = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/5719971/pexels-photo-5719971.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE SALE GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "f5fafd",

    },

    {
        id: 2,
        img: "https://images.pexels.com/photos/248021/pexels-photo-248021.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE SALE GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",

    },

    {
        id: 3,
        img: "https://images.pexels.com/photos/248021/pexels-photo-248021.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE SALE GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",

    }


]

export default function Slider() {
    return (
        <div className='carousel-container'>
            <Carousel>
                {
                    sliderItems.map(item => {
                        return (
                            <Carousel.Item key={item.id} interval={1000}>
                                <div className='wrapper'>
                                    <div className='slide'>
                                        <div className='image-container'>
                                            <img className="image" src={pink} alt="" />
                                        </div>

                                        <div className='info-container'>
                                            <h1 className='title-info'>SUMMER SALE</h1>
                                            <p className='para-info'>DON'T COMPROMISE SALE GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                                            <div className='btn-container'>
                                                <button className='btn-iinfo'>SHOP NOW</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }


            </Carousel>
        </div>
    )
}



