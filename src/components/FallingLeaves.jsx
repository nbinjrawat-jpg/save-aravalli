import { useEffect, useState } from "react";

export default function FallingLeaves({ trigger }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    if (!trigger) return;

    const newLeaves = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      size: 18 + Math.random() * 12,
      emoji: Math.random() > 0.5 ? "🍃" : "🌸",
    }));

    setLeaves(newLeaves);

    const timer = setTimeout(() => {
      setLeaves([]);
    }, 3500);

    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: `${leaf.left}%`,
            fontSize: `${leaf.size}px`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          {leaf.emoji}
        </span>
      ))}
    </div>
  );
}
