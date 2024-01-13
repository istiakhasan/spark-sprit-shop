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
import { useCreateAddressMutation, useUpdateAddressMutation } from '@/redux/api/addressBookApi';
import { useState } from 'react';
import toast from 'react-hot-toast';
import SparkFormCheckbox from '@/components/form/SparkCheckBox';
import './style.css'
const AddNewDeliveryAddress = ({ setOpen,item }) => {
    const [loading, setLoading] = useState(true)
    const userInfo = getUserInfo()
    const { data } = useGetAllCategoryQuery()
    const [createAddressBook] = useCreateAddressMutation()
    const [updateAddressBook] = useUpdateAddressMutation()
    const onSubmit = async(data) => {
        data["userId"]=userInfo?._id
        setLoading(false)
      try{
        if(item){
            const res=await updateAddressBook(data).unwrap()
        }else{

            const res=await createAddressBook(data).unwrap()
        }
      setLoading(true)
      setOpen(false)
      toast.success('Product created successfully 🙌')
      }catch(err){
        setLoading(true)
      }
      
    }
   const defaultValue=item?item:{}
    return (
        <div className='mt-4'>
            <SparkForm defaultValues={defaultValue}  submitHandler={onSubmit}>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="">
                            <SparkFormInput
                                label={"Full Name"}
                                placeholder={"Name"}
                                name={"fulName"}
                                type={"text"}
                            />
                        </div>
                        <div className="">
                            <SparkFormInput
                                label={"Phone"}
                                placeholder={"Phone"}
                                name={"phone"}
                                type={"text"}
                            />
                        </div>
                        <div className="">
                            <SparkFormInput
                                label={"Province"}
                                placeholder={"Province"}
                                name={"province"}
                                type={"text"}
                            />
                        </div>
                        <div className="">
                            <SparkFormInput
                                label={"City"}
                                placeholder={"city"}
                                name={"city"}
                                type={"text"}
                            />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <SparkFormInput
                            label={"Area"}
                            placeholder={"Area"}
                            name={"area"}
                            type={"text"}
                        />
                        <SparkFormInput
                            label={"Address"}
                            placeholder={"address"}
                            name={"address"}
                            type={"text"}
                        />
                        <div className="border p-2 rounded-1">
                        <SparkFormCheckbox
                            label={"Default delivery"}
                            name={"defaultDeliveryAddress"}
                            boxLabel={"Default delivery address"}
                            
                        />

                            <small style={{fontSize:"12px"}} className="d-block text-secondary">Your existing default address setting will be replaced if you make some changes here. </small>
                        </div>
                        

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
                {!loading && <div className='loader_container'><span class="loader"></span></div>}
            </SparkForm>
        </div>
    );
};

export default AddNewDeliveryAddress;