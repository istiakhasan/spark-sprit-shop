"use client"
import MuiModal from "@/components/ui/MuiModal";
import { useEffect, useState } from 'react'
import { Avatar, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, TextField } from "@mui/material";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import CreateProduct from "./_create/CreateProduct";
import { useDeleteProductMutation, useProductGetByUserIdQuery } from "@/redux/api/productApi";
import { getUserInfo } from "@/services/auth.service";
import moment from 'moment';
import axios from "axios";
import { useDebounced } from "@/hook/useDebounced";
const MyProducts = () => {
  const query = {}
  const [page, setPage] = useState('')
  const [rowDto,setRowDto]=useState({})
  const [search, setSearch] = useState('')
  const debounced = useDebounced({
    searchQuery: search,
    delay: 600,
  });
  query["page"] = page
  query["searchTerm"] = debounced
  const userInfo = getUserInfo()
  const { data } = useProductGetByUserIdQuery(query, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })
  const [deleteProduct] = useDeleteProductMutation()
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  return (
    <div>
      <h5> Manage My products </h5>
      <div className="db_common_body">
        <div className="d-flex align-items-center justify-content-lg-between flex-wrap gap-2">
          <TextField
            inputProps={{ style: { fontSize: "12px", padding: "8px", width: "300px", outline: "none" } }}
            type={"text"}
            placeholder={"Search by product"}
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
            onClick={() => setOpen(true)}
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
                  <TableCell sx={{width:"300px"}}>Name</TableCell>
                  <TableCell>IMG</TableCell>
                  <TableCell>PRICE</TableCell>
                  <TableCell>QTY</TableCell>
                  <TableCell sx={{ width: "200px" }}>Color</TableCell>
                  <TableCell sx={{ width: "20px",textAlign:"end" }}>Action</TableCell>
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
                     <div  className="d-flex gap-1"> 

                     <span
                       onClick={() =>{
                        setRowDto(item)
                        setOpenEdit(true)
                      
                      }}
                      ><MuiCommonIcon size="small" color={"#0000F7"} name={"pen"} /></span>
                      <span
                        onClick={async () => {
                          await deleteProduct({ id: item?._id })
                        }}
                      ><MuiCommonIcon size="small" color={"#F29188"} name={"trash"} /></span>
                     </div>
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
        <MuiModal setIsOpen={setOpen} modalIsOpen={open}> <CreateProduct  setOpen={setOpen} /></MuiModal>
        <MuiModal setIsOpen={setOpenEdit} modalIsOpen={openEdit}> <CreateProduct rowDto={rowDto} setOpen={setOpenEdit} /></MuiModal>
      </div>
    </div>
  );
};

export default MyProducts;