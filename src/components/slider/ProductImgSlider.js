/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const ProductImgSlider = () => {
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
              style={{ width: "100%", height: "500px", objectFit: "contain" }}
              src="https://www.ansonika.com/allaia/img/products/shoes/product_detail_1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "100%", height: "500px", objectFit: "contain" }}
              src="https://www.ansonika.com/allaia/img/products/shoes/product_detail_2.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
    );
};

export default ProductImgSlider;