"use client"
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSidebarMenuItem } from "./sidebarUtils";
import { useGetPrifileInfoQuery } from "@/redux/api/profile";

const DashboardSidebar = ({ active, setActive }) => {
  const userInfo = getUserInfo();
  const {data}=useGetPrifileInfoQuery(undefined)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <aside style={
      active
        ? {
          maxWidth: 0,
          transition: ".4s ease ",
          overflow: "hidden",
          whiteSpace: "nowrap",
          background: "white"
        }
        : {
          maxWidth: "180px",
          transition: ".4s ease ",
          left: "0%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          // position: "absolute",
        }
    } className={`dashbaord_sidebar `}>
      <p>
        <small>Hello,{data?.data?.name}</small>
      </p>
      <div className="dashboard_link_wraper">
        {
          getSidebarMenuItem("admin")?.map(item => (
            <>
              <h6 >{item?.title} </h6>
              {
                item?.children?.length > 0 && (
                  <div className="sub_link_wraper">
                    {
                      item?.children?.map((child, j) => (
                        <p key={j}>
                          <Link href={child.url}>{child.title}</Link>
                        </p>
                      ))
                    }


                  </div>
                )
              }
            </>
          ))
        }


      </div>
    </aside>
  );
};

export default DashboardSidebar;
