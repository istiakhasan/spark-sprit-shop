import Link from "next/link";


const DashboardSidebar = () => {
  return (
    <aside className="dashbaord_sidebar">
      <p>
        <small>Hello,{"Rashed"}</small>
      </p>
      <div className="dashboard_link_wraper">
        <h6> Mange My account </h6>
         <div className="sub_link_wraper">
         <p><Link href="/profile">My Profile</Link></p>
        <p><Link href="/addressbook">Address Book</Link></p>
        <p><Link href="/my-payment-opt">My Payment Options</Link></p>
        <p><Link href="/spark-wallet">Spark Wallet</Link></p>
        <p><Link href="/vouchers">Vouchers</Link></p>
         </div>
        <h6> My Orders</h6>
         <div className="sub_link_wraper">
         <p><Link href="/my-order">My Orders</Link></p>
         <p><Link href="/my-returns">My Returns</Link></p>
        <p><Link href="/my-cancellations">My Cancellations</Link></p>
         </div>
        <Link href="/my-reviews"><h6> My Reviews </h6> </Link>
        
      </div>
    </aside>
  );
};

export default DashboardSidebar;
