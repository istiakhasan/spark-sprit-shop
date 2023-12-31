"use client"
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useEffect,useState } from "react";

const DashboardSidebar = ({active,setActive}) => {
  const userInfo = getUserInfo();

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
    <aside  style={
      active
        ? {
            maxWidth: 0,
            transition: ".4s ease ",
            overflow: "hidden",
            whiteSpace:"nowrap",
            background:"white"
          }
        : {
            maxWidth: "180px",
            transition: ".4s ease ",
            left: "0%",
            overflow: "hidden",
            whiteSpace:"nowrap",
            // position: "absolute",
          }
    } className={`dashbaord_sidebar `}>
      <p>
        <small>Hello,{"Rashed"}</small>
      </p>
      <div className="dashboard_link_wraper">
        <h6> Mange My account </h6>
        <div className="sub_link_wraper">
          <p>
            <Link href="/profile">My Profile</Link>
          </p>
          <p>
            <Link href="/addressbook">Address Book</Link>
          </p>
          <p>
            <Link href="/my-payment-opt">My Payment Options</Link>
          </p>
          <p>
            <Link href="/spark-wallet">Spark Wallet</Link>
          </p>
          <p>
            <Link href="/vouchers">Vouchers</Link>
          </p>
        </div>
        <h6> My Orders</h6>
        <div className="sub_link_wraper">
          <p>
            <Link href="/my-order">My Orders</Link>
          </p>
          <p>
            <Link href="/my-returns">My Returns</Link>
          </p>
          <p>
            <Link href="/my-cancellations">My Cancellations</Link>
          </p>
        </div>
        <h6> Manage Products</h6>
        <div className="sub_link_wraper">
          <p>
            <Link href="/my-category">Categories</Link>
          </p>
          <p>
            <Link href="/my-brand">Brand</Link>
          </p>
          <p>
            <Link href="/my-products">Products</Link>
          </p>
        </div>
        <Link href="/my-reviews">
          <h6> My Reviews </h6>{" "}
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
