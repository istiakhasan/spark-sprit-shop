"use client"
import SparkFileUpload from '@/components/form/SparkFileUpload';
import SparkForm from '@/components/form/SparkForm';
import SparkFormInput from '@/components/form/SparkFormInput';
import SparkFormSelect from '@/components/form/SparkFormSelect';
import { useCreateCategoryMutation } from '@/redux/api/categoryApi';
import { getUserInfo } from '@/services/auth.service';
import { Button } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
// import './style.css'
import { modifyDataForSelect } from './../../my-products/_create/utils';
import CustomLoading from '@/components/ui/CustomLoading';
const CreateCategory = ({setOpen}) => {
  const [loading,setLoading]=useState(true)
  const userInfo=getUserInfo()
  const [createCategory]=useCreateCategoryMutation()
  const onSubmit = (data) => { 
    setLoading(false)
    const apiKey='ee3fd83f55e650edf800161db386836a' 
    const url=`https://api.imgbb.com/1/upload?key=${apiKey}` 
    const formData=new FormData()
    formData.append('image',data?.images[0]) 
    const copyData={...data} 
    copyData["status"]=data?.status?.value
    copyData["userId"]=userInfo._id 
    const image=copyData["images"][0]
    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(async data=>{
       copyData["image"]=data?.data?.url   
       delete copyData["images"]
       const res=await  createCategory(copyData).unwrap() 
       setLoading(true)
       toast.success('Category created successfully 🙌')
       setOpen(false)
    })
    .catch(err=>{
      setLoading(true)
    })
  }
  return (
    <div className='mt-4'>
      <SparkForm submitHandler={onSubmit}>
        <div className='row'>
          <div className="col-md-12">
            <SparkFormInput
              label={"Product Name"}
              placeholder={"Name"}
              name={"name"}
              type={"text"}
            />
          </div>
          <div className="col-md-12">
            <SparkFormSelect

              label={"Status"}
              placeholder={"Status"}
              name={"status"}
              options={[
                {
                  value: "hot",
                  label: "Hot",
                },
                {
                  value: "new",
                  label: "New",
                },
              ]}
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
        {/* {!loading&& <div className='loader_container'><span class="loader"></span></div>} */}
        <CustomLoading  loading={loading}/>
      </SparkForm>
    </div>
  );
};

export default CreateCategory;