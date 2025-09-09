import { useParams } from "react-router-dom";
import { pandals } from "../data/pandals";
import { foodPlaces } from "../data/food"; 
import { motion } from "framer-motion";

export default function PandalShowcase() {
  const { districtName, pandalId } = useParams();
  const pandal = (pandals[districtName] || []).find(
    (p) => p.id.toString() === pandalId
  );

  if (!pandal) return <p className="p-6">Pandal not found.</p>;

  // Filter nearby food places by pinCode
  const nearbyFood = (foodPlaces[districtName] || []).filter(
    (f) => f.pinCode === pandal.pinCode
  );

  return (
    <div className="p-6">
      {/* Hero Image */}
      <motion.img
        src={pandal.heroImage}
        alt={pandal.name}
        className="w-full h-72 object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Pandal Name */}
      <h1 className="text-3xl font-bold mt-6">{pandal.name}</h1>

      {/* Helpline */}
      <p className="mt-2 text-lg font-semibold text-red-800">
        Helpline: {pandal.helpline}
      </p>

      {/* Inspiration */}
      <div className="mt-4 bg-yellow-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold text-red-700">Inspiration</h2>
        <p className="mt-2 text-gray-700">{pandal.inspiration}</p>
      </div>

      {/* Feature Images */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {pandal.featureImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Feature ${idx + 1}`}
            className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition"
          />
        ))}
      </div>

      {/* Address & Map */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-red-700">Address</h2>
        <p className="mt-2">{pandal.address}</p>
        <a
          href={pandal.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-red-700 text-white rounded-lg shadow hover:bg-red-800"
        >
          Get Directions
        </a>
      </div>

      {/* Nearby Food */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-red-700">Nearby Food Places</h2>
        {nearbyFood.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {nearbyFood.map((f) => (
              <li
                key={f.id}
                className="p-3 bg-white rounded-lg shadow hover:shadow-md"
              >
                <p className="font-semibold">{f.name}</p>
                <p className="text-sm text-gray-600">{f.address}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-600">
            No food places listed for this area yet.
          </p>
        )}
      </div>
    </div>
  );
}
