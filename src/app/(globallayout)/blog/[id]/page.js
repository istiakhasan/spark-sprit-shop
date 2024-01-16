/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Pagination } from "@mui/material";
import BlogStickeySection from "../_blogComponent/BlogStickeySection";
import blogSingleImage from "/public/assets/img/blogsingle.jpg";
import avatar1 from "/public/assets/img/avatar1.jpg";
import newUser from "/public/assets/new_user.svg";
import Image from "next/image";
import '../blog.css'
import { useParams } from "next/navigation";
import { useGetblogbyidQuery, useInsertCommentMutation,useGetCommentQuery } from "@/redux/api/blogApi";
import moment from "moment";
import SparkForm from "@/components/form/SparkForm";
import SparkFormInput from "@/components/form/SparkFormInput";
import SparkFormTextArea from "@/components/form/SpartFormTextArea";
import { getUserInfo } from "@/services/auth.service";
import toast from 'react-hot-toast';
const BlogDetails = () => {
  const params = useParams()
  const userInfo=getUserInfo()
  console.log(userInfo,"user info")
  const { data } = useGetblogbyidQuery({ id: params?.id })
  const { data:blogCommentRes} = useGetCommentQuery({ id: params?.id },{
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  })
  const [insertComment] = useInsertCommentMutation()
  const blogData = data?.data
  const blogComment = blogCommentRes?.data
  const formSubmit = async(data) => {
    try{
      data["userId"]=userInfo?._id
      data["blogId"]=blogData?._id
      const res=await insertComment(data)
      toast.success(res?.data?.message)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="main_body_container pb-5">
      <div className="pt-4">
        <div style={{ minHeight: "80vh" }}>
          <div className="container ">
            <div className="row">
              <div className="col-12 col-md-9">
                <img className="w-100" height={450} src={blogData?.image} alt="me" />
                <div className="blog-read shadow-lg bg-white">
                  <h2>{blogData?.title}</h2>
                  <div className="blog-wraper mb-3">
                    <i className='bx bx-conversation'></i>
                    <span>Category</span>
                    <i className='bx bxs-category bx-burst' style={{ color: "rgba(0,0,0,0.89)" }}></i>
                    <span>{moment(blogData?.createdAt).format('DDD/MM/YYYY')}</span>
                    <i className='bx bx-data' style={{ color: "rgba(0,0,0,0.89)" }}></i>
                    <span>Admin</span>
                    <i className='bx bxs-contact'></i>
                    <span>(14) Comments</span>
                  </div>
                  <div className="blog-wrapper-text">
                    <span>{(blogData?.description?.slice(0, 1))?.toUpperCase()}</span>
                    <p>{blogData?.description?.slice(1, blogData?.description?.length)}</p>
                  </div>
                </div>
                <div>
                  <h5 className="py-4">Comments</h5>
                </div>
                {
                  blogComment?.map(item => (

                    <div key={item} className="blog-wraper-image d-flex  gap-5">
                      <div className="">

                        <img
                          style={{objectFit:"cover"}}
                          className="rounded-circle"
                          src={item?.userId?.image} alt="me" width={40} height={40} />
                      </div>
                      <div className="blog-wraper-comments px-3 pb-3 mb-3">
                        <p className="mb-0"> By <span className="text-primary">{item?.userId?.name}</span> | {moment(item?.createdAt).format('DDD/MM/YYYY')} | <span style={{fontSize:"12px",color:"blue"}}>{moment(item?.createdAt).fromNow()}</span></p>
                        <p className="mb-0">{item?.message} </p>
                      </div>
                    </div>
                  ))
                }


                <div className="blog-wrapper-footer">
                  <h5 className="py-3">Leave a comment</h5>
                  <SparkForm submitHandler={formSubmit}>
                    <SparkFormTextArea row={3} placeholder={"Comment"} name={"message"} />
                    <Button
                      sx={{ background: "#004DDA", fontSize: "12px" }}
                      className="  d-block "
                      variant="contained"
                      size="small"
                      type='submit'
                    >
                      Post Comment
                    </Button>
                  </SparkForm>
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

export default BlogDetails;
