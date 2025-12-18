import { useState } from "react";

export default function Petition() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400">
          ✍️ Aravalli Bachao Abhiyan
        </h2>

        <p className="mt-4 text-lg">
          Apna naam jod kar is andolan ka hissa baniye.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <input
              required
              placeholder="Aapka Naam"
              className="p-3 rounded text-black"
            />

            <input
              placeholder="Shehar"
              className="p-3 rounded text-black"
            />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black py-3 rounded font-semibold transition"
            >
              🌳 Main Aravalli ke Saath Hoon
            </button>
          </form>
        ) : (
          <div className="mt-8 bg-green-700 p-6 rounded">
            <p className="text-xl font-semibold">
              💚 Dhanyavaad!
            </p>
            <p className="mt-2">
              Aapka naam Aravalli bachane walon me jud gaya hai.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
