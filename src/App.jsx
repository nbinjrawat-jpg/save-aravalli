import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import PetitionPage from "./pages/PetitionPage";
import ThankYou from "./pages/ThankYou";
import JagoBharat from "./pages/JagoBharat";
import AravalliHistory from "./pages/AravalliHistory";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/petition" element={<PetitionPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/jago-bharat" element={<JagoBharat />} />
          <Route path="/aravalli-history" element={<AravalliHistory />} />
        </Routes>
      </main>
    </div>
  );
}
