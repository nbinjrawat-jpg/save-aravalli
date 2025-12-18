export default function WhyAravalli() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Aravalli Kyun Zaroori Hai?
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          { icon: "🌧️", text: "Paani ka main source" },
          { icon: "🌬️", text: "Pollution control karta hai" },
          { icon: "🐾", text: "Wildlife ka ghar" },
          { icon: "🌍", text: "Climate balance rakhta hai" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-green-100 p-6 rounded-lg text-center hover:scale-105 transition"
          >
            <div className="text-4xl">{item.icon}</div>
            <p className="mt-4 text-lg font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
