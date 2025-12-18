export default function Share() {
  const message = encodeURIComponent(
    "🌳 Main #SaveAravalli ke saath hoon.\n" +
    "Aravalli humara paani, hawa aur bhavishya hai.\n\n" +
    "Aap bhi join karein:\n" +
    "👉 http://localhost:5173\n\n" +
    "#AravalliBachao"
  );

  return (
    <section className="bg-green-800 py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        📢 Awaaz Phailaiye
      </h2>

      <p className="mt-4 text-lg text-black">
        Agar aap Aravalli ke saath hain,  
        to is message ko aage badhaiye.
      </p>

      <a
        href={`https://wa.me/?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-black text-green-400 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
      >
        📲 WhatsApp par Share Karein
      </a>
    </section>
  );
}
