/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import MuiCommonIcon from "../ui/MuiCommonIcon";
import homeStyle from "./home.module.css";
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const SearchBar = () => {
  const { cart, wishList } = useSelector((state) => state.cartSlice);
  const [isSticky, setIsSticky] = useState(false);
  const router=useRouter()
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{ boxShadow: "0 20px 20px -20px rgba(0,0,0,0.25)" }}
      className={`sticky_searchbar py-1 ${isSticky ? "sort_bg " : "bg-white"}`}
    >
      <div className="container  d-flex align-items-center justify-content-between my-2">
        <div className={`${homeStyle.categories} d-flex align-items-center`}>
          <MuiCommonIcon color={isSticky ? "white" : ""} name={"menu"} />
          <span className={`ms-2 ${isSticky ? "text-white" : ""}`}>
            Categories
          </span>
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
              <StyledBadge color="error">
                <MuiCommonIcon
                  color={isSticky ? "white" : ""}
                  size={"medium"}
                  name={"user"}
                />{" "}
              </StyledBadge>
            </IconButton>{" "}
          </span>
          <span className="">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={wishList.length} color="error">
                <MuiCommonIcon
                  color={isSticky ? "white" : ""}
                  size={"medium"}
                  name={"heart"}
                />
              </StyledBadge>
            </IconButton>{" "}
          </span>
          <span className="cart_icon">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart.length} color="error">
                <MuiCommonIcon
                  color={isSticky ? "white" : ""}
                  size={"medium"}
                  name={"cart"}
                />
              </StyledBadge>
            </IconButton>{" "}
            <div className="cart_hover_division">
              <div className="d-flex align-items-center justify-content-between  gap-3">
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src="https://www.ansonika.com/allaia/img/products/shoes/1.jpg"
                  sx={{
                    width: 56,
                    height: 56,
                    border: "1px solid white",
                    padding: "1px",
                  }}
                />
                <div>
                  <span style={{ fontWeight: "500", color: "#111" }}>
                    {" "}
                    Armor Air x Fear{" "}
                  </span>
                  <strong className="d-block">$ 140.00</strong>
                </div>
                <MuiCommonIcon size={"small"} name={"trash"} color={"red"} />
              </div>
              <Divider className="my-2" />
              <div className="d-flex align-items-center justify-content-between  gap-3">
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src="https://www.ansonika.com/allaia/img/products/shoes/1.jpg"
                  sx={{
                    width: 56,
                    height: 56,
                    border: "1px solid white",
                    padding: "1px",
                  }}
                />
                <div>
                  <span style={{ fontWeight: "500", color: "#111" }}>
                    {" "}
                    Armor Air x Fear{" "}
                  </span>
                  <strong className="d-block">$ 140.00</strong>
                </div>
                <MuiCommonIcon size={"small"} name={"trash"} color={"red"} />
              </div>

              <Divider className="my-2" />
                <Button
                  sx={{ background: "#004DDA", fontSize: "12px" }}
                  className=" px-2 py-2 d-block w-100"
                  variant="contained"
                  onClick={() => router.push("/home/cart")}
                >
                  View Cart
                </Button>
              
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
