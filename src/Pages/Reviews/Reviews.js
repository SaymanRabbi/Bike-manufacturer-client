import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Reviews.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch('http://localhost:5000/review').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="mt-5" style={{ height: '400px', backgroundColor: '#090921' }}>
        
      <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide className="custom my-auto">
                     
                        <div>
                            <div className="flex items-center gap-5">
                                <img src={review?.image} className="  w-16 h-16 rounded-full" alt="" />
                                <h2>{review.name}</h2>
                            </div>
                            <div>
                                <h1 >
                                    <span>
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