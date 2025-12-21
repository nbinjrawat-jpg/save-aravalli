export default function Share() {
  const shareOnWhatsApp = () => {
    const url = encodeURIComponent("https://save-aravalli.vercel.app");
    const text = encodeURIComponent("🌳 अरावली बचाओ! अभी इस मुहिम से जुड़ें:");
    const whatsappLink = `https://wa.me/?text=${text}%20${url}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="text-center my-10">
      <button
        onClick={shareOnWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition"
      >
        📤 WhatsApp par Share karein
      </button>

      <p className="text-xs text-gray-500 mt-2">
        📱 Mobile → WhatsApp App | 💻 Desktop → WhatsApp Web
      </p>
    </div>
  );
}
