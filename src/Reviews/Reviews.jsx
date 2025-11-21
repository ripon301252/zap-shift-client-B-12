import React, { use } from "react";
import reviewImg from "../assets/customer-top.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Swiper CSS MUST
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews)
  return (
    <div className="lg:my-10 my-14 lg:mx-20 mx-5">
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
  loop={true}
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={1} 
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
  coverflowEffect={{
    rotate: 30,
    stretch: '50%',
    depth: 200,
    modifier: 1,
    scale: 0.75,
    slideShadows: true,
  }}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false
  }}
  pagination={{ clickable: true }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper relative pb-10"
>
  {reviews.map((singleReview) => (
    <SwiperSlide key={singleReview.id}>
      <ReviewCard singleReview={singleReview} />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default Reviews;
