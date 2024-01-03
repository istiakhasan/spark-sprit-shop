"use client"
import MuiBreadCrumb from "@/components/ui/MuiBreadcrumb";
import { Avatar, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Link from "next/link";
import './checkout.css'
import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "@/common/utils";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import { decrementQuantity, incrementQuantity } from "@/redux/slice/cartSlice";

const CheckoutPage = () => {
    const { cart, wishList, total, shipping } = useSelector((state) => state.cartSlice);
    const dispatch = useDispatch()
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

    return (
        <div className="main_body_container">
            <div >
                <div className="pb-5" style={{ minHeight: "80vh", background: "rgb(248, 248, 248)" }}>

                    <div className="container pt-4" >
                        <MuiBreadCrumb breadcrumbs={breadcrumbs} />
                        <h1 style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#111" }}> Make Payment</h1>
                        <div className="row">
                            <div className="common_box col-md-8">
                                {/* address */}
                                <div className="">
                                    <div className="checkout_wraper">
                                        <div className="checkout_timeline">
                                            <div className="icon_wraper">
                                                <MuiCommonIcon color="white" name="location" size="small" />
                                            </div>
                                            <div className="line"></div>
                                        </div>
                                        <div>
                                            <h6 className="checkout_title">Delivery address</h6>
                                            <div className="row py-4">
                                                <div className="col-md-6">
                                                    <article className="del_address">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h6 className="mb-2">David</h6>
                                                            <small className="edit_btn"><MuiCommonIcon name="pen" size="20px" /> Edit</small>
                                                        </div>
                                                        <div>
                                                            <address className="mb-0">
                                                                124,rd cross, D S Croad, Kanakapura, Bangalore, Karnataka -560078
                                                            </address>
                                                            <p className="mb-0">Mobile No: 01306910346</p>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div className="col-md-6">
                                                    <article className="del_address">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h6 className="mb-2">David</h6>
                                                            <small className="edit_btn"><MuiCommonIcon name="pen" size="20px" /> Edit</small>
                                                        </div>
                                                        <div>
                                                            <address className="mb-0">
                                                                124,rd cross, D S Croad, Kanakapura, Bangalore, Karnataka -560078
                                                            </address>
                                                            <p className="mb-0">Mobile No: 01306910346</p>
                                                        </div>
                                                    </article>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="row-radio-buttons-group"
                                                    >
                                                        <FormControlLabel value="female" control={<Radio size="small" sx={{
                                                            color: "#50A882",
                                                            '&.Mui-checked': {
                                                                color: "#50A882",
                                                            },
                                                        }} />} label={<span style={{ fontSize: '14px' }}>Cash On Delivery</span>} />
                                                        <FormControlLabel value="male" control={<Radio size="small" sx={{
                                                            color: "#50A882",
                                                            fontSize:"12px",
                                                            '&.Mui-checked': {
                                                                color: "#50A882",
                                                            },
                                                        }} />} label={<span style={{ fontSize: '14px' }}>Menual Bkash</span>} /> 
                                                        <FormControlLabel value="other" control={<Radio size="small" sx={{
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
                            </div>
                            <div className="col-md-4">
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

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutPage;