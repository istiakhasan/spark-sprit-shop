/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import ProductSection from "@/components/home/ProductSection";
import BannerImage from "@/components/home/bannerImage";
import SearchBar from "@/components/home/searchBar";
import homeStyle from "../../../components/home/home.module.css";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import Footer from "@/components/shared/Footer"; 
import { getBaseUrl } from "@/helpers/config/envConfig";
   
const Home = () => {
  console.log(getBaseUrl(),"base url");
  return (
    <>
      <div className="main_body_container">
        <header>
          <BannerImage />
        </header>
        <div className={`${homeStyle.sort_box_wrapper} `}>
          <div className={`container ${homeStyle.sort_box}`}>
            <p className="mb-0 sort_p_title d-flex align-items-center gap-2">
              {" "}
              <MuiCommonIcon size={"medium"} name="arrowup" /> Sort By
              Popularity{" "}
            </p>
            <div className="d-flex gap-2">
              <MuiCommonIcon size={"medium"} name="gridrowcol" />
              <MuiCommonIcon size={"medium"} name="gridrow" />
            </div>
          </div>
        </div>
        <main className="container my-4">
          <ProductSection />
        </main>
      </div>
    </>
  );
};
export default Home;
