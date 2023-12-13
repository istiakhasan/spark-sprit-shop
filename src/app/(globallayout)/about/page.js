/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useRef } from 'react';
import './about.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WhyChooseCard from './_component/WhyChooseCard';
const About = () => {
    return (
        <div  style={{background:"#f8f8f8"}} className="main_body_container">
          <div >
          <div  className="container-main">
        <div className="container">
            <div className="container-header text-center py-5">
                <h1 className="">About Allaia</h1>
                <p className="">Euismod phasellus ac lectus fusce parturient cubilia a nisi blandit sem cras nec <br /> tempor
                    adipiscing rcu ullamcorper ligula .</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="header-text p-5 bg-white ">
                        <h2>Top Products</h2>
                        <p>Est falli invenire interpretaris id, <br /> magna libris sensibus mel id.</p>
                        <p style={{fontSize: "1rem",
                            color: "#637381",fontWeight: 500}}>Per eu nostrud feugiat. Et quo molestiae persecuti
                            neglegentur. At zril definitionem mei, vel
                            ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex
                            velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio
                            delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center ">
                    <img  src="https://www.ansonika.com/allaia/img/about_1.svg" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6  d-flex align-items-center justify-content-center  ">
                    <img src="https://www.ansonika.com/allaia/img/about_1.svg" alt="" />
                </div>
                <div className="col-md-6">
                    <div className="header-text p-5 bg-white  ">
                        <h2>Top Brands</h2>
                        <p>Est falli invenire interpretaris id, <br /> magna libris sensibus mel id.</p>
                        <p style={{fontSize: "1rem",
                            color: "#637381",fontWeight: 500}}>Per eu nostrud feugiat. Et quo molestiae persecuti
                            neglegentur. At zril definitionem mei, vel
                            ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex
                            velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio
                            delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="header-text p-5 bg-white  ">
                        <h2>+5000 products</h2>
                        <p>Est falli invenire interpretaris id, <br /> magna libris sensibus mel id.</p>
                        <p style={{fontSize: "1rem",
                            color: "#637381",fontWeight: 500}}>Per eu nostrud feugiat. Et quo molestiae persecuti
                            neglegentur. At zril definitionem mei, vel
                            ei choro volumus. An tota nulla soluta has, ei nec essent audiam, te nisl dignissim vel. Ex
                            velit audire perfecto pro, ei mei doming vivendo legendos. Cu sit magna zril, an odio
                            delectus constituto vis. Vis ludus omnesque ne, est veri quaeque ad</p>
                    </div>
                </div>
                <div className="col-md-6 col-md-6  d-flex align-items-center justify-content-center ">
                    <img src="https://www.ansonika.com/allaia/img/about_1.svg" alt="" />
                </div>
            </div>

     

            <div className="container-header text-center py-5">
                <h1 className="">Why Choose Allaia</h1>
                <p className="">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div className="row">
           {
            [...Array(10).keys()].map((item)=>(
                <WhyChooseCard key={item} />
            ))
           }

            </div>
 
            <div className="container-header text-center py-5">
                <h1 className="">Meet Allaia Staff</h1>
                <p className="">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>

            <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination,Autoplay,Navigation]}
      className="mySwiper"
    >
      {[...Array(10).keys()].map((item) => (
        <SwiperSlide key={item}>
          <div style={{ maxWidth: "300px" }}>
            <img className="img-fluid" src="https://www.ansonika.com/allaia/img/staff/1_carousel.jpg" alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  
            
            </div>
        </div>
          </div>


        </div>
     
    );
};

export default About;