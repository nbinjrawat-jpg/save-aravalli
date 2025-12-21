export default function RajasthanEmotion() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-900 to-black text-white text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-green-300">
        🌄 Aravalli: Rajasthan ki Pehchaan
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
        Aravalli sirf pahaad nahi hai.  
        Ye Rajasthan ka pani hai,  
        ye yahan ke jungle hain,  
        aur ye hamare bachchon ka bhavishya hai.
      </p>

      <p className="mt-4 text-green-200 font-semibold">
        Agar Aravalli bachegi, Rajasthan bachega.
      </p>

      <button
        onClick={() =>
          document.getElementById("petition")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-3 rounded text-black font-bold"
      >
        🌱 Is Andolan ka Hissa Bano
      </button>
    </section>
  );
}
