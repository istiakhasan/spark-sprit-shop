import AddNewDeliveryAddress from "@/app/(globallayout)/(dashboardLayout)/addressbook/_addNewDeliveryAddress/AddNewDeliveryAddress";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import MuiModal from "@/components/ui/MuiModal";
import { useGetAddressByIdQuery } from "@/redux/api/addressBookApi";
import { useEffect, useState } from 'react'
export default function AddressBookSection({setDefaultAddress}) {
    const { data } = useGetAddressByIdQuery(undefined);
    const [open, setOpen] = useState(false);
    const addressData = data?.data
    const [rowDto,setRowDto]=useState({})
    useEffect(()=>{
    const defaultAddress=addressData?.find(item=>item?.defaultDeliveryAddress)
    setDefaultAddress(defaultAddress)
    },[data])
    return (
        <div className="checkout_wraper">
            <div className="checkout_timeline">
                <div className="icon_wraper">
                    <MuiCommonIcon color="white" name="location" size="small" />
                </div>
                <div className="line"></div>
            </div>
            <div>
                <h6 className="checkout_title">Delivery address</h6>
                <div className="row py-4">
                    {
                        addressData?.map((item) => (
                            <div className="col-md-6 mb-3">
                                <article className={`del_address ${item?.defaultDeliveryAddress&&"isDefault"}`}>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-2">{item?.fulName}</h6>
                                        <small onClick={() => {
                                            setRowDto(item)
                                            setOpen(true)}} className="edit_btn"><MuiCommonIcon name="pen" size="20px" /> Edit</small>
                                    </div>
                                    <div>
                                        <address className="mb-0">
                                            {item?.province},{item?.city},{item?.area},{item?.address}
                                        </address>
                                        <p className="mb-0">Mobile No: {item?.phone}</p>
                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </div>
            </div>
            <MuiModal setIsOpen={setOpen} modalIsOpen={open}>
                <h6>Edit Address</h6>
                <AddNewDeliveryAddress setOpen={setOpen} item={rowDto} />
            </MuiModal>
        </div>
    )
}