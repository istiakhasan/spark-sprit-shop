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
import { modifyDataForSelect } from './utils';
import { useCreateProductMutation } from '@/redux/api/productApi';
import { useState } from 'react';
import toast from 'react-hot-toast';
import './style.css'

const CreateProduct = ({setOpen}) => {
  const [loading,setLoading]=useState(true)
  const userInfo=getUserInfo()
  const { data } = useGetAllCategoryQuery()
  const { data: brandData } = useGetAllBrandQuery()
  const [createProduct]=useCreateProductMutation()
  const onSubmit = (data) => { 
    setLoading(false)
    const apiKey='ee3fd83f55e650edf800161db386836a' 
    const url=`https://api.imgbb.com/1/upload?key=${apiKey}` 
    const formData=new FormData()
    formData.append('image',data?.images[0]) 
    const copyData={...data} 
    copyData["brand"]=data?.brand.value
    copyData["categoryId"]=data?.categoryId.value
    copyData["manifacturer"]=data?.manifacturer.value
    copyData["status"]=data?.status?.value
    copyData["colors"]=data?.colors?.map((item)=>{
      return item?.value
    })
    copyData["size"]=data?.size?.map((item)=>{
      return item?.value
    })
    copyData["userId"]=userInfo._id 
    const image=copyData["images"][0]
    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(async data=>{
       copyData["image"]=data?.data?.url  
       const res=await  createProduct(copyData).unwrap() 
       setLoading(true)
       toast.success('Product created successfully 🙌')
       setOpen(false)
    })
    .catch(err=>{
      setLoading(true)
    })
  }
  const categoryDAta = modifyDataForSelect(data?.data)
  const modifyBrandata = modifyDataForSelect(brandData?.data)
  return (
    <div className='mt-4'>
      <SparkForm submitHandler={onSubmit}>
        <div className='row'>
          <div className="col-md-6">
            <SparkFormInput
              label={"Product Name"}
              placeholder={"Name"}
              name={"name"}
              type={"text"}
            />
          </div>
          <div className="col-md-6">
            <SparkFormSelect

              label={"Category"}
              placeholder={"Category"}
              name={"categoryId"}
              options={categoryDAta}
              type={"text"}
            />
          </div>
          <div className="col-md-6">
            <SparkFormMultiSelect

              label={"Colors"}
              placeholder={"Colors"}
              name={"colors"}
              options={[
                {
                  value: "red",
                  label: "Red",
                },
                {
                  value: "green",
                  label: "Green",
                },
                {
                  value: "blue",
                  label: "Blue",
                },
                {
                  value: "yellow",
                  label: "Yellow",
                }
              ]}
            />
          </div>
          <div className="col-md-6">
            <SparkFormMultiSelect

              label={"Size"}
              placeholder={"size"}
              name={"size"}
              options={[
                {
                  value: "Small",
                  label: "Small",
                },
                {
                  value: "Medium",
                  label: "Medium",
                },
                {
                  value: "Large",
                  label: "Large",
                }
              ]}
            />
          </div>
          <div className="col-md-4">
            <SparkFormInput
              label={"Quantity"}
              placeholder={"quantity"}
              name={"quantity"}
              type={"number"}
            />
          </div>
          <div className="col-md-4">
            <SparkFormInput
              label={"Price"}
              placeholder={"price"}
              name={"price"}
              type={"number"}
            />
          </div>
          <div className="col-md-4">
            <SparkFormInput
              label={"Discount"}
              placeholder={"discount"}
              name={"discount"}
              type={"number"}
            />
          </div>
          <div className="col-md-4">
            <SparkFormInput
              label={"Weight"}
              placeholder={"Weight"}
              name={"weight"}
              type={"number"}
            />
          </div>
          <div className="col-md-4">
            <SparkFormSelect

              label={"Manifacturer"}
              placeholder={"Manifacturer"}
              name={"manifacturer"}
              options={[
                {
                  value: "yes",
                  label: "Yes",
                },
                {
                  value: "no",
                  label: "No",
                },
              ]}
            />
          </div>
          <div className="col-md-4">
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
          <div className="col-md-6">
            <SparkFormSelect

              label={"Brand"}
              placeholder={"brand"}
              name={"brand"}
              options={modifyBrandata}
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
        {!loading&& <div className='loader_container'><span class="loader"></span></div>}
      </SparkForm>
    </div>
  );
};

export default CreateProduct;