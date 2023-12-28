/* eslint-disable @next/next/no-img-element */
"use client";
import { Pagination } from "@mui/material";
import BlogCard from "./_blogComponent/BlogCard";
import "./blog.css";
import { useState } from "react";

const Blog = () => {
  const [active,setActive]=useState(false)
  console.log(active,"active");
  return (
    <div className="main_body_container">
      <div className="pt-4">
        <div style={{ minHeight: "80vh" }}>
          <div className="container ">
            <div className="row">
              <div className="col-md-9">
                <div className="row ">
                  {[...Array(6).keys()].map((item,i) => (
                    <BlogCard key={i} />
                  ))}
                   <div className="d-flex my-5 col-md-12  align-items-center justify-content-center">
       <Pagination   onChange={(event,value)=>{
        }} count={100} size="small" />
       </div>
                </div>
              </div>
              <div style={{
                position:"sticky",
                top:0,
                boxSizing:"border-box"
              }} className="col-md-3 fit_height">
                <div
                  className="d-flex align-items-center justify-content-between mb-4"
                  style={{ background: "white", border: "1px solid" }}
                >
                  <input
                    style={{ border: "none", outline: "none", padding: "5px" }}
                    type="text"
                    placeholder="Search.."
                  />
                  <i className="bx bx-search fs-3"></i>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>
                  Latest Post
                </h3>
                <hr />
                {[...Array(4).keys()].map((item,i) => (
                  <div key={i} className="img-filter d-flex gap-3 mb-3">
                    <div>
                      <img
                        src="https://www.ansonika.com/allaia/img/blog-5.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <small style={{ color: "#555" }}>
                        Category - 11.08.2016
                      </small>
                      <p>Verear Qualisque Ex Minimum...</p>
                    </div>
                  </div>
                ))}

                <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>
                  Categories
                </h3>
                <hr />
                <div className="mb-4">
                  <a 
                   
                    className="text-filter d-flex justify-content-between"
                    href=""
                  >
                    <span className={`${active?"cm_color":""}`} onMouseEnter={() => setActive(true)}
                   onMouseLeave={() => setActive(false)}>Food</span><span className={`${active?"cm_color":""}`} onMouseEnter={() => setActive(true)}
                   onMouseLeave={() => setActive(false)}>12</span>
                  </a>
                  <a
                    className="text-filter d-flex justify-content-between"
                    href=""
                  >
                    Places to visit<span>21</span>
                  </a>
                  <a
                    className="text-filter d-flex justify-content-between"
                    href=""
                  >
                    New Places<span>44</span>
                  </a>
                  <a
                    className="text-filter d-flex justify-content-between"
                    href=""
                  >
                    Suggestions and guides<span>31</span>
                  </a>
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>
                  Popular tags
                </h3>
                <hr />
                <div className="submit d-flex align-items-center gap-2 flex-wrap ">
                  <button className="btn btn-outline-primary mb-2 ">
                    Food
                  </button>
                  <button className="btn btn-outline-primary btn-sm mb-2 ">
                    Bars
                  </button>
                  <button className="btn btn-outline-primary btn-sm mb-2 ">
                    Cooktails
                  </button>
                  <button className="btn btn-outline-primary btn-sm mb-2 ">
                    Shops
                  </button>
                  <button className="btn btn-outline-primary btn-sm mb-2 ">
                    Best Offers
                  </button>
                  <button className="btn btn-outline-primary btn-sm mb-2 ">
                    Transports
                  </button>
                  <button className="btn btn-outline-primary btn-sm mb-2 ">
                    Restaurants
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Blog;
