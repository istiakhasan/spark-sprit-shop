"use client"
import SearchBar from "@/components/home/searchBar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import toast, { Toaster } from 'react-hot-toast';
const GlobalLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default GlobalLayout;
