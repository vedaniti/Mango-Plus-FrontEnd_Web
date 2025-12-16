import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import FarmerToMerchant from "./Pages/Services/FarmerToMerchant/FarmerToMerchant";
import FarmerToFarmer from "./Pages/Services/FarmerToFarmer/FarmerToFarmer";
import MerchanttoFarmer from "./Pages/Services/MerchantToFarmer/MerchanttoFarmer";
import MerchanttoRetailer from "./Pages/Services/MerchantToRetailer/MerchanttoRetailer";
import Transports from "./Pages/Services/Transports/Transports";
import Nursery from "./Pages/Services/Nursery/Nursery";
import AboutAnimals from "./Pages/Services/About Animals/AboutAnimals";
import CompaniesAboutAgriculture from "./Pages/Services/Companies About Agriculture/CompaniesAboutAgriculture";
import Agritourism from "./Pages/Services/Agritourism/Agritourism";

function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services/Farmer to Merchant" element={<FarmerToMerchant />} />
          <Route path="/Services/Farmer to Farmer" element={<FarmerToFarmer />} />
          <Route path="/Services/Merchant to Farmer" element={<MerchanttoFarmer />} />
          <Route path="/Services/Merchant to Retailer" element={<MerchanttoRetailer />} />
          <Route path="/Services/Transports" element={<Transports />} />
           <Route path="/Services/Nursery" element={<Nursery />} />
          <Route path="/Services/About Animals" element={<AboutAnimals />} />
          <Route path="/Services/Companies About Agriculture" element={<CompaniesAboutAgriculture />} />
          <Route path="/Services/Agritourism" element={<Agritourism />} /> 
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;