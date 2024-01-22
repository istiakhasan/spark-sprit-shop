/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import BannerImage from "@/components/home/bannerImage";
import homeStyle from "../../../../components/home/home.module.css";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { useDispatch, useSelector } from "react-redux";
import { cardView, gridView } from "@/redux/slice/gridViewSlice";
import {  useSearchParams } from "next/navigation";
import  MuiCommonIcon  from '@/components/ui/MuiCommonIcon';
import ProductSection from './../../../../components/home/ProductSection';
const FilterByCategory = () => {
  const { isGrid } = useSelector((state) => state.gridSlice);
  const dispatch = useDispatch()
  const search=useSearchParams()
  const forWrodPath=search.get('category')
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
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(cardView())
                }}><MuiCommonIcon size={"medium"} name="gridrowcol" /></span>
              <span
                style={{ cursor: "pointer" }}

                onClick={() => {
                  dispatch(gridView())
                }}
              ><MuiCommonIcon size={"medium"} name="gridrow" /> </span>
            </div>
          </div>
        </div>
        <main className="container my-4">
          <ProductSection isFormCategory={true} catString={forWrodPath} />
        </main>
      </div>
    </>
  );
};
export default FilterByCategory;
