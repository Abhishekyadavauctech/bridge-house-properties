import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import PropertyDetailPage from "./components/PropertyDetailPage";
import PropertyListings from "./components/PropertyListings";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/property-detail" element={<PropertyDetailPage />} />
         <Route path="/property-list" element={<PropertyListings />} />
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
