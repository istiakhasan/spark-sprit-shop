"use client"
import {
    Box,
    Button,
    Card,
    Checkbox,
    FormControlLabel,
    Pagination,
    Skeleton,
    Slider,
  } from "@mui/material";
export default  function GridViewLoading(){
    return (
        <>
              {[...Array(9).keys()]?.map((item, i) => (
                <div className="col-12" key={i}>
                  <div className="row">
                    <div className="col-md-4">
                    <Skeleton
                    sx={{
                      height: "200px",
                      width: "100",
                      transform: "scale(1)",
                      marginBottom: "10px",
                    }}
                    animation="wave"
                    />
                     </div>
                    <div className="col-md-8">
                    <Skeleton
                    sx={{
                      // height: "200px",
                      width: "120px",
                      transform: "scale(1)",
                      marginBottom: "10px",
                    }}
                    animation="wave"
                    />
                    <Skeleton
                    sx={{
                      // height: "200px",
                       width: "150px",
                      transform: "scale(1)",
                      marginBottom: "10px",
                    }}
                    animation="wave"
                    />
                    <Skeleton
                    sx={{
                      // height: "200px",
                      // width: "100",
                      transform: "scale(1)",
                      marginBottom: "10px",
                    }}
                    animation="wave"
                    />
                    <Skeleton
                    sx={{
                      // height: "200px",
                       width: "60%",
                      transform: "scale(1)",
                      marginBottom: "10px",
                    }}
                    animation="wave"
                    />
                    <div className="w-50 d-flex gap-2">
                      
                    <Skeleton
                    sx={{
                      // height: "200px",
                      width: "30%",
                      transform: "scale(1)",
                      marginBottom: "10px",
                    }}
                    animation="wave"
                    />
                    <Skeleton
                    sx={{
                      // height: "200px",
                      width: "30%",
                      transform: "scale(1)",
                      marginBottom: "10px",
                    }}
                    animation="wave"
                    />
                    </div>
                     </div>
                 
                    </div>
                </div>
              ))}
            </>
    )
}