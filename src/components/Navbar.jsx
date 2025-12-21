import { Link } from "react-router-dom";
import { useState } from "react";
import FallingLeaves from "./FallingLeaves";

export default function Navbar() {
  const [trigger, setTrigger] = useState(false);

  const handleClick = () => {
    setTrigger(false);
    setTimeout(() => setTrigger(true), 10);
  };

  return (
    <>
      {/* 🍃 Falling Effect */}
      <FallingLeaves trigger={trigger} />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* 🌳 LOGO */}
          <Link
            to="/"
            onClick={handleClick}
            className="flex items-center gap-2 text-green-400 font-bold text-lg"
          >
            <span className="text-2xl">🌳</span>
            <span>Save Aravalli</span>
          </Link>

          {/* MENU */}
          <div className="flex items-center gap-6 text-sm md:text-base">
            <Link to="/" onClick={handleClick} className="hover:underline">
              🏠 Home
            </Link>
            <Link to="/about" onClick={handleClick} className="hover:underline">
              ℹ️ About
            </Link>
            <Link to="/petition" onClick={handleClick} className="hover:underline">
              ✍️ Petition
            </Link>
            <Link to="/jago-bharat" onClick={handleClick} className="hover:underline">
              🔥 जागो भारत
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}
