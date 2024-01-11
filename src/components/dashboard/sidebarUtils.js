const commonProfile=[
    {
        id: 1.1,
        title: "My Profile",
        url: "/profile"
    },
    {
        id: 1.2,
        title: "Address Book",
        url: "/addressbook"
    },
]

const customerDbData = [
    {
        id: 1,
        title: "Manage My Account",
        children: [
            ...commonProfile,
            {
                id: 1.3,
                title: "My Payment Options",
                url: "/my-payment-opt"
            },
            {
                id: 1.4,
                title: "Spark Wallet",
                url: "/spark-wallet"
            },
            {
                id: 1.5,
                title: "Vouchers",
                url: "/vouchers"
            },
        ]
    },
    {
        id: 2,
        title: "My Orders",
        children: [
            {
                id: 2.1,
                title: "My Orders",
                url: "/my-order"
            },
            {
                id: 2.2,
                title: "My Returns",
                url: "/my-returns"
            },
            {
                id: 2.3,
                title: "My Cancellations",
                url: "/my-cancellations"
            },
        ]
    },
   
]


const adminDBData=[
    {
        id: 1,
        title: "Manage My Account",
        children: [
            ...commonProfile
           
        ]
    },
    {
        id: 2,
        title: "Manage Orders",
        children: [
            {
                id:2.1,
                title: "Pending Orders",
                url: "/admin/pending-orders"
            },
            {
                id: 2.2,
                title: "Processing Orders",
                url: "/admin/processing-orders"
            },
            {
                id: 2.3,
                title: "Shipped Orders",
                url: "/admin/shipped-orders"
            },
            {
                id: 2.3,
                title: "Deliver Orders",
                url: "/admin/deliver-orders"
            },
        ]
    },
    {
        id: 3,
        title: "Manage Products",
        children: [
            {
                id: 3.1,
                title: "Categories",
                url: "/my-category"
            },
            {
                id: 3.2,
                title: "Brand",
                url: "/my-brand"
            },
            {
                id: 3.3,
                title: "Products",
                url: "/my-products"
            },
        ]
    },
]



export const getSidebarMenuItem=(role)=>{
    if(role==="customer"){
        return customerDbData
    }
    if(role==="admin"){
        return adminDBData
    }
}