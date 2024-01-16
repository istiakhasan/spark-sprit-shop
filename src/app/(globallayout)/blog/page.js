/* eslint-disable @next/next/no-img-element */
"use client";
import { Pagination } from "@mui/material";
import BlogCard from "./_blogComponent/BlogCard";
import "./blog.css";
import BlogStickeySection from "./_blogComponent/BlogStickeySection";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
const Blog = () => {
  const query={}
  const { data } = useGetAllBlogsQuery(query, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })
  return (
    <div className="main_body_container">
      <div className="pt-4">
        <div style={{ minHeight: "80vh" }}>
          <div className="container ">
            <div className="row">
              <div className="col-md-9">
                <div className="row ">
                  {data?.data?.map((item, i) => (
                    <BlogCard key={i} item={item} />
                  ))}
                  <div className="d-flex my-5 col-md-12  align-items-center justify-content-center">
                    <Pagination onChange={(event, value) => {
                    }} count={100} size="small" />
                  </div>
                </div>
              </div>
              <BlogStickeySection />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
