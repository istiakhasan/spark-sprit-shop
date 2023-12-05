"use client";
import Link from "next/link";
import userPng from "/public/assets/user.svg";
import newUser from "/public/assets/new_user.svg";
import {
  Avatar,
  Button,
  Checkbox,
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
const LoginPage = () => {
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
  const submitHandler = (data) => {
    console.log(data);
  };
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
                  <SparkForm submitHandler={submitHandler}>
                    <SparkFormInput
                      placeholder={"Phone"}
                      name={"pass"}
                      type={"text"}
                    />
                    <SparkFormInput
                      placeholder={"Password"}
                      name={"name"}
                      type={"passsword"}
                    />
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
                  <SparkForm submitHandler={submitHandler}>
                    <div className="row">
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
