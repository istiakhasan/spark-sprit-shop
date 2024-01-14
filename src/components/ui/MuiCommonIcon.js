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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import InsightsIcon from '@mui/icons-material/Insights';
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
    case "plus":
      return <AddIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "minus":
      return <RemoveIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "trash":
      return <DeleteForeverOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "facebook":
      return <FacebookIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "google":
      return <GoogleIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "faq":
      return <LiveHelpIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "shipping":
      return <LocalShippingIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "order":
      return <CardGiftcardIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "location":
      return <AddLocationAltOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "summary":
      return <SummarizeOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "payment":
      return <CreditScoreOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "pen":
      return <EditOutlinedIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "print":
      return <LocalPrintshopIcon  fontSize={size} sx={{ color: color }} />;
      break;
    case "timeline":
      return <InsightsIcon  fontSize={size} sx={{ color: color }} />;
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
