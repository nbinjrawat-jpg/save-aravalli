export default function Share() {
  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "🌳 Save Aravalli 🌳\n\n" +
      "Aravalli sirf pahad nahi,\n" +
      "ye Rajasthan ka pani aur jungle hai.\n\n" +
      "✍️ Petition sign karein:\n" +
      "http://localhost:5173"
    );

    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 bg-green-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">📣 Awaaz Phailaiye</h2>

      <button
        onClick={shareOnWhatsApp}
        className="bg-black px-6 py-3 rounded text-green-400 font-semibold"
      >
        📲 WhatsApp par Share Karein
      </button>
    </section>
  );
}
