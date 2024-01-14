"use client"
import moment from 'moment';
import './orderinvoice.css';
import { formatCurrency,convertToWords } from '@/common/utils';
import { useEffect,useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {  Button } from "@mui/material";
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
const commonStyle = {
  fontWeight: 'bold',
  border: 'none',
};

const OrderInvoice = ({data}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const getPageMargins = () => {
    return `@page { margin: 200px 10px 10px 10px !important; }`;
  };
  return (
    <>
      <div style={{ margin: '50px' }}>

      </div>
      <style>{getPageMargins()}</style>
      <Button
            onClick={handlePrint}
            size="small"
            sx={{
              color: "white",
              padding: "2px 10px",
              fontSize: "12px",
            }}
            variant="contained"
          >
            <MuiCommonIcon size="small" name={"print"} />  Print
          </Button>
      <div ref={componentRef}>

      <div  className="d-flex justify-content-between">
        <div>
          <p>
            <span style={commonStyle}>Transition Id: </span>
            {data?.transition_id}
          </p>
          <p>
            <span style={commonStyle}>Address: </span>
            {data?.address}
          </p>
          <p>
            <span style={commonStyle}>Mobile: </span>
            {data?.customerId?.phone}
          </p>
        </div>
        <div>
          <p>
            <span style={commonStyle}> Date: </span>
            {moment(data?.createdAt).format('YYYY-MM-DDD')}
          </p>
          <p>
            <span style={commonStyle}>Time: </span>
            {moment(data?.createdAt).format('h:mm A')}
          </p>

          <p className="">
            <strong>Invoice by:</strong>
            Md Istiak
          </p>
        </div>
      </div>

      <table className="invoiceTable  mt-1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ width: '60px', textAlign: 'center' }}>Sl</th>
            <th style={{ width: '300px' }}>Products</th>
            <th style={{ width: 'auto', textAlign: 'center' }}>QTY</th>
            <th style={{ width: 'auto' }} className="th-start">
              Unit Price
            </th>
            <th style={{ width: 'auto' }} className="text-center">
              Discount
            </th>
            <th style={{ width: 'auto' }} className="text-center">
              Total Amount(Tk)
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data?.products?.map((item,i)=>(
                <tr key={item?._id}>
                    <td>{i+1}</td>
                    <td style={{textWrap:"noWrap"}}>{item?.name}</td>
                    <td style={{textWrap:"noWrap"}}>{item?.purchaseQuantity}</td>
                    <td style={{textWrap:"noWrap"}}>{item?.price} tk</td>
                    <td style={{textWrap:"noWrap",textAlign:"center"}}>{item?.discount}</td>
                    <td style={{textWrap:"noWrap"}}>{formatCurrency(item?.price * item?.purchaseQuantity || 0)}</td>
                </tr>
            ))
          }
          <tr >
                    <td colSpan={4} style={{textWrap:"noWrap"}}></td>
                    <td style={{textWrap:"noWrap"}}><strong>Sub Total</strong></td>
                    <td style={{textWrap:"noWrap"}}>{formatCurrency(data?.products?.reduce((acc,curr)=>acc+(curr?.price * curr?.purchaseQuantity),0) || 0)}</td>
                </tr>
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-start">
        <div>
          <p className="pr-2 mt-2">
            <strong> Amount In Taka :</strong>
            {convertToWords(data?.totalPrice || 0)}
          </p>
        </div>
        <table className="mt-3 " style={{ width: '40%', border: 'none' }}>
          <tbody>
          <tr>
              <td style={{ ...commonStyle, textAlign: 'start' }}>Shipping Price :</td>
              <td style={{ border: 'none' }} className="text-end">
                <span className="ml-2"> {formatCurrency((data?.shipping || 0))}</span>
              </td>
            </tr>
            <tr>
              <td style={{ ...commonStyle, textAlign: 'start' }} className="font-weight-bold text-start">
                Total Price:
              </td>
              <td style={{ border: 'none' }} className="text-end">
              {formatCurrency(data?.totalPrice || 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      </div>
      {/* <div className=" mt-5 pt-5">
        <div className="d-flex justify-content-between">
          <p style={{ borderTop: '1px solid gray' }} className="text-center">
            Receiver Signature
          </p>
          <div>
            <p style={{ borderTop: '1px solid gray' }} className="text-center">
              Authorized Signature
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OrderInvoice;
