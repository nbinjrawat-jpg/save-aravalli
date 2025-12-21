import { useEffect } from "react";

export default function AravalliHistory() {
  useEffect(() => {
    document.title =
      "Aravalli Parvat – Itihas, Mahatva aur Khatre | Save Aravalli";
  }, []);

  return (
    <section className="bg-[#f6fff9] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-14">
          🌱 अरावली को बचाना क्यों ज़रूरी है?
        </h1>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 – Water */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
              alt="जल संरक्षण"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                जल संरक्षण
              </h3>
              <p className="text-gray-600">
                अरावली वर्षा जल को रोककर भूजल रिचार्ज करती है
                और नदियों को जीवन देती है।
              </p>
            </div>
          </div>

          {/* Card 2 – Desert */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
              alt="रेगिस्तान रोकती है"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                रेगिस्तान रोकती है
              </h3>
              <p className="text-gray-600">
                अरावली थार रेगिस्तान को उत्तर भारत तक
                फैलने से रोकने की प्राकृतिक दीवार है।
              </p>
            </div>
          </div>

          {/* Card 3 – Climate (FIXED IMAGE) */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
              alt="जलवायु संतुलन"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                जलवायु संतुलन
              </h3>
              <p className="text-gray-600">
                तापमान, वर्षा और प्रदूषण को नियंत्रित कर
                पर्यावरण संतुलन बनाए रखती है।
              </p>
            </div>
          </div>

          {/* Card 4 – Biodiversity */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
              alt="जैव विविधता"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                जैव विविधता
              </h3>
              <p className="text-gray-600">
                जंगल, वन्यजीव और प्राकृतिक जीवन
                अरावली पर निर्भर हैं।
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 bg-green-100 border-l-4 border-green-700 p-8 rounded-xl text-center">
          <p className="text-xl font-semibold text-green-900">
            🌍 अगर अरावली नहीं बचेगी, तो पानी, जंगल और भविष्य भी नहीं बचेगा।
          </p>
        </div>

      </div>
    </section>
  );
}
