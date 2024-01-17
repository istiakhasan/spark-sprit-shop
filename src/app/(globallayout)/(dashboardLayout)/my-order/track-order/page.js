"use client"
import MuiCommonIcon from "@/components/ui/MuiCommonIcon";
import {  useSearchParams } from "next/navigation";
import { useGetOrderLogsByIdQuery } from '@/redux/api/orderApi';
import './track.css'
import moment from 'moment';
export default function TrackOrder(){
    const queryParams=useSearchParams()
    const orderId=queryParams.get('orderId')
    const {data}=useGetOrderLogsByIdQuery({id:orderId},{
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        pollingInterval:4000
    })
    const emptyTimelineData=[
        {status:"pending"},
        {status:"approved"},
        {status:"processing"},
        {status:"shipped"},
        {status:"delivered"},
    ]
    const finalData=emptyTimelineData.map(item=>{
        const isExist=data?.data?.log?.find(log=>log.status===item.status) 
        if(isExist){
            return {
                ...isExist,
                logExist:true
            }
        }else{
         return {
            ...item,
            logExist:false
         }
        }
    })
    return (
        <div>
        <h5> Track Order </h5>
        <div className="db_common_body">
             <div className="timeline_wraper ">
               {finalData?.map((item,i)=>(
                <div key={i} className="timeline_log">
                      <div className="timeline_left">
                        {!!item?.logExist ?<p className="timeline_p">{moment(item?.date).format('MMM DDD')},</p>:null}
                        {!!item?.logExist ?<p className="timeline_p">{moment(item?.date).format('YYYY')},</p>:null}
                      </div>
                      <div className="line_wraper">
                         <div className={`t_icon_wraper ${!!item?.logExist && "t_l_bg"}`}><MuiCommonIcon name="check" color="white" size="small" /></div>
                         {finalData?.length-1 !==i && <div className={`stright_line ${!!item?.logExist && "t_l_bg"}`}></div>}
                      </div>
                      <div className="timeline_right">
                         <h6 className="mb-0 fw-bold">{item?.status}</h6>
                         {!!item?.logExist ?<p className="timeline_p">{moment(item?.date).format('hh:mm A')} ,{item?.address}</p>:null}
                      </div>
                  </div>
               )) }
               
               
               
               
           

             </div>
     
    
     
        </div>
      </div>
    )
}