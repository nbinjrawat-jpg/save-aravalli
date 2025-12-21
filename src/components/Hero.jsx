<section className="min-h-screen bg-gradient-to-b from-[#0e3b23] to-[#071a10] flex items-center justify-center px-6">
  <div className="max-w-6xl w-full rounded-3xl overflow-hidden shadow-2xl">

    <div
      className="relative bg-cover bg-center min-h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Emotional overlay (light, not dark) */}
      <div className="absolute inset-0 bg-green-900/45"></div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-green-300 drop-shadow-lg">
          🌳 Save Aravalli
        </h1>

        <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed">
          Aravalli sirf pahad nahi —  
          ye hamare bachchon ke liye paani, hawa aur jeevan ka rakshak hai.
        </p>

        <Link
          to="/petition"
          className="mt-10 inline-block bg-green-500 hover:bg-green-400 text-black px-10 py-4 rounded-xl text-lg font-semibold transition shadow-lg hover:shadow-green-500/40"
        >
          ✊ Join the Movement
        </Link>
      </div>
    </div>

  </div>
</section>
