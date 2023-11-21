import { Box, Button, Card, Checkbox, FormControlLabel, Pagination } from "@mui/material";
import MuiAccordian from "../ui/MuiAccordian";
import ProductCart from "./ProductCart";
const ProductSection = () => {
  return (
    <div  className="d-lg-flex align-items-start gap-3">
      <Box className="d-none d-lg-block" style={{position:"sticky",top:"60px",zIndex:"8"}}  sx={{ width: 300,margin:"0 auto" }}>
        <MuiAccordian heading={"Categories"}>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Men" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Women" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Running" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Trending" />
            12
          </div>
        </MuiAccordian>
        <MuiAccordian heading={"Color"}>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Men" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Women" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Running" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Trending" />
            12
          </div>
        </MuiAccordian>
        <MuiAccordian heading={"Brands"}>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Men" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Women" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Running" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Trending" />
            12
          </div>
        </MuiAccordian>
        <MuiAccordian heading={"Price"}>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Men" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Women" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Running" />
            12
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <FormControlLabel control={<Checkbox />} label="Trending" />
            12
          </div>
        </MuiAccordian>
        <div className="py-3 d-flex gap-3">
          <Button variant="contained" size="small" color="info">
            Filter
          </Button>
          <Button variant="outlined" size="small" color="error">
            Reset
          </Button>
        </div>
      </Box>
      <div style={{ flex: 1 }}>
        <div className="row">
          {[...Array(9).keys()].map((item, i) => (
            <div className="col-md-4 col-6" key={i}>
              <ProductCart />
            </div>
          ))}
        </div>
       <div className="d-flex my-5 align-items-center justify-content-center">
       <Pagination   onChange={(event,value)=>{
            console.log(value);
        }} count={10} size="large" />
       </div>
      </div>
    </div>
  );
};

export default ProductSection;
