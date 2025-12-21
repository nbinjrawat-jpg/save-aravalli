import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { emojiBlast } from "emoji-blast";

export default function PetitionPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "Sign the Petition – Save Aravalli | Aapki Awaaz Zaroori Hai";
  }, []);

  // 🔥 BLAST POSITION
  const blastYPos = window.innerHeight - 10;

  // 🚀 ROCKET
  const rocket = () => {
    emojiBlast({
      emojiCount: 1,
      emojis: ["🚀"],
      physics: {
        fontSize: 45,
        gravity: 0,
        initialVelocities: { x: 0, y: -12 },
        rotation: 0,
        rotationDeceleration: 0,
      },
      position: {
        x: window.innerWidth / 2,
        y: blastYPos,
      },
    });
  };

  // ☁️ CLOUDS
  const clouds = () => {
    emojiBlast({
      emojiCount: 8,
      emojis: ["☁️"],
      physics: {
        fontSize: { min: 32, max: 48 },
        gravity: 0.15,
        initialVelocities: {
          x: { min: -6, max: 6 },
          y: { min: -3, max: -6 },
        },
        rotation: 0,
        rotationDeceleration: 0,
      },
      position: {
        x: window.innerWidth / 2,
        y: blastYPos,
      },
    });
  };

  // ✨ SPARKLES
  const sparkles = () => {
    emojiBlast({
      emojiCount: 12,
      emojis: ["✨"],
      physics: {
        fontSize: { min: 12, max: 26 },
        gravity: 0.25,
        initialVelocities: {
          x: { min: -15, max: 15 },
          y: { min: -15, max: 15 },
        },
      },
      position: {
        x: window.innerWidth / 2,
        y: blastYPos - 80,
      },
    });
  };

  // ✅ SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🎉 BLAST SEQUENCE
    rocket();
    clouds();
    setTimeout(sparkles, 400);

    // ⏳ DELAY THEN NAVIGATE
    setTimeout(() => {
      navigate("/thank-you");
    }, 1300);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1000&q=80"
            alt="Save Aravalli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/40"></div>

          <div className="absolute bottom-10 left-10 right-10 text-white">
            <h2 className="text-3xl font-bold mb-3">
              🌱 अरावली को बचाइए
            </h2>
            <p className="text-lg">
              आज आपका एक हस्ताक्षर,  
              कल हज़ारों ज़िंदगियों की रक्षा बन सकता है।
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="p-10 md:p-14">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 text-center">
            ✍️ Sign the Petition
          </h1>

          <p className="text-center text-gray-600 mb-8">
            आपका एक हस्ताक्षर अरावली के भविष्य  
            को बचाने की दिशा में बड़ा कदम है।
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="City"
              required
              className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg"
            >
              ✅ Submit Petition
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            🔒 आपकी जानकारी सुरक्षित रहेगी। हम spam नहीं करते।
          </p>
        </div>
      </div>
    </section>
  );
}
