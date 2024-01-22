/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useEffect, Fragment } from "react";
import MuiCommonIcon from "../ui/MuiCommonIcon";
import homeStyle from "./home.module.css";
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import { getUserInfo, isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { addSearchTerm, changePage } from "@/redux/slice/querySlice";
import { useDebounced } from "@/hook/useDebounced";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import MuiDrawer from "../ui/MuiDrawer";
import { removeToCart } from "@/redux/slice/cartSlice";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const SearchBar = () => {
  const dispatch=useDispatch()
  const [drawerOpen,setDrawerOpen]=useState(false)
  const query=useSelector(state=>state.querySlice)
  const { cart, wishList } = useSelector((state) => state.cartSlice);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const [userLogin, setIsLoggedIn] = useState('');
  const spark_route=usePathname() 
  const userInfo=getUserInfo()
  const {data:cateGoryData}=useGetAllCategoryQuery(undefined,{
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  })
  useEffect(() => {
    setIsLoggedIn(isLoggedIn())
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[spark_route]);
  return (
    <div
      style={{ boxShadow: "0 20px 20px -20px rgba(0,0,0,0.25)" }}
      className={`sticky_searchbar py-1 ${isSticky ? "sort_bg " : "bg-white"}`}
    >
      <div className="container  d-flex  align-items-center justify-content-between my-2">
        <div className={`${homeStyle.categories} category_icon_hover d-flex align-items-center`}>
          <MuiCommonIcon color={isSticky ? "white" : ""} name={"menu"} />
          <span className={`ms-2 ${isSticky ? "text-white" : ""}`}>
            Categories
          </span>

          <div className="category_child_division global_scroll">
            <div> 
             {
            cateGoryData?.data?.map(item=>(
             <> 
              <p onClick={()=>router.push(`/home/${item?._id}?category=${item?.name}`)} key={item?._id}>{item?.name}</p>
              <Divider />
              </>
            ))
             }
            </div>
          </div>
        </div>
        <FormControl
          className="d-none d-lg-flex  "
          size="small"
          sx={{ width: "100%", maxWidth: "500px", padding: 0 }}
          variant="outlined"
        >
          <OutlinedInput
            className="search_input"
            size="small"
            sx={{ fontSize: "14px", color: "gray" }}
            placeholder="Search over 10,000 products"
            value={query.searchTerm}
            onChange={(e)=>{
              dispatch(addSearchTerm(e.target.value))
              dispatch(changePage(1))
            }}
            endAdornment={
              <MuiCommonIcon position="end" size={"small"} name={"search"} />
            }
          />
        </FormControl>
        <div style={{ whiteSpace: "nowrap" }}>
          <span className="heart_icon">
            {!userLogin ? <IconButton aria-label="cart">
              <StyledBadge color="error">
                <MuiCommonIcon
                  color={isSticky ? "white" : ""}
                  size={"medium"}
                  name={"user"}
                />{" "}
              </StyledBadge>
            </IconButton>:
            <img className="me-3" style={{objectFit:"cover",borderRadius:"50%",cursor:"pointer"}} width={25} height={25} src={userInfo?.image} alt="" />}
            <div className="heart_icon_hover">
             {!userLogin &&
              
           (  <Button
                sx={{ background: "#ffc107", fontSize: "12px" }}
                className=" px-2 py-2 d-block w-100"
                variant="contained"
                onClick={() => router.push("/login")}
              >
                Sign In or Sign Up
              </Button>)
             }
              <Divider className="my-2" />
              <Link
                style={{
                  fontSize: "16px",
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                href="/profile"
              >
                <MuiCommonIcon name="user" size="small" /> My Profile{" "}
              </Link>
            {userInfo?.role==="customer" && (
             <> 
            
            <Divider className="my-2" />
              <Link
                style={{
                  fontSize: "16px",
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                href="/my-order"
              >
                <MuiCommonIcon name="shipping" size="small" /> Track Your Order{" "}
              </Link> </>)}
            {userInfo?.role==="admin" && (
             <> 
            
            <Divider className="my-2" />
              <Link
                style={{
                  fontSize: "16px",
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                href="/admin/pending-orders"
              >
                <MuiCommonIcon name="order" size="small" /> Manage Orders{" "}
              </Link> </>)}
            {userInfo?.role==="admin" && (
             <> 
            
            <Divider className="my-2" />
              <Link
                style={{
                  fontSize: "16px",
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                href="/my-products"
              >
                <MuiCommonIcon name="order" size="small" /> Manage Products{" "}
              </Link> </>)}
              <Divider className="my-2" />
              <Link
                style={{
                  fontSize: "16px",
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                href="/"
              >
                <MuiCommonIcon name="faq" size="small" /> Help And Faq{" "}
              </Link>
              <Divider className="my-2" />
             {userLogin && <Button
                sx={{ background: "#FF3333", fontSize: "12px" }}
                className=" px-2 py-2 d-block w-100"
                variant="contained"
                onClick={() => {
                  removeUserInfo('token')
                  setIsLoggedIn(false)
                  router.push('/')
                }}
              >
                Log Out
              </Button>}
            </div>
          </span> 
          <span onClick={()=>setDrawerOpen(true)}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={wishList.length} color="error">
                <MuiCommonIcon
                  color={isSticky ? "white" : ""}
                  size={"medium"}
                  name={"heart"}
                />
              </StyledBadge>
            </IconButton>{" "}
          </span>
          <span className="cart_icon">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart.length} color="error">
                <MuiCommonIcon
                  color={isSticky ? "white" : ""}
                  size={"medium"}
                  name={"cart"}
                />
              </StyledBadge>
            </IconButton>{" "}
            <div className="cart_hover_division">
              {/* cart product item loop here  */}
              <div className="global_scroll" style={{maxHeight:"300px",overflowX:"auto"}}>
              {
                cart.map((item,i)=>(
                  <Fragment key={i}>
                <div  className="d-flex align-items-start justify-content-between">
                 
                  
                 <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src={item?.image}
                  sx={{
                    width: 56,
                    height: 56,
                    border: "1px solid white",
                    padding: "1px",
                  }}
                />
                <div>
                  <span style={{ fontWeight: "500", color: "#111",fontSize:"12px" }}>
                   {item?.name?.length>20?item?.name?.slice(0,20):item?.name}
                  </span>
                  <strong className="d-block">$ {item?.price}</strong>
                </div>
                   
                <span style={{width:"20px",cursor:"pointer"}} onClick={()=>dispatch(removeToCart({ _id: item?._id }))}>

                <MuiCommonIcon size={"small"} name={"trash"} color={"red"} />
                </span>
              </div>
               <Divider className="my-2" />
               </Fragment>
                ))
              }
              
              </div>
              {cart.length>0?<Button
                sx={{ background: "#004DDA", fontSize: "12px" }}
                className=" px-2 py-2 d-block w-100"
                variant="contained"
                onClick={() => router.push("/home/cart")}
              >
                View Cart
              </Button>:<p className="mb-0">Cart is empty</p>}
            </div>
          </span>
          <MuiDrawer  open={drawerOpen} setOpen={setDrawerOpen} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
