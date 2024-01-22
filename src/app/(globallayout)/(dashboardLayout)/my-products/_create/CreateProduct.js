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
import { modifyDataForSelect,uploadImageToImagebb } from './utils';
import { useCreateProductMutation,useUpdateProductMutation } from '@/redux/api/productApi';
import { useState } from 'react';
import toast from 'react-hot-toast';
import './style.css'
import SparkFormTextArea from '@/components/form/SpartFormTextArea';

const CreateProduct = ({setOpen,rowDto}) => {
  const [loading,setLoading]=useState(true)
  const userInfo=getUserInfo()
  const { data } = useGetAllCategoryQuery()
  const { data: brandData } = useGetAllBrandQuery()
  const [createProduct]=useCreateProductMutation()
  const [updateProduct]=useUpdateProductMutation()
  const onSubmit = async (data) => {
    try {
      setLoading(false)
      const formData = new FormData();
      if (data?.images) {
        formData.append('image', data?.images[0]);
      }
      const copyData = { ...data };
      const userId = userInfo._id;
      copyData["brand"] = data?.brand?.value;
      copyData["categoryId"] = data?.categoryId?.value;
      copyData["manifacturer"] = data?.manifacturer?.value;
      copyData["status"] = data?.status?.value;
      copyData["colors"] = data?.colors?.map(item => item?.value);
      copyData["size"] = data?.size?.map(item => item?.value);
      copyData["userId"] = userId;
      // Upload image
      let finalImageUrl;
      if (data?.images) {
        try {
          finalImageUrl = await uploadImageToImagebb(formData);
        } catch (uploadError) {
          console.error("Error uploading image:", uploadError);
          // Handle the error as needed, e.g., show a message to the user
          return;
        }
        copyData["image"] = finalImageUrl;
      }
      let res;
      if (rowDto) {
        res = await updateProduct({ id: copyData?._id, data: copyData }).unwrap();
      } else {
        res = await createProduct(copyData).unwrap();
      }
      setLoading(true);
      const successMessage = rowDto ? 'Product Updated successfully 🙌' : 'Product created successfully 🙌';
      toast.success(successMessage);
      setOpen(false);
    } catch (error) {
      setLoading(true)
      // Handle the error as needed, e.g., show a generic error message to the user
    }
  };
  
  const categoryDAta = modifyDataForSelect(data?.data)
  const modifyBrandata = modifyDataForSelect(brandData?.data)
  const modifyRowDto = {
    ...rowDto,
    colors: (rowDto?.colors || []).map(item => ({ label: item, value: item })),
    size: (rowDto?.size || []).map(item => ({ label: item, value: item })),
    brand: { label: rowDto?.brand?.name, value: rowDto?.brand?.id },
    categoryId: { label: rowDto?.categoryId?.name, value: rowDto?.categoryId?.id },
    status: { label: rowDto?.status, value: rowDto?.status },
    manifacturer: { label: rowDto?.manifacturer ? "Yes" : "No", value: rowDto?.manifacturer },
  };
  const defaultvalue=rowDto?modifyRowDto:{}
  return (
    <div className='mt-4'>
      <SparkForm defaultValues={defaultvalue} submitHandler={onSubmit}>
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
              label={"Previous Price"}
              placeholder={"Previous Price"}
              name={"previous_price"}
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
            <SparkFormTextArea
              row={3}
              label={"Description"}
              placeholder={"description"}
              name={"description"}
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

export default CreateProduct;