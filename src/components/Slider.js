import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

// import qq from './image/qq.png'
import p7 from './image/p7.jpg'
import p11 from './image/p11.jpg'
import p14 from './image/p14.jpg'
import p22 from './image/p22.jpg'
import p23 from './image/p23.jpg'
// import p7 from './image/p7.jpg'


import 'swiper/swiper.scss';

export default () => {
    const style = {
        'width': '100%',
        'minHeight': '200px'
    }
    return (
        <>
            <Swiper
                spaceBetween={5}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={p7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p11} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p14} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p22} />
                </SwiperSlide>
      ...
            </Swiper>
        </>
    )
}
