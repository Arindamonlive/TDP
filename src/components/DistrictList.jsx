import React from "react";
import { Link, useParams } from "react-router-dom";
import { pandals } from "../assets/pandals";

export default function DistrictList() {
  const { district } = useParams();
  const districtPandals = pandals[district] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 capitalize">{district} Pandals</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {districtPandals.map((pandal) => (
          <Link
            to={`/pandals/${district}/${pandal.id}`}
            key={pandal.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            <img
              src={pandal.heroImage}  // <-- fixed
              alt={pandal.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{pandal.name}</h3>
              <p className="text-sm text-gray-600">{pandal.description}</p>
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg">View Details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
