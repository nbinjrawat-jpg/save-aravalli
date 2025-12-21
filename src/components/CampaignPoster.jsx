export default function CampaignPoster() {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-10">
        Save Aravalli Parvat
      </h2>

      <img
        src="/save-aravalli-poster.jpg"
        alt="Save Aravalli Campaign"
        className="mx-auto w-[280px] md:w-[360px] rounded-xl shadow-2xl border border-green-700"
      />

      <p className="mt-6 text-gray-300 max-w-xl mx-auto">
        Agar aaj hum nahi bole, toh kal Aravalli sirf tasveeron me reh jaayegi.
      </p>
    </section>
  );
}
