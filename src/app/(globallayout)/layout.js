
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import toast, { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic' 
import SearchBar from './../../components/home/searchBar';
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
export default dynamic(() => Promise.resolve(GlobalLayout), { ssr: false });
// export default GlobalLayout;
