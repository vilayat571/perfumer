import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePerfume from "./pages/CreatePerfume";
import { Analytics } from "@vercel/analytics/react"; // Changed from /next to /react

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-perfume" element={<CreatePerfume />} />
      <Analytics />
    </Routes>
  );
}

export default App;
