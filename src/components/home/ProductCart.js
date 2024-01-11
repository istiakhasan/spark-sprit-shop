import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MuiCommonIcon from "../ui/MuiCommonIcon";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList } from "@/redux/slice/cartSlice";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/common/utils";

const ProductCart = ({ item }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cartSlice);
  const router = useRouter()
  return (
    <>
      <Card className="product_card">
        <CardMedia
          onClick={() => router.push(`/product/${item?._id}`)}
          className="product_card_img"
          component="img"
          sx={{ boxShadow: "none" }}
          image={item?.image}
          alt="green iguana"
        />

        <span className={`status ${item?.status === "hot" ? "red" : "green"}  off text-uppercase`}>{item?.status}</span>
        <div className="card_hover_icon">
          <span className={`${cart.some(abc => abc?._id === item?._id) ? 'text-danger' : ""}`} onClick={() => dispatch(addToCart(item))}><MuiCommonIcon name={"cart"} /></span>
          <span onClick={() => dispatch(addToWishList(item))}><MuiCommonIcon name={"heart"} /></span>

        </div>
      </Card>
      <div className="my-4 text-center">
        <h3
          className="mb-0"
          style={{
            fontSize: "0.875rem",
            color: "#444",
            fontWeight: 500,
          }}
        >
          {item?.name}
        </h3>
        <p className="mb-0">
          <span
            style={{
              color: "#004dda",
              fontSize: "16px",
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
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            {item?.previous_price}
          </del>
        </p>

      </div>
    </>
  );
};

export default ProductCart;
