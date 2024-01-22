import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MuiCommonIcon from "../ui/MuiCommonIcon";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import { formatCurrency } from "@/common/utils";
import {  Rating,Button } from "@mui/material";
import { useGetTotalRatingQuery } from '@/redux/api/reviewApi';
import { addToCart, addToWishList } from "@/redux/slice/cartSlice";
const ProductCardGridView = ({ item }) => {
  const dispatch = useDispatch()
  const { data:reviewData ,isLoading} = useGetTotalRatingQuery({id:item?._id},{
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
  })
  const totalRating=reviewData?.data[0]?.rating 
  const averageRating=(totalRating/reviewData?.data[0]?.totalReviewer).toFixed(2)
  const { cart } = useSelector((state) => state.cartSlice);
  const router = useRouter()
  return (
    <div className="product_card_Contariner_wraper">
      <div className="product_card_grid_view">
        <img
        //   
          className="product_card_img_grid_view"
          src={item?.image}
          alt="green iguana"
        />

        <span className={`status ${item?.status === "hot" ? "red" : "green"}  off text-uppercase`}>{item?.status}</span>
      </div>
      <div className="product_description_wraper">
       <Rating
                      name="size-small"
                      readOnly
                      value={averageRating}
                      precision={0.5}
                      size="small"
                    />
        <h3
        onClick={() => router.push(`/product/${item?._id}`)}
          className="mb-0 product_grid_view_title"
          style={{
            fontSize: "1.175rem",
            color: "#444",
          }}
        >
          {item?.name}
        </h3>
        <p style={{color:"#5C5E5C"}} className="mt-2 mb-2">{item?.description?.length>140?`${item?.description?.slice(0,140)}...`:item?.description} </p>
        <p className="mb-2">
          <span
            style={{
              color: "#004dda",
              fontSize: "1.3rem",
              fontWeight: 500,
            }}
          >
            {formatCurrency(item?.price)}
          </span>{" "}
          <span
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            ({item?.quantity})
          </span>{" "}
          <del
            style={{
              color: "#999",
              fontSize: "1.3rem",
              fontWeight: 500,
            }}
          >
            {item?.previous_price}
          </del>
        </p>
        <div>
        <Button
            onClick={() => dispatch(addToCart(item))}
            sx={{ background: "#004DDA", fontSize: "14px",marginRight:"10px" }}
            variant="contained"
            size="small"
          >
            Add To Cart
          </Button>
          <span 
           className="grid_view_hover_hover"
          style={{
            background:"#f0f0f0",
            padding:"5px 10px",
            borderRadius:"5px",
            cursor:"pointer"
          }}
          
          onClick={() => dispatch(addToWishList(item))}><MuiCommonIcon name={"heart"} /></span>
      </div>
      </div>
    </div>
  );
};

export default ProductCardGridView;
