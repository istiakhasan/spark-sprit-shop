"use client"
import SparkFileUpload from '@/components/form/SparkFileUpload';
import SparkForm from '@/components/form/SparkForm';
import SparkFormInput from '@/components/form/SparkFormInput';
import SparkFormMultiSelect from '@/components/form/SparkFormMultiSelect';
import SparkFormSelect from '@/components/form/SparkFormSelect';
import SpartFormTextArea from '@/components/form/SpartFormTextArea';
import { useGetAllBrandQuery } from '@/redux/api/brandApi';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import { getUserInfo } from '@/services/auth.service';
import { Button } from '@mui/material';
import { useCreateBlogMutation,useLoadAllBlogCategoryQuery,useUpdateBlogMutation } from '@/redux/api/blogApi';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { uploadImageToImagebb } from '../../../my-products/_create/utils';
// import './style.css'

const CreateBlog = ({setOpen,rowDto}) => {
  const [loading,setLoading]=useState(true)
  const userInfo=getUserInfo()
  const [createBlogRes]=useCreateBlogMutation()
  const [updateBlogRes]=useUpdateBlogMutation()
  const {data:blogCategoryData}=useLoadAllBlogCategoryQuery(undefined,{
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true
  })

  const onSubmit = async (data) => {
    try {
       setLoading(false)
       const formData = new FormData();
      if (data?.images) {
        formData.append('image', data?.images[0]);
      }
       data["userId"]=userInfo?._id 
       data["category"]=data?.category?.value 
       let finalImageUrl;
       if (data?.images) {
         try {
           finalImageUrl = await uploadImageToImagebb(formData);
         } catch (uploadError) {
           console.error("Error uploading image:", uploadError);
           // Handle the error as needed, e.g., show a message to the user
           return;
         }
         data["image"] = finalImageUrl;
       }

      


       let res;
       if(!rowDto){
          res=await createBlogRes(data).unwrap()
        }else{
            res=await updateBlogRes({id:rowDto?._id,data}).unwrap()
        }
       toast.success(res?.message);
       setOpen(false)
    } catch (error) {
      setLoading(true)
      // Handle the error as needed, e.g., show a generic error message to the user
    }
  };

  const defaultvalue=rowDto?{...rowDto,category:{label:rowDto?.category?.name,value:rowDto?.category?.id}}:{}
  return (
    <div className='mt-4'>
      <SparkForm defaultValues={defaultvalue} submitHandler={onSubmit}>
        <div className='row'>
          <div className="col-md-6">
            <SparkFormInput
              label={"Title"}
              placeholder={"Title"}
              name={"title"}
              type={"text"}
            />
          </div>
          <div className="col-md-6">
            <SparkFormSelect 
            options={blogCategoryData?.data?.map(item=>{
              return {
                label:item?.name,
                value:item?._id
              }
            })}
              label={"Category"}
              name={"category"}
            />
          </div>
          <div className="col-md-12">
            <SpartFormTextArea
              label={"Description"}
              placeholder={"description"}
              name={"description"}
              type={"text"}
              row={3}
            />
          </div>
          <div className="col-md-12">
            <SparkFileUpload name="images" />
          </div>
          <div className="col-md-12">
            <Button
              sx={{ background: "#004DDA", fontSize: "12px" }}
              className="  d-block ms-auto"
              variant="contained"
              size="small"
              type='submit'
            >
              {rowDto?"Update":"Save"}
            </Button>
          </div>
        </div>
        {!loading&& <div className='loader_container'><span class="loader"></span></div>}
      </SparkForm>
    </div>
  );
};

export default CreateBlog;