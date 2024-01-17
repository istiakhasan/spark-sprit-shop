"use client"
import SparkFileUpload from '@/components/form/SparkFileUpload';
import SparkForm from '@/components/form/SparkForm';
import SparkFormInput from '@/components/form/SparkFormInput';
import SparkFormMultiSelect from '@/components/form/SparkFormMultiSelect';
import SparkFormSelect from '@/components/form/SparkFormSelect';
import { useGetAllBrandQuery } from '@/redux/api/brandApi';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import { getUserInfo } from '@/services/auth.service';
import { Button } from '@mui/material';
import { useCreateBlogCategoryMutation,useUpdateBlogCategoryMutation } from '@/redux/api/blogApi';
import { useState } from 'react';
import toast from 'react-hot-toast';
// import './style.css'

const CreateBlogCategory = ({setOpen,rowDto}) => {
  const [loading,setLoading]=useState(true)
  const userInfo=getUserInfo()
  const { data } = useGetAllCategoryQuery()
  const [createBlogCategory]=useCreateBlogCategoryMutation()
  const [updateBlogCategory]=useUpdateBlogCategoryMutation()

  const onSubmit = async (data) => {
    try {
       setLoading(false)
       data["userId"]=userInfo?._id 
       let res;
       if(!rowDto){
          res=await createBlogCategory(data).unwrap()
        }else{
            res=await updateBlogCategory({id:rowDto?._id,data}).unwrap()
        }
       toast.success(res?.message);
       setOpen(false)
    } catch (error) {
      setLoading(true)
      // Handle the error as needed, e.g., show a generic error message to the user
    }
  };

  const defaultvalue=rowDto?rowDto:{}
  return (
    <div className='mt-4'>
      <SparkForm defaultValues={defaultvalue} submitHandler={onSubmit}>
        <div className='row'>
          <div className="col-md-12">
            <SparkFormInput
              label={"Category Name"}
              placeholder={"Name"}
              name={"name"}
              type={"text"}
            />
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

export default CreateBlogCategory;