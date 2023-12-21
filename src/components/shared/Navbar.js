/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import navbarCss from "../../styles/navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const menuItems = [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Blog",
      path: "/blog",
    },
  ];
  return (
    <nav 
    style={{position:"relative",zIndex:"1111"}}
     className={`${navbarCss.navContainer} `}>
      <div className={`${navbarCss.navwrapper} container`}>
        <Link href={"/"}>
          <img
            className={navbarCss.logo}
            src="https://www.ansonika.com/allaia/img/logo.svg"
            alt=""
          />
        </Link>
        {menuItems.map((item, i) => (
          <Link key={i} href={item?.path}>
            {item?.label}
          </Link>
        ))}
        <Link className="text-end d-none d-lg-block" href={"/"}>
          <p className="mb-0">Need Help?</p>
          <p className="mb-0">+008-1306-910346</p>
        </Link>
      </div>
    </nav>
  );
}
