/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import './style.css'
const ProductImgSlider = ({data}) => {
    return (
        <Swiper
          style={{ height: "auto" }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="responsiveImage"
              src={data?.image}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
    );
};

export default ProductImgSlider;