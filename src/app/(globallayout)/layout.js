import Navbar from "@/components/shared/Navbar";
import React from "react";

const GlobalLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default GlobalLayout;
