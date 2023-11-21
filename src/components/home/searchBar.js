/* eslint-disable @next/next/no-img-element */
import React from "react";
import MuiCommonIcon from "../ui/MuiCommonIcon";
import homeStyle from "./home.module.css";
import { FormControl, FormHelperText, InputAdornment } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const SearchBar = () => {
  const { cart,wishList } = useSelector((state) => state.cartSlice);
  return (
    <div className="container d-flex align-items-center justify-content-between my-2">
      <div className={`${homeStyle.categories} d-flex align-items-center`}>
        <MuiCommonIcon name={"menu"} />
        <span className="ms-2">Categories</span>
      </div>
      <FormControl
        className="d-none d-lg-flex abc "
        size="small"
        sx={{ width: "100%", maxWidth: "500px", padding: 0 }}
        variant="outlined"
      >
        <OutlinedInput
          className="search_input"
          size="small"
          id="outlined-adornment-weight"
          sx={{ fontSize: "14px", color: "gray" }}
          placeholder="Search over 10,000 products"
          endAdornment={
            <InputAdornment position="end">
              <MuiCommonIcon size={"small"} name={"search"} />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
      <div style={{ whiteSpace: "nowrap" }}>
        <span className="">
          <IconButton aria-label="cart">
            <StyledBadge  color="error">
            <MuiCommonIcon size={"medium"} name={"user"} />{" "}
            </StyledBadge>
          </IconButton>{" "}
        </span>
        <span className="">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={wishList.length} color="error">
              <MuiCommonIcon size={"medium"} name={"heart"} />
            </StyledBadge>
          </IconButton>{" "}
        </span>
        <span className="">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="error">
              <MuiCommonIcon size={"medium"} name={"cart"} />
            </StyledBadge>
          </IconButton>{" "}
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
