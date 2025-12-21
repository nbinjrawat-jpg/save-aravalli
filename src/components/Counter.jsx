import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(76000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 77260) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.floor(Math.random() * 5 + 1);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-green-600 text-white py-6 text-center">
      <div className="text-2xl md:text-3xl font-bold">
        🔥 {count.toLocaleString()}+
      </div>
      <p className="text-green-100 mt-1 text-sm md:text-base">
        लोग अरावली को बचाने के लिए खड़े हैं
      </p>
    </section>
  );
}
