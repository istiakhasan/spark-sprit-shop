"use client";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import MuiModal from "@/components/ui/MuiModal";
import { Button } from "@mui/material";
import { useState } from "react";
import AddNewDeliveryAddress from "./_addNewDeliveryAddress/AddNewDeliveryAddress";
import { useGetAddressByIdQuery } from "@/redux/api/addressBookApi";
import "./_addNewDeliveryAddress/style.css";
import AddressCard from "./_addNewDeliveryAddress/AddressCard";

const AddressBook = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetAddressByIdQuery(undefined);
  console.log(data, "data");

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h5 className="mb-0">Address Book</h5>
        {data?.data?.length > 0 && (
          <Button
            onClick={() => setOpen(true)}
            size="small"
            sx={{
              color: "#004DDA",
              border: "1px solid #004DDA",
              padding: "2px 10px",
              fontSize: "12px",
            }}
            variant="outlined"
          >
            <MuiCommonIcon size="small" name={"plus"} /> Add Address
          </Button>
        )}
      </div>

      <div
        className={`db_common_body ${
          !data?.data?.length > 0 && " d-flex align-items-center justify-content-center"
        }`}
      >
        <div className="row">
          {data?.data?.map((item) => (
            <div className="col-md-4" key={item.id}>
              <AddressCard item={item} />
            </div>
          ))}
        </div>

        {!data?.data?.length > 0 && (
          <Button
            onClick={() => setOpen(true)}
            size="small"
            sx={{
              color: "#004DDA",
              border: "1px solid #004DDA",
              padding: "2px 10px",
              fontSize: "12px",
            }}
            variant="outlined"
          >
            <MuiCommonIcon size="small" name={"plus"} /> Add Delivery Address
          </Button>
        )}
      </div>

      <MuiModal setIsOpen={setOpen} modalIsOpen={open}>
        <h6>Add new delivery address</h6>
        <AddNewDeliveryAddress setOpen={setOpen} />
      </MuiModal>
    </div>
  );
};

export default AddressBook;
