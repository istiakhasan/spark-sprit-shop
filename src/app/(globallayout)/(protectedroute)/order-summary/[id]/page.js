"use client"
import MuiBreadCrumb from "@/components/ui/MuiBreadcrumb";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { Typography } from "@mui/material";
import Link from "next/link";
import OrderInvoice from "./_summary/OrderInvoice";
import { clearCart } from '@/redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect,useState } from "react";

const OrderSummary =(props) => {
    const id=props?.params?.id 
    const [data,setData]=useState([])
    const orderData=data.data
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
            Checkout
        </Typography>,
    ];
 
      const dispatch=useDispatch() 
        useEffect(()=>{
            fetch(`${getBaseUrl()}/order/order-summary/${id}`)
            .then(res=>res.json())
            .then(data=>setData(data));
           
            dispatch(clearCart())
        },[])
    return (
        <div className="main_body_container">
            <div >
                <div className="pb-5" style={{ minHeight: "80vh", background: "rgb(248, 248, 248)" }}>

                    <div className="container pt-4" >
                        <MuiBreadCrumb breadcrumbs={breadcrumbs} />
                        <h1 style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#111" }}> Order Summary</h1>

                        <div>
                            <OrderInvoice data={orderData} />
                        </div>
                      
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderSummary;