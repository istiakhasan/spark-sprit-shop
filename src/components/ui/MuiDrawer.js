"use client";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from "react-redux";
import { addToCart,clearWishList } from "@/redux/slice/cartSlice";
import ProductCart from "../home/ProductCart";
import { useGetTotalRatingQuery } from '@/redux/api/reviewApi';
import { Rating, Button } from "@mui/material";

export default function MuiDrawer({ open, setOpen, id }) {
  const { cart, wishList, total, shipping } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <div className="p-1" style={{ width: "250px" }}>
        <Button
          onClick={() => dispatch(clearWishList())}
          sx={{ fontSize: "10px", padding: "3px 4px", display: "block", marginLeft: "auto", fontWeight: "bold", border: "1px solid white", marginBottom: "10px" }}
          variant="outlined"
          size="small"
        >
          Clear All
        </Button>
        {wishList?.map((item, i) => (
          <>
            <div key={i}>
              <div style={{ cursor: "pointer" }} className="d-flex gap-2 align-items-start">
                <img style={{ width: "50px", height: "50px" }} src={item?.image} />
                <span style={{ fontSize: "14px" }}>{item?.name}</span>
              </div>
              <div className="d-flex justify-content-between align-items-end">
                <Rating
                  name="size-small"
                  readOnly
                  value={5}
                  precision={0.5}
                  size="small"
                />
                <Button
                  onClick={() => dispatch(addToCart(item))}
                  sx={{ background: "#004DDA", fontSize: "10px", padding: "3px 4px" }}
                  variant="contained"
                  size="small"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <Divider className="my-2" />
          </>
        ))}
      </div>
    </SwipeableDrawer>
  );
}
