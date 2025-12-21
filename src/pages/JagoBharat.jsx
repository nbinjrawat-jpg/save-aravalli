export default function JagoBharat() {
  return (
    <section className="bg-[#f8faf7]">
      
      {/* TOP IMAGE SECTION */}
      <div
        className="h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            🔥 जागो भारत
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

        {/* INTRO */}
        <p className="text-lg md:text-xl leading-relaxed text-center mb-12">
          Aravalli sirf pahadon ki ek shrinkhla nahi hai —  
          yeh Bharat ki sabse purani parvat shrinkhla hai,  
          jo hazaaron saalon se is desh ke jal, jungle aur jeevan ki raksha karti aayi hai.
        </p>

        {/* HISTORY */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            📜 Aravalli ka Itihaas
          </h2>
          <p className="leading-relaxed">
            Aravalli parvat shrinkhla lagbhag 1500 kilometer tak faili hui hai  
            aur yeh duniya ki sabse purani parvat shrinkhlaon me se ek maani jaati hai.  
            Rajasthan, Haryana, Delhi aur Gujarat tak faili Aravalli  
            Bharat ke climate ko santulit rakhne me aham bhoomika nibhati hai.
          </p>
        </div>

        {/* CHIPKO ANDOLAN */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            🌳 Chipko Andolan se seekh
          </h2>
          <p className="leading-relaxed">
            Jab jungle katne lage, tab desh ke logon ne pedon se chipak kar  
            unhe bachane ka sankalp liya — isi se janma <strong>Chipko Andolan</strong>.  
            Yeh andolan hume yaad dilata hai ki prakriti ki raksha  
            sirf sarkar ki zimmedari nahi, balki har nagrik ka kartavya hai.
          </p>
        </div>

        {/* MESSAGE */}
        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg">
          <p className="text-lg font-semibold text-green-900">
            Agar Aravalli bachegi,  
            tabhi Rajasthan bachega.  
            Aur jab Rajasthan bachega,  
            tabhi Bharat bachega.
          </p>
        </div>

      </div>
      {/* BILINGUAL CALL TO ACTION */}
<div className="mt-16 grid md:grid-cols-2 gap-8">

  {/* ENGLISH */}
  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
    <h3 className="text-xl font-bold text-green-700 mb-3">
      🌍 Wake Up India – Save Aravalli!
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Aravalli is not just a mountain range, it is India’s natural shield.
      It protects water, forests, and life itself.
    </p>
    <p className="mt-3 font-semibold text-green-800">
      Save Aravalli today to protect nature and secure our future tomorrow.
    </p>
  </div>

  {/* HINDI */}
  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
    <h3 className="text-xl font-bold text-orange-600 mb-3">
      🇮🇳 जागो भारत – अरावली बचाओ!
    </h3>
    <p className="text-gray-700 leading-relaxed">
      अरावली केवल पर्वत नहीं, भारत की प्राकृतिक ढाल है।
      यह जल, जंगल और जीवन की रक्षा करती है।
    </p>
    <p className="mt-3 font-semibold text-green-800">
      आज अरावली बचाएँ, ताकि आने वाला कल सुरक्षित रहे।
    </p>
  </div>

</div>

    </section>
  );
}
