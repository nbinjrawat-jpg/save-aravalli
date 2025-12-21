import { useEffect, useState } from "react";

export default function NatureEffects({ type, message }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!type) return;

    let emoji = "🍃";
    let animation = "animate-fall";

    if (type === "water") {
      emoji = "💦";
      animation = "animate-fall";
    }

    if (type === "pollution") {
      emoji = "🌫️";
      animation = "animate-fall";
    }

    if (type === "wildlife") {
      emoji = "🐾";
      animation = "animate-fall";
    }

    if (type === "climate") {
      emoji = "✨";
      animation = "animate-blast"; // 💥 BLAST EFFECT
    }

    const newItems = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: 40 + Math.random() * 20, // center burst
      delay: Math.random() * 0.6,
      size: 18 + Math.random() * 14,
      emoji,
      animation,
    }));

    setItems(newItems);

    const timer = setTimeout(() => setItems([]), 3000);
    return () => clearTimeout(timer);
  }, [type]);

  return (
    <>
      {/* EFFECT */}
      <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
        {items.map((i) => (
          <span
            key={i.id}
            className={`absolute ${i.animation}`}
            style={{
              left: `${i.left}%`,
              fontSize: `${i.size}px`,
              animationDelay: `${i.delay}s`,
            }}
          >
            {i.emoji}
          </span>
        ))}
      </div>

      {/* MESSAGE */}
      {type && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-700 text-white px-6 py-4 rounded-xl shadow-xl z-[1000] max-w-sm text-center">
          {message}
        </div>
      )}
    </>
  );
}
