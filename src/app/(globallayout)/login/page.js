"use client";
import Link from "next/link";
import userPng from "/public/assets/user.svg";
import newUser from "/public/assets/new_user.svg";
import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  FormControl,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import MuiBreadCrumb from "@/components/ui/MuiBreadcrumb";
import SparkForm from "@/components/form/SparkForm";
import SparkFormInput from "@/components/form/SparkFormInput";
import Image from "next/image";
import SparkFormTextArea from "@/components/form/SpartFormTextArea";
import SparkFormSelect from "@/components/form/SparkFormSelect";
import { useLoginUserMutation, useSignUpUserMutation } from "@/redux/api/auth";
import { redirect, usePathname,useRouter, useSearchParams } from "next/navigation";
import { isLoggedIn, setToLocalStorage } from "@/services/auth.service";
import { useEffect, useState } from "react";
import MuiSkilton from "@/components/shared/MuiSkilton";
import { AssignmentReturnRounded } from "@mui/icons-material";

const LoginPage = () => {
  const userLogin=isLoggedIn()
  const [loading,setLoading]=useState(false)
  const [loginUser]=useLoginUserMutation()
  const [signUpUser]=useSignUpUserMutation()
 const search=useSearchParams()
 const forWrodPath=search.get('pathaName')
 console.log(forWrodPath,"asfasf")
  const router=useRouter()
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      style={{ fontSize: "12px" }}
    >
      Home
    </Link>,
    <Typography sx={{ fontSize: "12px", color: "gray" }} key="3">
      Registration
    </Typography>,
  ];
  const redirectTo = forWrodPath || '/home';
  const submitHandler = async (data) => {
    try {
      const res = await loginUser(data).unwrap();
      if (res?.data?.token) {
        router.push(redirectTo);
      }
      setToLocalStorage('token',res?.data?.token)
    } catch (error) {
      console.log(error);
    }
  };
  const signUpHandler = async (data) => {
   
    try {
      const res = await signUpUser(data).unwrap();
      if (res?.data?.accessToken) {
        router.push(redirectTo);
      }
      setToLocalStorage('token',res?.data?.accessToken)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userLogin) {
      setLoading(false);
      router.push(redirectTo)
    } else {
      setLoading(true);
    }
  }, [router, userLogin]);
  if(!loading){
    return <MuiSkilton />
  }
  return (
    <div className="main_body_container">
      {/* <div style={{ background: "#F8F8F8" }} className="pt-4"> */}
      <div className="pt-4">
        <div className="container ">
          <div className="">
            <MuiBreadCrumb breadcrumbs={breadcrumbs} />
            <h1
              style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#111" }}
            >
              Sign In or Create an Account
            </h1>
            <div className="row my-4">
              <div className="col-md-6">
                <div className="d-flex align-items-end gap-2 mb-2">
                  <Image src={userPng} alt="me" width={40} height={40} />
                  <h1
                    className="mb-0"
                    style={{ color: "#444", fontSize: "1.5rem" }}
                  >
                    Already Client
                  </h1>{" "}
                </div>
                <div
                  className="p-4 rounded-1"
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}
                >
                 <div className="row">
                  <div className="col-md-6">
                  <div style={{background:"#3B5998",display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",padding:"12px",color:"#fff",fontSize:"14px",borderRadius:"4px"}}>
                    <MuiCommonIcon name={"facebook"} />
                   Login with Facebook
                  </div>
                  </div>
                  <div className="col-md-6">
                  <div style={{background:"#FD5A4B",display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",padding:"12px",color:"#fff",fontSize:"14px",borderRadius:"4px"}}>
                    <MuiCommonIcon name={"google"} />
                   Login with Google
                  </div>
                  </div>
                 </div>
                  <Divider className="my-3" sx={{fontSize:"14px"}}><em>or</em></Divider>
                  <SparkForm submitHandler={submitHandler}>
                    <SparkFormInput
                      placeholder={"Phone"}
                      name={"phone"}
                      type={"text"}
                    />
                    <SparkFormInput
                      placeholder={"Password"}
                      name={"password"}
                      type={"passsword"}
                    />
                    <div style={{color:"#999",fontSize:"14px",display:"flex",justifyContent:"space-between"}}>
                      <p className="d-flex gap-2 align-items-center"><Checkbox size="small" sx={{marginBottom:"12px"}}  className=" p-0 mb-0" />Remember Me</p>
                      <p className="d-flex gap-2 align-items-center">Lost Password?</p>
                    </div>
                    <Button
                      sx={{ background: "#004DDA", fontSize: "12px" }}
                      className=" px-2 py-2 d-block w-100"
                      variant="contained"
                      type="submit"
                    >
                      Log In
                    </Button>
                  </SparkForm>

                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-end gap-2 mb-2">
                  <Image src={newUser} alt="me" width={40} height={40} />
                  <h1
                    className="mb-0"
                    style={{ color: "#444", fontSize: "1.5rem" }}
                  >
                    New Client
                  </h1>{" "}
                </div>
                <div
                  className="p-4 rounded-1"
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}
                >
                  <SparkForm submitHandler={signUpHandler}>
                    <div className="row">
                      <div className="col-md-12">
                        <SparkFormInput
                          placeholder={"Full Name"}
                          name={"name"}
                          type={"text"}
                        />
                      </div>
                      <div className="col-md-12">
                        <SparkFormInput
                          placeholder={"Email"}
                          name={"email"}
                          type={"text"}
                        />
                      </div>
                      <div className="col-md-12">

                      <SparkFormInput
                        placeholder={"Phone"}
                        name={"phone"}
                        type={"text"}
                        />
                        </div>
                      <div className="col-md-6">
                        <SparkFormTextArea
                          row={3}
                          placeholder={"Bio"}
                          name={"bio"}
                          type={"text"}
                        />
                      </div>
                      <div className="col-md-6">
                        <SparkFormTextArea
                          row={3}
                          placeholder={"Address"}
                          name={"address"}
                          type={"text"}
                        />
                      </div>
                      <div className="col-md-6">
                        <SparkFormInput
                          placeholder={"city"}
                          name={"city"}
                          type={"text"}
                        />
                      </div>
                      <div className="col-md-6">
                        <SparkFormInput
                          placeholder={"Post Code"}
                          name={"post_code"}
                          type={"text"}
                        />
                      </div>
                      <div className="col-md-6">
                        <SparkFormSelect
                          placeholder={"Country"}
                          name={"country"}
                          options={[
                            {
                              value: "1",
                              label: "adfasdfasf",
                            },
                            {
                              value: "2",
                              label: "dfsa",
                            },
                          ]}
                          type={"text"}
                        />
                      </div>
                      <div className="col-md-6">
                      <SparkFormInput
                        placeholder={"Password"}
                        name={"password"}
                        type={"passsword"}
                      />
                      </div>
                      <div style={{marginBottom:"12px"}} className="col-md-12 d-flex align-items-center gap-2">
                      <Checkbox size="small" sx={{marginBottom:"12px"}}  className=" p-0 mb-0" />
                      <p style={{fontWeight:"600",fontSize:"14px"}} className="mb-0">Accept <span style={{color:"#1565C0",cursor:"pointer"}}>Terms and conditions</span></p>
                      </div>
                      <div className="col-md-12">

                      <Button
                        sx={{ background: "#004DDA", fontSize: "12px" }}
                        className=" px-2 py-2 d-block w-100"
                        variant="contained"
                        type="submit"
                        >
                        Register
                      </Button>
                        </div>
                    </div>
                  </SparkForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
