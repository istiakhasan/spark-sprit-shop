"use client"
import MuiModal from "@/components/ui/MuiModal";
import { useEffect, useState } from 'react'
import { Avatar, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, TextField } from "@mui/material";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
// import CreateProduct from "./_create/CreateProduct";
import { useDeleteProductMutation, useProductGetByUserIdQuery } from "@/redux/api/productApi";
import { getUserInfo } from "@/services/auth.service";
import moment from 'moment';
import axios from "axios";
import { useDebounced } from "@/hook/useDebounced";
import { useOrderGetByUserIdQuery } from "@/redux/api/orderApi";
import ViewOrders from "./_create/ViewOrders";
const MyOrder = () => {
  const query = {}
  const [page, setPage] = useState('')
  const [search, setSearch] = useState('')
  const debounced = useDebounced({
    searchQuery: search,
    delay: 600,
  });
  query["page"] = page
  query["searchTerm"] = debounced
  const userInfo = getUserInfo()
  const { data } = useOrderGetByUserIdQuery(query, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })
  const [deleteProduct] = useDeleteProductMutation()
  const [open, setOpen] = useState(false)
  const [rowDto,setRowDto]=useState({})

  return (
    <div>
      <h5> Manage My Orders </h5>
      <div className="db_common_body">
        <div className="d-flex align-items-center justify-content-lg-between flex-wrap gap-2">
          <TextField
            inputProps={{ style: { fontSize: "12px", padding: "8px", width: "300px", outline: "none" } }}
            type={"text"}
            placeholder={"Search by transition id"}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            focused
            classes={{
              focused: 'custom-focused', // Apply a custom class for focused state
            }}
          />
          <Button
            
            sx={{ background: "#004DDA", fontSize: "12px" }}
            variant="contained"
            size="small"
          >
            Add Product
          </Button>
        </div>

        {/* Product table start  */}
        <div style={{ overflowY: "auto" }} className="common_table">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Transition Id</TableCell>
                  <TableCell>Shipping Price</TableCell>
                  <TableCell>Total Price</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell>Order Status</TableCell>
                  <TableCell sx={{ width: "20px" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell component="td">{moment(item?.createdAt).format('DD-MMMM-YYYY')}</TableCell>
                    <TableCell component="td">{item?.transition_id}</TableCell>
                    <TableCell component="td">{item?.shipping}</TableCell>
                    <TableCell component="td">{item?.totalPrice}</TableCell>
                    <TableCell component="td">{item?.paymentMethod} </TableCell>
                    <TableCell component="td">{item?.orderStatus}</TableCell>
                    <TableCell component="td">
                      <span
                        onClick={async () => {
                          // await deleteProduct({ id: item?._id })
                      setOpen(true)
                      setRowDto(item)
                        }}
                      ><MuiCommonIcon size="small"   /></span>
                    </TableCell>


                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="d-flex my-5  align-items-center justify-content-end">
          <Pagination
            variant="outlined" shape="rounded"
            onChange={(event, value) => {
              setPage(value)
            }}
            count={Math.ceil(data?.meta?.total / data?.meta?.limit)}
            size="small"
          />
        </div>
        {/* Product table end    */}
        <MuiModal setIsOpen={setOpen}  modalIsOpen={open}> <ViewOrders data={rowDto} setOpen={setOpen} /></MuiModal>
      </div>
    </div>
  );
};

export default MyOrder;