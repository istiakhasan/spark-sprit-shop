/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogCard = () => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card-wrapper bg-white ">
        <div className="card-img">
          <img src="https://www.ansonika.com/allaia/img/blog-1.jpg" alt="" />
          <button onClick={()=>console.log("clicke")} className="text-move">Read More</button>
        </div>
        <div className="p-4 pb-0 ">
          <div className="card-text">
            <span style={{ fontWeight: "500", color: "#999" }}>
              Category - 20 Nov. 2017
            </span>
            <h2 style={{ color: "#111", fontSize: "1.3125rem" }}>
              Ea exerci option hendrerit
            </h2>
            <p style={{ color: "#333" }}>
              Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim
              offendit salutandi, in eos quod omnes epicurei, ex veri qualisque
              scriptorem mei.
            </p>
          </div>
        </div>
        <hr className="" />
        <div className="card-footer-img p-4 pt-0 d-flex  justify-content-between">
          <div className="card-footer-icon d-flex align-items-center gap-3">
            <img
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              src="https://www.ansonika.com/allaia/img/avatar.jpg"
              alt=""
            />
            <span style={{ fontWeight: "500", color: "#999" }}>Admin</span>
          </div>
          <div className="card-footer-icon-bar d-flex align-items-center gap-1">
            <i
              style={{ fontWeight: 500, color: "#999" }}
              className="bx bx-message"
            ></i>
            <span style={{ fontWeight: 500, color: "#999" }}>20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
