"use client";
import { useGetAllBlogsQuery, useLoadAllBlogCategoryQuery } from "@/redux/api/blogApi";
import moment from "moment/moment";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BlogStickeySection = ({ blogId }) => {
  const router = useRouter();
  const query = {};
  const [active, setActive] = useState('');

  const { data } = useGetAllBlogsQuery(query, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  const { data: blogCategoryData } = useLoadAllBlogCategoryQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  const blogCateogy = blogCategoryData?.data;
  const latestBlog = data?.data?.filter(item=>item?.id !==blogId)
  const modifiedData = latestBlog?.length>4?latestBlog?.slice(0,4):latestBlog

  return (
    <div style={{
      position: "sticky",
      top: 0,
      boxSizing: "border-box"
    }} className="col-md-6 col-lg-3 fit_height">
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
      {modifiedData?.map((item, i) => (
        <div onClick={() => {
          router.push(`/blog/${item?.id}`);
        }} key={i} style={{ cursor: "pointer" }} className="img-filter d-flex gap-3 mb-3 ">
          <div>
            <img
              src={item?.image}
              alt=""
            />
          </div>
          <div>
            <small style={{ color: "#555" }}>
              Category - {moment(item?.createdAt).format('DD.MM.YYYY')}
            </small>
            <p>{item?.title?.length > 27 ? `${item?.title?.slice(0, 27)}...` : item?.title}</p>
          </div>
        </div>
      ))}

      <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>
        Categories
      </h3>
      <hr />
      <div className="mb-4">
        {blogCateogy?.map((item, i) => (
          <a
            key={i}
            className="text-filter d-flex justify-content-between"
            href=""
          >
            <span className={`${active===i ? "cm_color" : ""}`} onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive('')}>{item?.name}</span>
            <span className={`${active===i ? "cm_color" : ""}`} onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive('')}>{item?.productLength}</span>
          </a>
        ))}
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
          Cocktails
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
  );
};

export default BlogStickeySection;
