export default function Petition() {
  return (
    <section className="min-h-screen bg-[#f6fff9] px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600">
            ✍️ Sign the Petition
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Aravalli parvat shreni illegal mining aur environmental destruction
            ki wajah se khatre me hai.  
            <br />
            <strong>Aapka ek signature future generations ke liye farq la sakta hai.</strong>
          </p>
        </div>

        {/* IMPACT BOXES */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="bg-green-100 p-4 rounded-lg">
            🌍 Climate aur rainfall balance
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            💧 Groundwater aur paani ka source
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            🐾 Wildlife aur biodiversity
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            👶 Future generations ka haq
          </div>
        </div>

        {/* FORM */}
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">

          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Apna naam likhein"
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">City</label>
            <input
              type="text"
              placeholder="Shehar ka naam"
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Message (Optional)
            </label>
            <textarea
              rows="4"
              placeholder="Aapka support message"
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded text-lg"
          >
            🌱 I Stand for Aravalli
          </button>

          <p className="text-center text-sm text-gray-500 mt-2">
            We respect your privacy. Your information will not be shared.
          </p>

        </form>
      </div>
    </section>
  );
}
