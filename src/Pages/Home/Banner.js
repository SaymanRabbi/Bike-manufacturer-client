import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';
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
                            <h1 className="text-4xl mb-3 text-white font-bold uppercase">The Classic Backstory</h1>
                            <h6 className="text-white mb-5">Through historical references, stories and anecdotes shared by our key collaborators, we would like to take you</h6>
                <Link to="anchor" spy={true} smooth={true} duration={500} className="btn btn-primary">More Tools <FontAwesomeIcon className=" ml-2" icon={faScrewdriverWrench}></FontAwesomeIcon></Link>
                
                         </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="img-tow flex justify-center items-center">
                <div className=" w-full md:w-3/4 lg:w-2/4">
                <h1 className="text-4xl mb-3 text-white font-bold uppercase">Timeless Classic</h1>
                            <h6 className="text-white mb-5">The All-New Classic 350 continues to embody the traditions and craftsmanship of the past as it is reborn. </h6>
                            <Link to="anchor" spy={true} smooth={true} duration={500} className="btn btn-primary">More Tools <FontAwesomeIcon className=" ml-2" icon={faScrewdriverWrench}></FontAwesomeIcon></Link>
                              
                         </div>
                     </div>
               </SwiperSlide>
                <SwiperSlide>
                <div className="img-there flex justify-center items-center">
                <div className=" w-full md:w-3/4 lg:w-2/4">
                <h1 className="text-4xl mb-3 text-white font-bold uppercase">A Refined Glide</h1>
                            <h6 className="text-white mb-5">With an enhanced chassis setup, accessible riding position, advanced braking ability, high specification suspension</h6>
                            <Link to="anchor" spy={true} smooth={true} duration={500} className="btn btn-primary">More Tools <FontAwesomeIcon className=" ml-2" icon={faScrewdriverWrench}></FontAwesomeIcon></Link>
                              
                         </div>
                     </div>
             </SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Banner;