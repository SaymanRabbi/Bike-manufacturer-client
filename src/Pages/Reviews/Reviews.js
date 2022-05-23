import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'
import "./Reviews.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch('http://localhost:5000/review').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="py-5">
        
            <Swiper 
                breakpoints={{
                    // when window width is >= 640px
                    480: {
                      width: 480,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                    1366: {
                        width: 1366,
                        slidesPerView:3
                    },
                    900: {
                        width: 1366,
                        slidesPerView:3
                    },
                    1100:{
                        width: 1366,
                        slidesPerView:3
                    }
                    
                  }}
        
            spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
            >
                {
                    reviews.map((review,index) => <SwiperSlide key={index} className="py-3 my-auto px-3 rounded-md">
                     
                        <div>
                            <div className="flex items-center justify-between gap-5">
                                <div className="flex items-center gap-3">
                                <img src={review?.image} className="  w-16 h-16 rounded-full" alt="" />
                                <h2>{review.name}</h2>
                                 </div>
                                <div>
                                    {
                                    [...Array(parseInt(review.rating)).keys()].map((num,index)=><FontAwesomeIcon key={index} className=" text-yellow-600" icon={faStar}></FontAwesomeIcon>)
                                }
                                </div>
                            </div>
                            <div>
                                <h1 className=" text-justify">
                                    <span className=" text-sm">
                                    {
                                        review?.text
                                    }
                                    </span>
                                </h1>
                            </div>
                        
                        </div>   

                    </SwiperSlide>)
                }
       
      </Swiper>
       </div>
    );
};

export default Reviews;