import React, { useContext, useRef } from 'react' 
import Container from './Container'

import Slider from 'react-slick';
import { FiArrowRightCircle } from 'react-icons/fi';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { ApiData } from './ContextApi';


const Arrival = () => {

    let data = useContext (ApiData)
    const sliderRef = useRef(null); 

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div>
            <Container className='relative'>
                <h1 className='text-[26px] text-[#262626] font-bold font-dm'>New Arrival</h1>

                 <Slider {...settings} ref={sliderRef}>
                    {data.map((item) => (
                       
                            <img src={item.thumbnail} alt={item.title} />
                        
                    ))}
                </Slider>
              
                <div
                    className='absolute top-[50%] left-0'
                    onClick={() => sliderRef.current.slickPrev()}
                >
                    <h4 className='text-[50px] text-[#262626] font-bold'><LuCircleArrowLeft /></h4>
                </div>

            
                <div
                    className='absolute top-[50%] right-0'
                    onClick={() => sliderRef.current.slickNext()}
                >
                    <h5 className='text-[50px] text-[#262626] font-bold'><FiArrowRightCircle /></h5>
                </div>
            </Container>
        </div>
    )
}

export default Arrival
