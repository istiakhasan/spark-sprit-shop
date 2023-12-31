"use client"
import Link from "next/link";
import "./dashbaord.layout.css";
import {
  Avatar,
  Button,
  FormControl,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import MuiBreadCrumb from "@/components/ui/MuiBreadcrumb";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { isLoggedIn } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { redirect, usePathname, useRouter,useSearchParams } from "next/navigation";
import MuiSkilton from "@/components/shared/MuiSkilton";
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
const DashboardLayout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [active,setActive]=useState(false)
    const pathaName=usePathname()
    const router=useRouter()
    const userLoggedIn=isLoggedIn()
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
      Dashboard
    </Typography>,
  ];

  const searchParams = useSearchParams()
  useEffect(() => {
    if (!userLoggedIn) {
      const redirectUrl = `/login?pathaName=${encodeURIComponent(pathaName)}`;
      redirect(redirectUrl || "/");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn, pathaName]);
  if (!isLoading) {
    return <MuiSkilton />
  }


  return (
    <div className="main_body_container">
      <div
        style={{ background: "#F8F8F8", minHeight: "80vh" }}
        className="pt-4"
      >
        <div className="container ">
          <span onClick={()=>{
             setActive(!active)
          }}><DragHandleSharpIcon /></span>
          <div className="">
            <MuiBreadCrumb breadcrumbs={breadcrumbs} />
            <div style={{position:"relative"}} className="dashboard_container">
              <DashboardSidebar active={active} setActive={setActive} />
              <main className="dashbaord_body">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
