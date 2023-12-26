"use client";
import {useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCart from "@/components/home/ProductCart";
import { useGetSimilarProductQuery } from '@/redux/api/productApi';
const RelatedProduct = ({id}) => {
  const {data}=useGetSimilarProductQuery({id:id})
  const relatedProducts=data?.data
    const [state, setState] = useState(false);
  useEffect(() => {
    const calculateInnerWidth=()=>{
      if (window.innerWidth < 600) {
        setState(true);
      } else {
        setState(false);
      }
    }
    calculateInnerWidth()
    window.addEventListener("resize" ,calculateInnerWidth);
    window.addEventListener("load", calculateInnerWidth);
    return ()=>{
      window.removeEventListener("resize" ,calculateInnerWidth)
      window.removeEventListener("load" ,calculateInnerWidth)
    }
  }, []);


  return (
    <div>
      <div className="my-3">
        <h1
          className="text-center mb-0"
          style={{ fontSize: "2.25rem", color: "#111" }}
        >
          Related
        </h1>
        <p
          className="text-secondary text-center mb-0"
          style={{ fontSize: "1.4rem" }}
        >
          Cum doctus civibus efficiantur in imperdiet deterruisset.
        </p>
      </div>

     <div className="container my-5">
     <Swiper
        slidesPerView={state?2:4}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            // disableOnInteraction: false, 
          }}
        loop={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {relatedProducts?.map((item) => (
          <SwiperSlide key={item}>
            <div style={{maxWidth:"300px"}}>
            <ProductCart item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </div>
  );
};

export default RelatedProduct;
