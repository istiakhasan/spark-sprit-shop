import MuiCommonIcon from '@/components/ui/MuiCommonIcon';
import { Button, FormControl, MenuItem, Rating, Select, Typography } from '@mui/material';
import React from 'react';

const Details = () => {
    return (
        <div className="container my-5 ">
        <div className="row">
          <div className="col-md-6">
            <p className="d-flex align-items-center text-secondary gap-3 fst-italic">
              <Rating name="read-only" value={4} readOnly />4 reviews
            </p>

            <p style={{ fontSize: "16px", color: "#444444" }}>
              <strong className="d-block">SKU: MTKRY-001</strong>
              Lorem ipsum dolor sit amet, his no adipisci pericula
              conclusionemque. Qui labore salutandi ex, vivendum argumentum
              mediocritatem vis eu, viris tritani per id. At iudicabit maluisset
              vis, dicant diceret pri cu. Cum at rebum vulputate forensibus,
              eruditi principes ad vel, pro denique recusabo at. Ubique nominavi
              delicata sit cu, quo no reque insolens suscipiantur.
            </p>
          </div>
          <div className="col-md-6 px-3  ps-lg-5">
            <div
              className="d-flex justify-content-between ms-lg-5 ps-lg-5 mb-2"
              style={{ fontSize: "18px", color: "#444444" }}
            >
              <p className="mb-0">COLOR </p>
              <div className="d-flex gap-2 ">
                <Typography
                  sx={{
                    width: 24,
                    height: 24,
                    background: "red",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{
                    width: 24,
                    height: 24,
                    background: "red",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{
                    width: 24,
                    height: 24,
                    background: "red",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center ms-lg-5 ps-lg-5  mb-2"
              style={{ fontSize: "18px", color: "#444444" }}
            >
              <p className="mb-0">SIZE - Size Guide </p>
              <div className="d-flex gap-2 ">
                <FormControl sx={{ m: 1, minWidth: 120,margin:0 }}>
                  <Select 
                  sx={{height:"40px"}}
                    value={10}
                    size="small"
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={10}>Small (s)</MenuItem>
                    <MenuItem value={20}>M</MenuItem>
                    <MenuItem value={30}>L</MenuItem>
                    <MenuItem value={34}>XL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center ms-lg-5 ps-lg-5 mb-2"
              style={{ fontSize: "18px", color: "#444444" }}
            >
              <p className="mb-0">QUANTITY </p>
              <div style={{minWidth:"120px"}} className="d-flex justify-content-between align-items-center border border-1 p-1  rounded-1">
               <span style={{cursor:"pointer"}} className="cursor-pointer"><MuiCommonIcon name="plus" /></span>
               <span>0</span>
               <span style={{cursor:"pointer"}} className="cursor-pointer"><MuiCommonIcon name="minus" /></span>
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center ms-lg-5 ps-lg-5 mb-2"
              style={{ fontSize: "18px", color: "#444444" }}
            >
              <p style={{color:"#004DDA",fontSize:"1.5rem",fontWeight:"600"}} className="mb-0">$148.00  <del style={{fontWeight:"500"}} className="text-secondary fst-italic">$160.00</del></p>
              <div style={{width:"120px"}} className="">
               <Button sx={{background:"#004DDA",fontSize:"12px"}} className=" px-2 py-2 w-100 " variant="contained">ADD TO CART</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;