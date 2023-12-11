import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import { Button } from "@mui/material";

const AddressBook = () => {
    return (
        <div>
          <h5> Address Book </h5>
          <div className="db_common_body d-flex align-items-center justify-content-center">
              
              <Button size="small" sx={{color:"#004DDA",border:"1px solid #004DDA"}}  variant="outlined"><MuiCommonIcon name={"plus"} /> Add Delivery Address</Button>
              
          </div> 
        </div>
    );
};

export default AddressBook;