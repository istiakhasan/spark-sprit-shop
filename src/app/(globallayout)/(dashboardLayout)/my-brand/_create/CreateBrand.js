"use client"
import SparkFileUpload from '@/components/form/SparkFileUpload';
import SparkForm from '@/components/form/SparkForm';
import SparkFormInput from '@/components/form/SparkFormInput';
import SparkFormSelect from '@/components/form/SparkFormSelect';
import { getUserInfo } from '@/services/auth.service';
import { Button } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { modifyDataForSelect, uploadImageToImagebb } from '../../my-products/_create/utils';
import CustomLoading from '@/components/ui/CustomLoading';
import { useCreateBrandMutation,useUpdateBrandMutation } from '@/redux/api/brandApi';
const CreateBrand = ({setOpen,rowDto}) => {
  const [loading,setLoading]=useState(true)
  const userInfo=getUserInfo()
  const [createBrand]=useCreateBrandMutation()
  const [updateBrand]=useUpdateBrandMutation()
  const onSubmit =async (data) => { 
   try{
    setLoading(false)
    const formData=new FormData()
    if(data?.images?.length>0){
      formData.append('image',data?.images[0]) 
    }
    if (data?.images) {
      let finalImageUrl
      try {
        finalImageUrl = await uploadImageToImagebb(formData);
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError);
        return;
      }
      data["logo"] = finalImageUrl;
    }
    data["userId"]=userInfo._id 

    let res;
    if(!rowDto){
       res=await createBrand(data).unwrap()
     }else{
         res=await updateBrand({id:rowDto?._id,data}).unwrap() 
     }
    toast.success(res?.message);
    setOpen(false)
   }catch(error){
    setLoading(true)
   }

  }
  const defaultV=rowDto?rowDto:{}
  return (
    <div className='mt-4'>
      <SparkForm defaultValues={defaultV} submitHandler={onSubmit}>
        <div className='row'>
          <div className="col-md-12">
            <SparkFormInput
              label={"Brand Name"}
              placeholder={"Name"}
              name={"name"}
              type={"text"}
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
              Save
            </Button>
          </div>

        </div>
        <CustomLoading  loading={loading}/>
      </SparkForm>
    </div>
  );
};

export default CreateBrand;