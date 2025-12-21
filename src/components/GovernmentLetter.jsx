export default function GovernmentLetter({ name, city }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-md text-left">
      <h2 className="text-xl font-bold text-green-800 mb-4">
        🏛️ Official Government Letter
      </h2>

      <p className="text-gray-700 mb-4">
        To,<br />
        The Honorable Authority<br />
        Environment & Forest Department<br />
        Government of India
      </p>

      <p className="font-semibold mb-3">
        Subject: Urgent Appeal to Protect the Aravalli Hills
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Main <strong>{name}</strong>, <strong>{city}</strong> se hoon.
        Main aapse nivedan karta/karti hoon ki Aravalli parvat shreni
        ko illegal mining, deforestation aur environmental destruction
        se bachane ke liye turant kadam uthaye jaayein.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Aravalli na sirf Rajasthan balki poore North India ke
        groundwater, climate balance aur biodiversity ke liye
        bahut mahatvapurn hai.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kripya is gambhir mudde par jald se jald action liya jaaye.
      </p>

      <p className="font-semibold">
        Sincerely,<br />
        {name}<br />
        {city}
      </p>
    </div>
  );
}
