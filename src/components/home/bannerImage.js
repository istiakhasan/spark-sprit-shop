/* eslint-disable @next/next/no-img-element */
import homeStyle from "./home.module.css";
import MuiCommonIcon from "../ui/MuiCommonIcon";
const BannerImage = () => {
  return (
    <>
      <div className={homeStyle.banner_img}>
        <img
          src="https://www.ansonika.com/allaia/img/bg_cat_shoes.jpg"
          alt=""
        />
      </div>
  
    </>
  );
};

export default BannerImage;
