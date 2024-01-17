"use client"
import MuiModal from "@/components/ui/MuiModal";
import { useEffect, useState } from 'react'
import { Avatar, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, TextField } from "@mui/material";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import CreateBlogCategory from "./_component/CreateBlog";
import { useDeleteProductMutation, useProductGetByUserIdQuery } from "@/redux/api/productApi";
import { getUserInfo } from "@/services/auth.service";
import moment from 'moment';
import axios from "axios";
import { useDebounced } from "@/hook/useDebounced";
import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import CreateBlog from "./_component/CreateBlog";
const ManageBlog = () => {
  const query = {}
  const [page, setPage] = useState('')
  const [search, setSearch] = useState('')
  const debounced = useDebounced({
    searchQuery: search,
    delay: 600,
  });
  const userInfo = getUserInfo()
  query["page"] = page
  query["searchTerm"] = debounced
  const { data } = useGetAllBlogsQuery(query, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })
  const [deleteProduct] = useDeleteProductMutation()
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [rowDto,setRowDto]=useState({})

  return (
    <div>
      <h5>Manage Blog</h5>
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
            onClick={() => setOpen(true)}
            sx={{ background: "#004DDA", fontSize: "12px" }}
            variant="contained"
            size="small"
          >
            Create
          </Button>
        </div>

        {/* Product table start  */}
        <div style={{ overflowY: "auto" }} className="common_table">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell sx={{width:"300px"}}>Description</TableCell>
                  <TableCell sx={{ width: "20px" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell component="td">{moment(item?.createdAt).format('DD-MMMM-YYYY')}</TableCell>
                    <TableCell component="td">{item?.title}</TableCell>
                    <TableCell component="td"><Avatar
                        variant="square"
                        alt="Remy Sharp"
                        src={item?.image}
                        sx={{
                          width: 40,
                          height: 40,
                          border: "1px solid white",
                          padding: "1px",
                        }}
                      /></TableCell>
                    <TableCell component="td">{item?.description?.length>200?`${item?.description?.slice(0,200)}...`:item?.description}</TableCell>
                    <TableCell component="td">
                      <span
                        onClick={async () => {
                    // await deleteProduct({ id: item?._id })
                    setOpenEdit(true)
                      setRowDto(item)
                        }}
                      ><MuiCommonIcon size="small" name="pen"   /></span>
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
        {/* create category */}
        <MuiModal width="550px"  setIsOpen={setOpen}  modalIsOpen={open}> <CreateBlog  setOpen={setOpen} /></MuiModal>
        {/* Edit category */}
        <MuiModal width="550px"  setIsOpen={setOpenEdit}  modalIsOpen={openEdit}> <CreateBlog rowDto={rowDto} setOpen={setOpenEdit} /></MuiModal>
      </div>
    </div>
  );
};

export default ManageBlog;