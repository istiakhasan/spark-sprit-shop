import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MuiCommonIcon from "../ui/MuiCommonIcon";
import { useDispatch } from "react-redux";
import { addToCart, addToWishList } from "@/redux/slice/cartSlice";
import { useRouter } from "next/navigation";

const ProductCart = () => {
  const dispatch=useDispatch()
  const router=useRouter()
  return (
    <>
      <Card  className="product_card">
      
          <CardMedia 
          onClick={()=>router.push(`/product/${1}`)}
            className="product_card_img"
            component="img"
            sx={{ boxShadow: "none" }}
            image="https://www.ansonika.com/allaia/img/products/shoes/8.jpg"
            alt="green iguana"
          />
      
        <span className="status off">Hot</span>
        <div className="card_hover_icon">
          <span onClick={()=>dispatch(addToCart({abc:"adsfasd"}))}><MuiCommonIcon name={"cart"}/></span>
          <span onClick={()=>dispatch(addToWishList({abc:"adsfasd"}))}><MuiCommonIcon name={"heart"}/></span>

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
          Armor Air x Fear
        </h3>
        <p className="mb-0">
          <span
            style={{
              color: "#004dda",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            $48.00
          </span>{" "}
          <del
            style={{
              color: "#999",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            $60.00
          </del>
        </p>
      </div>
    </>
  );
};

export default ProductCart;
