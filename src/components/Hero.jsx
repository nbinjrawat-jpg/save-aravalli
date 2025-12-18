export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-green-900 px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400">
          🌳 Save Aravalli
        </h1>

        <p className="mt-6 text-lg md:text-xl">
          Agar aaj Aravalli nahi bachi,  
          toh kal paani, hawa aur jungle sirf kahani ban jaayenge.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-black font-semibold">
            ✊ Join Movement
          </button>

          <button className="border border-green-400 px-6 py-3 rounded hover:bg-green-400 hover:text-black">
            📝 Sign Petition
          </button>
        </div>
      </div>
    </section>
  );
}
