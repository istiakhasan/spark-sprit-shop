/* eslint-disable @next/next/no-img-element */
"use client"
import { useGetCommentQuery } from "@/redux/api/blogApi";
import moment from "moment";
import { useRouter } from "next/navigation";


const BlogCard = ({item}) => {
  const router=useRouter()
  const { data:blogCommentRes} = useGetCommentQuery({ id: item?.id },{
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  })
  const comment=blogCommentRes?.data?.length
  return (
    <div className="col-md-6 h-auto mb-4">
      <div className="card-wrapper h-100 bg-white ">
        <div className="card-img">
          <img style={{objectFit:"cover"}} src={item?.image} alt="" />
          <button onClick={()=>router.push(`/blog/${item?.id}`)} className="text-move">Read More</button>
        </div>
        <div className="p-4 pb-0 ">
          <div className="card-text">
            <span style={{ fontWeight: "500", color: "#999" }}>
              Category - {moment(item?.createdAt).format('DDD MMMM.YYYY')}
            </span>
            <h2 style={{ color: "#111", fontSize: "1.3125rem" }}>
             {item?.title}
            </h2>
            <p style={{ color: "#333" }}>
            {item?.description?.length>200?`${item?.description?.slice(0,200)}...`:item?.description}
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
            <span style={{ fontWeight: 500, color: "#999" }}>{comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
