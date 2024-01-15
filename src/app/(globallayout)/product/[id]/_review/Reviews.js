/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useGetReviewByProductIdQuery } from "@/redux/api/reviewApi";
import { Box, Button, CircularProgress, Rating } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { getUserInfo } from "@/services/auth.service";
import moment from "moment";
const Reviews = () => {
  const query = {}
  const [loading,setLoading]=useState(false)
  const [page, setPage] = useState(1)
  query["page"] = page
  const [state, setState] = useState(false);
  const router = useRouter()
  const params = useParams()
  const userInfo = getUserInfo()
  query["id"] = params?.id
  query["limit"] = 2
  const { data ,isLoading} = useGetReviewByProductIdQuery(query)
  const [reviewData,setReviewData]=useState([])
  useEffect(() => {
    const calculateInnerWidth = () => {
      if (window.innerWidth < 600) {
        setState(true);
      } else {
        setState(false);
      }
    }
    calculateInnerWidth()
    window.addEventListener("resize", calculateInnerWidth);
    return () => {
      window.removeEventListener("resize", calculateInnerWidth)
    }
  }, []);


   useMemo(() => {
    if (data && data.data && Array.isArray(data.data)) {
      setReviewData([...reviewData, ...data.data]);
    }
    setLoading(false)
  }, [data]);
  return (
    <div className="pt-3" style={{ background: "#F8F8F8", minHeight: "400px" }}>
      <div className="container ">
        <div className="row">
        {userInfo?.role !=="admin" && <div className="pb-3">
            <Button
              sx={{ background: "#004DDA", fontSize: "12px" }}
              className=" px-2  d-block ms-auto"
              variant="contained"
              onClick={() => router.push(`/product/${params?.id}/review`)}
            >
              LEAVE A REVIEW
            </Button>
          </div>}
          { reviewData?.map((item, i) => (
            <div key={i} className="col-md-6  mb-4">
              <div
                style={!state ? { width: "90%" } : { width: "100%" }}
                className={`${item % 2 === 1 ? "ms-lg-auto" : ""}`}
              >
                <div className="d-flex  align-items-center justify-content-between">
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <Rating
                      name="size-small"
                      readOnly
                      value={item?.rating}
                      size="small"
                    />{" "}
                    <span
                      style={{ fontSize: "14px" }}
                      className="fst-italic text-secondary"
                    >
                      {(item?.rating)}/5.0
                    </span>
                  </p>
                  <span
                    style={{ fontSize: "15px" }}
                    className="fst-italic text-secondary"
                  >
                    {moment(item?.createdAt).fromNow()}

                  </span>
                </div>
                <p style={{ fontSize: "16px", color: "#444444", textAlign: "justify" }}>
                  <strong className="d-block my-2">
                    {item?.title}
                  </strong>
                  {item?.review}
                </p>
              </div>
            </div>
          ))}
        {isLoading || loading &&  <div className="py-5">
          <Box sx={{ display: 'flex',alignItems:"center",justifyContent:"center" }}>
          <CircularProgress />
           </Box>
          </div>}

        </div>
        <div className="pb-3">
         {data?.data?.length>0 && <Button
            sx={{ fontSize: "12px" }}
            className=" px-2  d-block mx-auto"
            variant="outlined"
            onClick={()=>{
              if(data?.data?.length>0){
                setPage(page+1)
                setLoading(true)
              }
            }}
          >
            Load More
          </Button>}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
