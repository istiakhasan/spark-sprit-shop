"use client"
import SparkForm from "@/components/form/SparkForm";
import SparkFormInput from "@/components/form/SparkFormInput";
import SparkFormRating from "@/components/form/SparkRating";
import SparkFormTextArea from "@/components/form/SpartFormTextArea";
import { useParams, useRouter } from "next/navigation";
import {
  Button, LinearProgress
} from "@mui/material";
import { getUserInfo } from "@/services/auth.service";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import toast from "react-hot-toast";
import { useState } from "react";
const LeaveReview = () => {
  const [loading, setLoading] = useState(false)
  const [createReview] = useCreateReviewMutation()
  const router = useRouter()
  const params = useParams()
  const userInfo = getUserInfo()
  const handleSubmit = async (data) => {
    setLoading(true)
    try {
      const payload = {
        ...data,
        productId: params.id,
        userId: userInfo?._id
      }
      const res = await createReview(payload).unwrap()
      if (res?.success) {
        toast.success("Review successfully")
        await router.push(`/product/${params?.id}`)
      }
    } catch (err) {
      console.log(err,"err");
      err?.data?.errorMessages?.forEach(item=>{
        if(item.path==="userId"){
          toast.error("Please log In",{
            position:"bottom-right"
          })
        }else{

          toast.error(item?.message,{
            position:"bottom-right"
          })
        }
      })
      setLoading(false)
    }

  }
  return (
    <div style={{ minHeight: "800px" }} className="main_body_container d-flex align-items-center justify-content-center">
      <div className="container">
        <div className=" review_form_wraper">
          <SparkForm submitHandler={handleSubmit}>
            <h1 style={{ fontSize: "28px", color: "#111", fontWeight: "bold" }}>
              Write a review for Armor Air X Fear
            </h1>
            <SparkFormRating name={"rating"} label={"Overall Rating"} />
            <SparkFormInput label={"Title Of Your Review"} name={"title"} />
            <SparkFormTextArea row={4} label={"Title Of Your Review"} name={"review"} />
            <div className="mb-4">
              {!loading && <Button
                sx={{ background: "#004DDA", fontSize: "12px" }}
                className=" px-2 py-2 "
                variant="contained"
                type="submit"
                disabled={loading}
              >
                SUBMIT REVIEW
              </Button>}
              {loading && <LinearProgress sx={{ background: "white", color: "blue" }} variant="query" />}
            </div>
          </SparkForm>

        </div>
      </div>
    </div>
  );
};

export default LeaveReview;
