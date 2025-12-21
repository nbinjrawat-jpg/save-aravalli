export default function QuoteCard() {
  return (
    <section className="py-20 bg-black flex justify-center">
      <div className="relative max-w-md w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2"
          alt="Aravalli Hills"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
          <p className="text-white text-xl font-semibold leading-relaxed">
            “Jab pahaad bachte hain,<br /> tab shehar saans lete hain.”
          </p>

          <p className="mt-4 text-green-400 font-bold">
            🌱 Save Aravalli
          </p>
        </div>

      </div>
    </section>
  );
}
