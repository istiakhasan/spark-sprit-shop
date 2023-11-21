import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
const MuiCommonIcon = ({ name, color, size }) => {
  switch (name) {
    case "menu":
      return <MenuIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "search":
      return <SearchIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "cart":
      return <ShoppingCartOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "heart":
      return <FavoriteBorderOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "user":
      return <AccountCircleOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "arrowup":
      return <ArrowUpwardOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "gridrowcol":
      return <GridViewOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "gridrow":
      return <ViewHeadlineOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;

    default:
      return (
        <VisibilityIcon
          fontSize={size}
          sx={{ color: color}}
        />
      );
      break;
  }
};

export default MuiCommonIcon;
