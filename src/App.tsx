import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreatePerfume from "./pages/CreatePerfume";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import ReturnPage from "./pages/ReturnPage";
import DeliveryPage from "./pages/DeliveryPage";
import { Analytics } from "@vercel/analytics/react";
import ScentsPage from "./pages/ScentsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-perfume" element={<CreatePerfume />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/returns" element={<ReturnPage />} />
        <Route path="/scents" element={<ScentsPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
