import { useState } from "react";
import { emojiBlast } from "emoji-blast";

export default function WhyAravalli() {
  const [effect, setEffect] = useState(null);

  // ✅ TRIGGER FUNCTION (YAHI BLAST HOGA)
  const trigger = (type) => {
    setEffect(type);

    if (type === "water") {
      emojiBlast({
        emojis: ["💧", "💦", "🚰"],
      });
    }

    if (type === "pollution") {
      emojiBlast({
        emojis: ["🌫️", "🏭", "🌀"],
      });
    }

    if (type === "wildlife") {
      emojiBlast({
        emojis: ["🐾", "🦋", "🦅", "🐘"],
      });
    }

    if (type === "climate") {
      emojiBlast({
        emojis: ["🌍", "✨", "🌱", "☁️"],
      });
    }
  };

  return (
    <>
      {/* MESSAGE BOX */}
      {effect && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-700 text-white px-6 py-4 rounded-xl shadow-xl z-50 max-w-sm text-center">
          {effect === "water" &&
            "💧 अरावली भूजल का प्रमुख स्रोत है और धरती को जल से समृद्ध बनाती है।"}
          {effect === "pollution" &&
            "🌫️ अरावली प्रदूषण को रोककर हवा को शुद्ध बनाए रखने में मदद करती है।"}
          {effect === "wildlife" &&
            "🐾 अरावली अनेक वन्यजीवों और पक्षियों का सुरक्षित घर है।"}
          {effect === "climate" &&
            "🌍 अरावली जलवायु संतुलन बनाए रखती है और वर्षा को नियंत्रित करती है।"}
        </div>
      )}

      {/* CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mt-12">

        <div
          onClick={() => trigger("water")}
          className="cursor-pointer bg-green-100 p-6 rounded-xl text-center hover:scale-105 transition shadow"
        >
          <div className="text-4xl">💧</div>
          <h3 className="font-semibold mt-2">पानी का मुख्य स्रोत</h3>
        </div>

        <div
          onClick={() => trigger("pollution")}
          className="cursor-pointer bg-green-100 p-6 rounded-xl text-center hover:scale-105 transition shadow"
        >
          <div className="text-4xl">🏭</div>
          <h3 className="font-semibold mt-2">प्रदूषण नियंत्रण</h3>
        </div>

        <div
          onClick={() => trigger("wildlife")}
          className="cursor-pointer bg-green-100 p-6 rounded-xl text-center hover:scale-105 transition shadow"
        >
          <div className="text-4xl">🐾</div>
          <h3 className="font-semibold mt-2">वन्यजीवों का घर</h3>
        </div>

        <div
          onClick={() => trigger("climate")}
          className="cursor-pointer bg-green-100 p-6 rounded-xl text-center hover:scale-105 transition shadow"
        >
          <div className="text-4xl">🌍</div>
          <h3 className="font-semibold mt-2">जलवायु संतुलन</h3>
        </div>

      </div>
    </>
  );
}
