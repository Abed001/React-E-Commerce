
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const sliderItems = [
    {
        id: 1,
        img: "https://img.freepik.com/free-photo/woman-with-heels-hat_1187-1657.jpg?w=360&t=st=1676005056~exp=1676005656~hmac=2c154b4db40738691b8e8ca31951f8e8da56671ea51b46602e888dfa33597d69",
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

    const navigate = useNavigate();

    function handleClick() {
      navigate("/productlist");
    }
 
    
    return (
        <div className='carousel-container'>
            <Carousel className="Carousel">
                {
                    sliderItems.map(item => {
                        return (
                            <Carousel.Item key={item.id} >
                                <div className='slider-wrapper'>
                                    <div className='slide'>
                                        <div className='image-container'>
                                            <img className="image" src={item.img} alt=""/>
                                        </div>

                                        <div className='info-container'>
                                            <h1 className='title-info'>SUMMER SALE</h1>
                                            <p className='para-info'>DON'T COMPROMISE SALE GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                                            <div className='btn-container'>
                                                <button className='btn-iinfo' onClick={handleClick}>SHOP NOW</button>
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



