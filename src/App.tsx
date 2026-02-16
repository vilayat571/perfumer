import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreatePerfume from "./pages/CreatePerfume";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-perfume" element={<CreatePerfume />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;