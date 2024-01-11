"use client";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Pagination,
  Skeleton,
  Slider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import MuiAccordian from "../ui/MuiAccordian";
import ProductCart from "./ProductCart";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  filterByBrands,
  filterByCategory,
  filterByColors,
  filterByMaxPrice,
  filterByMinPrice,
  resetQuery,
} from "@/redux/slice/querySlice";
import SparkForm from "@/components/form/SparkForm";
import { useDebounced } from "@/hook/useDebounced";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
const ProductSection = () => {
  const dispatch = useDispatch();
  const {data:cateGoryData}=useGetAllCategoryQuery(undefined)
  const query = useSelector((state) => state.querySlice);
  const { searchTerm: keyword, ...modifyQuery } = query;
  const debounced = useDebounced({
    searchQuery: keyword,
    delay: 600,
  });
  const { data, isLoading } = useGetAllProductsQuery(
    { ...modifyQuery, searchTerm: debounced },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );
  const productData = data?.data;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let category = [];
    const categoryItem = data.category;
    const colorsItem = data.colors;
    const brandItem = data.brands;
    Object.keys(categoryItem).forEach((item, i) => {
      if (categoryItem[item]) {
        category.push(item);
      }
    });
    let colors = [];
    Object.keys(colorsItem).forEach((item, i) => {
      if (colorsItem[item]) {
        colors.push(item);
      }
    });
    let brands = [];
    Object.keys(brandItem).forEach((item, i) => {
      if (brandItem[item]) {
        brands.push(item);
      }
    });

    dispatch(changePage(1));
    await dispatch(filterByCategory(category));
    await dispatch(filterByColors(colors));
    await dispatch(filterByBrands(brands));
    await dispatch(filterByMinPrice(data.minPrice));
    await dispatch(filterByMaxPrice(data.maxPrice));
  };
  return (
    <div className="d-lg-flex align-items-start gap-3">
      <Box
        className="d-none d-lg-block"
        style={{ position: "sticky", top: "60px", zIndex: "8" }}
        sx={{ width: 300, margin: "0 auto" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <MuiAccordian  heading={"Categories"} expanded={true}>
            <div className="global_scroll" style={{maxHeight:"200px",overflowY:"scroll"}}>
            {cateGoryData?.data?.map((item,i)=>(
              <div key={i} className="d-flex align-items-center justify-content-between">
              <FormControlLabel
                {...register(`category.${item?.name}`)}
                className="ac_input_filter"
                control={<Checkbox size="small" />}
                label={item?.name}
              />
              12
            </div>
            )) }
       
            </div>
          </MuiAccordian>
          <MuiAccordian heading={"Color"}>
            <div className="d-flex align-items-center justify-content-between">
              <FormControlLabel
                control={<Checkbox size="small" {...register("colors.Red")} />}
                className="ac_input_filter"
                label="Red"
              />
              12
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <FormControlLabel
                control={<Checkbox size="small" {...register("colors.Blue")} />}
                className="ac_input_filter"
                label="Blue"
              />
              12
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <FormControlLabel
                control={
                  <Checkbox size="small" {...register("colors.green")} />
                }
                className="ac_input_filter"
                label="Green"
              />
              12
            </div>
          </MuiAccordian>
          <MuiAccordian heading={"Brands"}>
            <div className="d-flex align-items-center justify-content-between">
              <FormControlLabel
                control={
                  <Checkbox size="small" {...register("brands.BestBuy")} />
                }
                className="ac_input_filter"
                label="BestBuy"
              />
              12
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <FormControlLabel
                control={
                  <Checkbox size="small" {...register("brands.Samsang")} />
                }
                className="ac_input_filter"
                label="Samsang"
              />
              12
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <FormControlLabel
                control={<Checkbox size="small" {...register("brands.LG")} />}
                className="ac_input_filter"
                label="LG"
              />
              12
            </div>
          </MuiAccordian>
          <MuiAccordian heading={"Price"}>
            <p className="mb-0">
              <small>Min Price</small>
            </p>
            <Slider
              size="small"
              defaultValue={0}
              max={1000}
              {...register("minPrice")}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <p className="mb-0">
              <small>Max Price</small>
            </p>
            <Slider
              size="small"
              defaultValue={1000}
              max={1000}
              {...register("maxPrice")}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </MuiAccordian>
          <div className="py-3 d-flex gap-3">
            <Button type="submit" variant="contained" size="small" color="info">
              Filter
            </Button>
            <Button
              onClick={() => {
                dispatch(resetQuery());
                reset();
              }}
              variant="outlined"
              size="small"
              color="error"
            >
              Reset
            </Button>
          </div>
        </form>
      </Box>
      <div style={{ flex: 1 }}>
        <div className="row">
          {isLoading ? (
            <>
              {[...Array(9).keys()]?.map((item, i) => (
                <div className="col-md-4 col-6" key={i}>
                  <Skeleton
                    sx={{
                      height: "38vh",
                      width: "100",
                      transform: "scale(1)",
                      marginBottom: "10px",
                    }}
                    animation="wave"
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {productData?.map((item, i) => (
                <div className="col-md-4 col-6" key={i}>
                  <ProductCart item={item} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="d-flex my-5  align-items-center justify-content-center">
          <Pagination
            onChange={(event, value) => {
              dispatch(changePage(value));
            }}
            count={Math.ceil(data?.meta?.total / data?.meta?.limit)}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
