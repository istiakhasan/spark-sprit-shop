import { formatPhoneNumber } from "@/common/utils";
import MuiModal from "@/components/ui/MuiModal";
import { useState } from "react";
import AddNewDeliveryAddress from "./AddNewDeliveryAddress";

const AddressCard = ({item}) => {
  const [open, setOpen] = useState(false);
  console.log( item?.defaultDeliveryAddress)
    return (
      <div className="mod-address-book-card mod-address-book-card-bigger h-100">
        <div className="mod-address-book-card-name">
          {item?.fulName}
          <button 
            onClick={()=>setOpen(true)}
            type="button"
            className="next-btn next-btn-text next-btn-primary next-btn-medium mod-address-book-card-edit"
          >
            EDIT
          </button>
        </div>
        <div className="mod-address-book-card-phone mb-2">{formatPhoneNumber(  item?.phone)}</div>
        <div className="mod-address-book-card-address mb-2">
          {item?.province},{item?.city},{item?.area},{item?.address}
        </div>
        <div></div>
        <div className="mod-address-book-card-tags">
          {item?.defaultDeliveryAddress && <small className="mod-address-book-card-tag-default">DEFAULT DELIVERY ADDRESS</small>}
          {/* <small className="mod-address-book-card-tag-default">DEFAULT BILLING ADDRESS</small> */}
        </div>
        <MuiModal setIsOpen={setOpen} modalIsOpen={open}>
        <h6>Edit Address</h6>
        <AddNewDeliveryAddress setOpen={setOpen}  item={item} />
        </MuiModal>
      </div>
    );
  };
  
  export default AddressCard;
  