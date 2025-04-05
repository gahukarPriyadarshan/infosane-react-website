import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import NewArrivalsPage from "../pages/NewArrivalsPage";
import CartPage from "../pages/CartPage";
import ProductDescription from "../pages/ProductDescription";

function AppRoutes() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        
        
      </Routes>
      <Footer/>
    </>
  );
}

export default AppRoutes;
