import Link from "next/link";
import MuiBreadCrumb from "./../../../../components/ui/MuiBreadcrumb";
import {
  Avatar,
  Button,
  FormControl,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import ProductImgSlider from "@/components/slider/ProductImgSlider";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import MuiTabs from "@/components/ui/MuiTabs";
import Description from "./_review/Description";
import Reviews from "./_review/Reviews";
import Details from "./_review/Details";
import RelatedProduct from "./_review/RelatedProduct";
const ProductDetails = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      style={{ fontSize: "12px" }}
    >
      Home
    </Link>,
    <Typography sx={{ fontSize: "12px", color: "gray" }} key="3">
      Product Details
    </Typography>,
  ];

  return (
    <div className="main_body_container">
      <div style={{ background: "#F8F8F8" }} className="pt-4">
        <div className="container ">
          <div className="">
            <MuiBreadCrumb breadcrumbs={breadcrumbs} />
            <h1
              style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#111" }}
            >
              Armor Air X Fear
            </h1>
            <ProductImgSlider />
          </div>
        </div>
      </div>
      <Details />

      <MuiTabs
        tabLabel={[
          {
            label: (
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                DESCRIPTION
              </span>
            ),
            content: <Description />,
          },
          {
            label: (
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                REVIEWS
              </span>
            ),
            content: <Reviews />,
          },
        ]}
      />
      <RelatedProduct />
    </div>
  );
};

export default ProductDetails;
