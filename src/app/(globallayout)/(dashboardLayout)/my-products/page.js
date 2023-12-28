"use client"
import MuiModal from "@/components/ui/MuiModal";
import { useEffect, useState } from 'react'
import { Avatar,Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import CreateProduct from "./_create/CreateProduct";
import { useProductGetByUserIdQuery } from "@/redux/api/productApi";
import { getUserInfo } from "@/services/auth.service";
import moment from 'moment';
import axios from "axios";
const MyProducts = () => {
  const userInfo = getUserInfo()
  const { data } = useProductGetByUserIdQuery(undefined,{
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true
  }) 
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h5> Manage My products </h5>
      <div className="db_common_body">
        <Button
          onClick={() => setOpen(true)}
          sx={{ background: "#004DDA", fontSize: "12px" }}
          className="  d-block ms-auto"
          variant="contained"
          size="small"
        >
          Add Product
        </Button>

        {/* Product table start  */}
        <div style={{height:"500px",overflowY:"scroll"}} className="common_table">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>IMG</TableCell>
                  <TableCell>PRICE</TableCell>
                  <TableCell>QTY</TableCell>
                  <TableCell sx={{ width: "200px" }}>Color</TableCell>
                  <TableCell sx={{ width: "20px" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell component="td">{moment(item?.createdAt).format('DD-MMMM-YYYY')}</TableCell>
                    <TableCell component="td">{item?.name}</TableCell>
                    <TableCell component="td">
                    <Avatar
                            variant="square"
                            alt="Remy Sharp"
                            src={item?.image}
                            sx={{
                              width: 40,
                              height: 40,
                              border: "1px solid white",
                              padding: "1px",
                            }}
                          />
                    </TableCell>
                    <TableCell component="td">{item?.price} </TableCell>
                    <TableCell component="td">{item?.quantity}</TableCell>
                    <TableCell component="td"> 
                    <div className="d-flex gap-1">
                    {item?.colors?.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    width: 14,
                    height: 14,
                    background: item.toLowerCase(),
                    borderRadius: "50%",
                  }}
                />
              ))}
                       </div>
                    </TableCell>
                    <TableCell component="td">
                      <MuiCommonIcon size="small" color={"#F29188"} name={"trash"} />
                    </TableCell>


                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {/* Product table end    */}
        <MuiModal setIsOpen={setOpen} modalIsOpen={open}> <CreateProduct setOpen={setOpen} /></MuiModal>
      </div>
    </div>
  );
};

export default MyProducts;