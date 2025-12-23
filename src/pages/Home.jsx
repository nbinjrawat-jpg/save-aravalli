import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import WhyAravalli from "../components/WhyAravalli";

export default function Home() {
  const lines = [
    "💧जल का संरक्षण करती है",
    "🌳  वनों की रक्षा करती है",
    "🏜️  मरुस्थलीकरण को रोकती है",
    " भारत के भविष्य की आधारशिला है",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-[#071a10] flex items-center justify-center px-6">
        <div className="max-w-6xl w-full rounded-3xl overflow-hidden shadow-2xl">

          <div
            className="relative bg-cover bg-center min-h-[75vh] flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-green-900/65"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-green-200">
                🌳 Save Aravalli
              </h1>

              <p className="mt-5 text-lg md:text-xl text-green-100 leading-relaxed">
                Aravalli sirf pahad nahi —  
                ye Bharat ke paani, jungle aur climate ka rakshak hai.
              </p>

              {/* MOVING TEXT */}
              <p className="mt-6 text-xl md:text-2xl font-semibold text-green-300 transition-all duration-500">
                {lines[index]}
              </p>

              <Link
                to="/petition"
                className="mt-10 inline-block bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg"
              >
                ✊ Join the Movement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BELOW SECTIONS */}

      <WhyAravalli />
    </>
  );
}
