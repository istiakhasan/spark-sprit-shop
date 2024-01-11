"use client"
import SparkFileUpload from '@/components/form/SparkFileUpload';
import SparkForm from '@/components/form/SparkForm';
import SparkFormInput from '@/components/form/SparkFormInput';
import SparkFormMultiSelect from '@/components/form/SparkFormMultiSelect';
import SparkFormSelect from '@/components/form/SparkFormSelect';
import { useGetAllBrandQuery } from '@/redux/api/brandApi';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import { getUserInfo } from '@/services/auth.service';
import { Avatar, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, TextField } from "@mui/material";
import { modifyDataForSelect } from './utils';
import { useCreateProductMutation } from '@/redux/api/productApi';
import { useState } from 'react';
import toast from 'react-hot-toast';
import './style.css'
import MuiCommonIcon from '@/components/ui/MuiCommonIcon';

const ViewOrders = ({setOpen,data}) => {
console.log(data,"data");
  return (
    <div className='mt-4'>
     <div style={{ overflowY: "auto" }} className="common_table">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Img</TableCell>

                  <TableCell>Qty</TableCell>
                  <TableCell sx={{textAlign:"end"}}>Price</TableCell>
                  <TableCell sx={{textAlign:"end"}}>Item Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.products?.map((item, i) => (
                  <TableRow key={i}>
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
                    <TableCell component="td">{item?.purchaseQuantity}</TableCell>
                    <TableCell sx={{textAlign:"end"}} component="td">{item?.price}</TableCell>
                    <TableCell sx={{textAlign:"end"}} component="td">{item?.price * item?.purchaseQuantity}</TableCell>
                  </TableRow>
                ))}
                 <TableRow >
                    <TableCell colSpan={4} sx={{textAlign:"end"}} component="td"><strong>Sub Total</strong></TableCell>
               
                    <TableCell sx={{textAlign:"end"}} component="td"><strong>{data?.products?.reduce((acc,curr)=>acc+(curr?.price * curr?.purchaseQuantity),0)}</strong></TableCell>
                  </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  );
};

export default ViewOrders;