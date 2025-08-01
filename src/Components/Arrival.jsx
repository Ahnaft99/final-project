import React, { useRef } from 'react' // ✅ added useRef
import Container from './Container'
import ad4 from '../assets/ad-4.png'
import Slider from 'react-slick';
import { FiArrowRightCircle } from 'react-icons/fi';
import { LuCircleArrowLeft } from 'react-icons/lu';

const Arrival = () => {
    const sliderRef = useRef(null); // ✅ slider reference

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

                {/* ✅ attach the ref here */}
                <Slider {...settings} ref={sliderRef} className=''>
                    <div className='w-full'>
                        <img src={ad4} alt="" />
                    </div>
                    <div className='w-full'>
                        <img src={ad4} alt="" />
                    </div>
                    <div className='w-full'>
                        <img src={ad4} alt="" />
                    </div>
                    <div className='w-full'>
                        <img src={ad4} alt="" />
                    </div>
                    <div className='w-full'>
                        <img src={ad4} alt="" />
                    </div>
                </Slider>

                {/* ✅ onClick added */}
                <div
                    className='absolute top-[50%] left-0'
                    onClick={() => sliderRef.current.slickPrev()}
                >
                    <h4 className='text-[50px] text-[#262626] font-bold'><LuCircleArrowLeft /></h4>
                </div>

                {/* ✅ onClick added */}
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
