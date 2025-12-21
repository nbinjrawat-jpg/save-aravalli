import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    document.title =
      "Thank You – Save Aravalli | Aapki Awaaz Maayne Rakhti Hai";
  }, []);

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(
      "🌳 Maine Save Aravalli movement ko support kiya hai.\n\n" +
        "Aravalli sirf pahad nahi — ye hamare paani, jungle aur future ka rakshak hai.\n\n" +
        "Aap bhi apni awaaz uthaiye:\n" +
        "👉 https://save-aravalli.vercel.app\n\n" +
        "🌱 Aravalli bachegi, tabhi Bharat bachega."
    );

    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section className="min-h-screen bg-[#f6fff9] flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center">

        {/* Emotional Image */}
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
          alt="Aravalli at Risk"
          className="w-full h-40 object-cover grayscale-[20%] contrast-105"
        />

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="text-4xl mb-4">🙏</div>

          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Dhanyavaad!
          </h1>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Aapne <strong>Save Aravalli</strong> ko support karke
            prakriti aur bhavishya ke liye ek zaroori kadam uthaya hai.
          </p>

          {/* Emotional Note */}
          <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-xl mb-6 text-left">
            <p className="text-gray-800 leading-relaxed">
              🌱 Jab hazaaron log ek chhoti si awaaz ko saath laate hain,
              tabhi bade badlav ki shuruaat hoti hai.
            </p>
          </div>

          <p className="text-green-900 font-semibold mb-8">
            “Aravalli bachegi, tabhi Bharat bachega.”
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition text-sm"
            >
              🏡 Home
            </Link>

            <Link
              to="/jago-bharat"
              className="border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3 rounded-full font-semibold transition text-sm"
            >
              🔥 Jago Bharat
            </Link>

            <button
              onClick={shareOnWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition text-sm"
            >
              📲 Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
