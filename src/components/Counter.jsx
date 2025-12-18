import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(18234);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-green-600 text-black py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold">
        🔥 {count.toLocaleString()}+
      </h2>
      <p className="mt-4 text-lg md:text-xl">
        Log Aravalli ko bachane ke liye khade hain
      </p>
    </section>
  );
}
