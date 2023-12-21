"use client"
import MuiBreadCrumb from "@/components/ui/MuiBreadcrumb";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import { decrementQuantity, incrementQuantity } from "@/redux/slice/cartSlice";
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {  useDispatch, useSelector } from "react-redux";
const CartDetails = () => {
  const { cart, wishList,total,shipping } = useSelector((state) => state.cartSlice);
  const dispatch=useDispatch()
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
      Cart Details
    </Typography>,
  ];
  return (
    <div style={{ minHeight: "800px" }} className="main_body_container ">
      <div>
        <div className="container">
          <div className="pt-4">
            <MuiBreadCrumb breadcrumbs={breadcrumbs} />
            <h1
              style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#111" }}
            >
              Cart page
            </h1>
          </div>
          <div className="cart_table">
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>PRODUCT</TableCell>
                    <TableCell>PRICE</TableCell>
                    <TableCell>QUANTITY</TableCell>
                    <TableCell sx={{ width: "200px" }}>SUBTOTAL</TableCell>
                    <TableCell sx={{ width: "20px" }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item,i) => (
                    <TableRow key={item}>
                      <TableCell component="td">
                        <div className="d-flex align-items-center gap-3">
                          <Avatar
                            variant="square"
                            alt="Remy Sharp"
                            src={item?.image}
                            sx={{
                              width: 56,
                              height: 56,
                              border: "1px solid white",
                              padding: "1px",
                            }}
                          />
                          <span style={{ fontWeight: "500", color: "#111" }}>
                            {" "}
                            {item?.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell component="td" scope="row">
                        <strong> ${item?.price}</strong>
                      </TableCell>
                      <TableCell component="td" scope="row">
                        <div
                          style={{ minWidth: "60px", background: "white" }}
                          className="d-flex me-4 justify-content-between align-items-center border border-1 p-1  rounded-1"
                        >
                          <span
                            style={{ cursor: "pointer" }}
                            className="cursor-pointer" 
                            onClick={()=>dispatch(incrementQuantity({_id:item?._id,index:i}))}
                          >
                            <MuiCommonIcon name="plus" />
                          </span>
                          <span>{item?.qurchaseQuantity || 0}</span>
                          <span
                            style={{ cursor: "pointer" }}
                            className="cursor-pointer"
                            onClick={()=>dispatch(decrementQuantity({_id:item?._id,index:i}))}
                          >
                            <MuiCommonIcon name="minus" />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell component="td" scope="row">
                        <strong> ${(item?.price*item?.qurchaseQuantity).toFixed(2)}</strong>
                      </TableCell>
                      <TableCell align="right" component="td" scope="row">
                        <MuiCommonIcon color="#004dda" name="trash" />
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell
                      className="bg-white"
                      colSpan={3}
                      component={"td"}
                    ></TableCell>
                    <TableCell className="bg-white" component={"td"}>
                      <strong> Subtotal</strong>
                    </TableCell>
                    <TableCell
                      align="right"
                      className="bg-white"
                      component={"td"}
                    >
                      <strong> {total.toFixed(2)}</strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="bg-white"
                      colSpan={3}
                      component={"td"}
                    ></TableCell>
                    <TableCell className="bg-white" component={"td"}>
                      <strong> Shipping</strong>
                    </TableCell>
                    <TableCell
                      align="right"
                      className="bg-white"
                      component={"td"}
                    >
                      <strong> {shipping}</strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="bg-white"
                      colSpan={3}
                      component={"td"}
                    ></TableCell>
                    <TableCell className="bg-white" component={"td"}>
                      <strong style={{ color: "#FF5353", fontSize: "24px" }}>
                        {" "}
                        Total
                      </strong>
                    </TableCell>
                    <TableCell
                      align="right"
                      className="bg-white"
                      component={"td"}
                    >
                      <strong style={{ color: "#FF5353", fontSize: "24px" }}>
                        {" "}
                       {(total+shipping).toFixed(3)}
                      </strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell colSpan={2}>
                      <Button
                        sx={{ background: "#004DDA", fontSize: "12px" }}
                        className=" px-2 py-2 d-block w-100"
                        variant="contained"
                        onClick={() => router.push("/checkout")}
                      >
                        Proceed To Checkout
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
