import { useState } from "react";

export default function About() {
  const [likes, setLikes] = useState(128);

  return (
    <section className="bg-[#f6fff9] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=900&q=80"
            alt="Aravalli Hills"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            🌳 About Save Aravalli
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Aravalli parvat shreni duniya ki sabse purani mountain ranges
            me se ek hai. Hazaron saalon se ye Bharat ke kai hisson ko
            <strong className="text-green-700">
              {" "}paani, jungle aur climate balance{" "}
            </strong>
            pradan karti aa rahi hai.
          </p>

          {/* Highlight box */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-xl mb-6">
            <p className="text-gray-800 leading-relaxed">
              Aaj Aravalli par illegal mining, deforestation aur
              environmental destruction ka khatra mandra raha hai.
              Agar hum aaj nahi bole, toh kal hamari aane wali peedhiyaan
              sirf tasveerein dekhti reh jayengi.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            ✊ What is Save Aravalli?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Save Aravalli</strong> ek jan-andolan hai —
            jo illegal mining ke khilaaf awaaz uthata hai aur
            logon ko jungle, paani aur bhavishya bachane ke liye
            ek saath laata hai.
          </p>

          {/* Like / Support Button */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                setLikes(likes + 1);
                alert("🙏 Dhanyavaad! Aapne Save Aravalli ko support kiya.");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              👍 Support Save Aravalli
            </button>

            <span className="text-green-800 font-medium">
              {likes}+ log support kar chuke hain
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-16 text-center">
        <p className="text-xl font-semibold text-green-900">
          🌱 Aravalli bachegi, tabhi Bharat bachega.
          <br />
          🌱 अरावली बचेगी, तभी भारत बचेगा
        </p>
      </div>
    </section>
  );
}
