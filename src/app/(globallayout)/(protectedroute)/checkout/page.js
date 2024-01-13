"use client"
import MuiBreadCrumb from "@/components/ui/MuiBreadcrumb";
import { Avatar, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Link from "next/link";
import './checkout.css'
import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "@/common/utils";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import { decrementQuantity, incrementQuantity } from "@/redux/slice/cartSlice";
import { useGetAddressByIdQuery } from "@/redux/api/addressBookApi";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { getUserInfo } from "@/services/auth.service";
import AddressBookSection from "./_component/AddressBookSection";
import { useState } from "react";
import toast from "react-hot-toast";
const CheckoutPage = () => {
    const { cart, wishList, total, shipping } = useSelector((state) => state.cartSlice);
    const [defaultAddress,setDefaultAddress]=useState({})
    const [paymentType,setPaymentType]=useState('ssl-commerce')
    const [createOrder]=useCreateOrderMutation()
    const dispatch = useDispatch()
    const userInfo=getUserInfo()
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
 const handleSubmit=async()=>{
    if(paymentType !=="ssl-commerce"){
        return toast.error("You can only pay with ssl-commerze")
    }
    const payload={
        customerId:userInfo?._id,
        products:cart,
        paymentMethod:paymentType,
        totalPrice:Number(total+shipping),
        address:defaultAddress,
        shipping
    }
    console.log(payload,"payload")
    const res=await  createOrder(payload).unwrap()
    if(res?.data?.url){
        window.location.replace(res?.data?.url)
    }
    console.log(res,"res");
 }
    return (
        <div className="main_body_container">
            <div >
                <div className="pb-5" style={{ minHeight: "80vh", background: "rgb(248, 248, 248)" }}>

                    <div className="container pt-4" >
                        <MuiBreadCrumb breadcrumbs={breadcrumbs} />
                        <h1 style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#111" }}> Make Payment</h1>
                        <div className="row flex-md-row-reverse">
                        <div className="col-md-4 mb-2">
                                <div className="order_summary_card">
                                    <h6 className="sm_title">Order Details</h6>
                                    <hr className="normal" />
                                    <p>Price   <strong>${formatCurrency(total)}</strong></p>
                                    <p>Delivery charges   <small className="free">${shipping}</small></p>
                                    <p>Discount Price   <span>$0</span></p>
                                    <hr />
                                    <p> <strong>Total Amount</strong>  <strong>${formatCurrency(total + shipping)}</strong></p>
                                    <div className="saving_amount">
                                        <p> Your Total Saving amount on this order  </p>
                                        <strong className="free">$0</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="  col-md-8 mb-2">
                                <div className="common_box">
                                     {/* address */}
                               <AddressBookSection setDefaultAddress={setDefaultAddress} />
                                {/* summary */}
                                <div className=" pb-0">
                                    <div className="checkout_wraper">
                                        <div className="checkout_timeline">
                                            <div className="icon_wraper">
                                                <MuiCommonIcon name="summary" color="white" size="small" />
                                            </div>
                                            <div className="line"></div>
                                        </div>

                                        <div >
                                            <h6 className="checkout_title">Order summary</h6>
                                            <div className="py-4">
                                                {
                                                    cart.map((item, i) => (
                                                        <div key={item?._id} className="d-flex align-items-center mb-4 gap-4">
                                                            <div>
                                                                <Avatar
                                                                    variant="square"
                                                                    alt="Remy Sharp"
                                                                    src={item?.image}
                                                                    sx={{
                                                                        width: 100,
                                                                        height: 100,
                                                                        objectfit: "cover",
                                                                        padding: "1px",
                                                                    }}
                                                                />

                                                                <div
                                                                    style={{ minWidth: "60px", background: "white" }}
                                                                    className="d-flex justify-content-between align-items-center border border-1 p-1  rounded-1"
                                                                >
                                                                    <span
                                                                        style={{ cursor: "pointer" }}
                                                                        className="cursor-pointer"
                                                                        onClick={() => dispatch(incrementQuantity({ _id: item?._id, index: i }))}
                                                                    >
                                                                        <MuiCommonIcon name="plus" />
                                                                    </span>
                                                                    <span>{item?.purchaseQuantity || 0}</span>
                                                                    <span
                                                                        style={{ cursor: "pointer" }}
                                                                        className="cursor-pointer"
                                                                        onClick={() => dispatch(decrementQuantity({ _id: item?._id, index: i }))}
                                                                    >
                                                                        <MuiCommonIcon name="minus" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div >

                                                                <h5>{item?.name}</h5>
                                                                <h6 className="text-secondary">Seller: {item?.userId?.name}</h6>
                                                                <h6 className="mb-2 fs-4 fw-bold">{formatCurrency(item?.price)}</h6>
                                                            </div>

                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* payment */}
                                <div className=" pb-0">
                                    <div className="checkout_wraper">
                                        <div className="checkout_timeline">
                                            <div className="icon_wraper bg-secondary">
                                                <MuiCommonIcon name="payment" color="white" size="small" />
                                            </div>
                                            <div className="line hide"></div>
                                        </div>


                                        <div>
                                            <h6 className="checkout_title">Payment Details</h6>
                                            <div className="py-2">
                                                <FormControl>
                                                    <RadioGroup  
                                                      value={paymentType}
                                                       onChange={
                                                        (e)=>setPaymentType(e.target.value)
                                                       }
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group"
                                                    >
                                                        <FormControlLabel value="Cash On Delivery" control={<Radio size="small" sx={{
                                                            color: "#50A882",
                                                            '&.Mui-checked': {
                                                                color: "#50A882",
                                                            },
                                                        }} />} label={<span style={{ fontSize: '14px' }}>Cash On Delivery</span>} />
                                                        <FormControlLabel value="Menual Bkash" control={<Radio size="small" sx={{
                                                            color: "#50A882",
                                                            fontSize:"12px",
                                                            '&.Mui-checked': {
                                                                color: "#50A882",
                                                            },
                                                        }} />} label={<span style={{ fontSize: '14px' }}>Menual Bkash</span>} /> 
                                                        <FormControlLabel value="ssl-commerce" control={<Radio size="small" sx={{
                                                            color: "#50A882",
                                                            '&.Mui-checked': {
                                                                color: "#50A882",
                                                            },
                                                        }} />} label={<span style={{ fontSize: '14px' }}>SSL Commerze</span>} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Button 
                                
                                
                                onClick={async()=>
                                    
                                  {

                                    handleSubmit()
                                    return
                                    
                                  
                                }
                                }
                                sx={{
                                    background:"#50A882",
                                    fontSize:"14px",
                                    padding:"5px 40px"
                                }}  variant="contained">Payment Now</Button>
                                </div>
                            </div>
                           

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutPage;