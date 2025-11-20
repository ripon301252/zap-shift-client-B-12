import React, { use } from "react";
import reviewImg from "../assets/customer-top.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Swiper CSS MUST
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews)
  return (
    <div className="my-10">
      <div>
        <img className="mx-auto" src={reviewImg} alt="" />
      </div>

      <h1 className="text-center text-4xl font-bold my-7">
        What our customers are sayings
      </h1>

      <p className="text-sm text-center">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce <br /> pain, and strengthen your body
        with ease!
      </p>

      <h3 className="text-center text-xl my-7">
        <span className="font-bold">Reviews :</span> {reviews.length}
      </h3>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // FIXED
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews.map((singleReview) => (
          <SwiperSlide key={singleReview.id}>
            <ReviewCard singleReview={singleReview}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
