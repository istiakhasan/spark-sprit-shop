"use client"
import SparkForm from "@/components/form/SparkForm";
import SparkFormInput from "@/components/form/SparkFormInput";
import SparkFormRating from "@/components/form/SparkRating";
import SparkFormTextArea from "@/components/form/SpartFormTextArea";
import { useParams, useRouter } from "next/navigation";
import {
  Button
} from "@mui/material";
import { getUserInfo } from "@/services/auth.service";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import toast from "react-hot-toast";
const LeaveReview = () => { 
  const [createReview]=useCreateReviewMutation()
  const router=useRouter()
  const params=useParams()
  const userInfo=getUserInfo()
  const handleSubmit=async(data)=>{
    const payload={
      ...data,
      productId:params.id,
      userId:userInfo?._id
    }
    const res=await createReview(payload).unwrap() 
    if(res?.success){
      toast.success("Review successfully")
      router.push(`/product/${params?.id}`)
    }
  }
  return (
    <div style={{minHeight:"800px"}} className="main_body_container d-flex align-items-center justify-content-center">
     <div className="container">
     <div  className=" review_form_wraper">
        <SparkForm submitHandler={handleSubmit}>
        <h1 style={{ fontSize: "28px", color: "#111", fontWeight: "bold" }}>
           Write a review for Armor Air X Fear
         </h1>
          <SparkFormRating name={"rating"} label={"Overall Rating"}/>
         <SparkFormInput label={"Title Of Your Review"}  name={"title"}/>
         <SparkFormTextArea row={4} label={"Title Of Your Review"}  name={"review"}/>
         <div className="mb-4">
           <Button
             sx={{ background: "#004DDA", fontSize: "12px" }}
             className=" px-2 py-2 "
             variant="contained"
             type="submit"
           >
             SUBMIT REVIEW
           </Button>
         </div>
         </SparkForm>
       
        </div>
     </div>
    </div>
  );
};

export default LeaveReview;
