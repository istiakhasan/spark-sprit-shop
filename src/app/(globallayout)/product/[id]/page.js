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
import { useParams } from "next/navigation";
async function getData(id) {
  const res = await fetch(`http://localhost:5000/api/v1/product/${id}`)
  const data=res.json()
  
  return data
}
const ProductDetails = async(props) => {
  const data = await getData(props?.params?.id) 
  const productData=data?.data

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
              {productData?.name}
            </h1>
            <ProductImgSlider  data={productData}/>
          </div>
        </div>
      </div>
      <Details data={productData} />

      <MuiTabs
        tabLabel={[
          {
            label: (
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                DESCRIPTION
              </span>
            ),
            content: <Description data={productData} />,
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
