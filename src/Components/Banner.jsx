import React from 'react'
import banner from '../assets/banner.png'
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        appendDots: dots => (
          <div
            style={{
             
              borderRadius: "10px",
              padding: "10px",
              position:"absolute",
              left: "10%",
              top: "50%",
              transform: "translatey(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "transparent",
              borderRight: "2px #FFFFFF solid",
              padding: "10px 0"
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (
    <div className='w-full'>
        <Slider {...settings}>
        <div className=''>
    <a href="#"><img src={banner} alt="" /></a>
   </div>
   <div className='w-full'>
    <a href="#"><img src={banner} alt="" /></a>
   </div>
   <div className='w-full'>
    <a href="#"><img src={banner} alt="" /></a>
   </div>
   <div className='w-full'>
    <a href="#"><img src={banner} alt="" /></a>
   </div>
        </Slider>
       
    </div>
   
  )
}

export default Banner