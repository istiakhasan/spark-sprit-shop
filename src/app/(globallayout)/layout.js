"use client"
import SearchBar from "@/components/home/searchBar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const GlobalLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
