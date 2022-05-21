import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                <SwiperSlide>
                    <div className="img-one flex justify-center items-center">
                        <div className="w-full md:w-3/4 lg:w-2/4">
                            <h1 className="text-5xl text-white font-bold uppercase">Bullet with plain "Enfield" tank badge</h1>
                              
                         </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="img-tow flex justify-center items-center">
                <div className=" w-full md:w-3/4 lg:w-2/4">
                            <h1 className="text-5xl text-white font-bold uppercase">Bullet with plain "Enfield" tank badge</h1>
                              
                         </div>
                     </div>
               </SwiperSlide>
                <SwiperSlide>
                <div className="img-there flex justify-center items-center">
                <div className=" w-full md:w-3/4 lg:w-2/4">
                            <h1 className="text-5xl text-white font-bold uppercase">Bullet with plain "Enfield" tank badge</h1>
                              
                         </div>
                     </div>
             </SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Banner;