import React from "react";
import { useParams } from "react-router-dom";
import { pandals } from "../assets/pandals";

const districtNames = {
  dhalai: "ধলাই (Dhalai)",
  gomati: "গোমতী (Gomati)",
  southTripura: "দক্ষিণ ত্রিপুরা (South Tripura)",
  northTripura: "উত্তর ত্রিপুরা (North Tripura)",
  westTripura: "পশ্চিম ত্রিপুরা (West Tripura)",
  khowai: "খোয়াই (Khowai)",
  unakoti: "ঊনকোটি (Unakoti)",
  sepahijala: "সিপাহিজালা (Sepahijala)",
};

export default function PandalDetail() {
  const { district, id } = useParams();
  const pandal = pandals[district]?.find((p) => p.id === parseInt(id));

  if (!pandal) return <p className="text-center mt-10">Pandal not found</p>;

  return (
    <div className="p-6">
      {/* Hero Image */}
      <img
        src={pandal.heroImage}
        alt={pandal.name}
        className="w-full h-64 object-cover rounded-2xl shadow-lg"
      />

      {/* Title, District & Helpline */}
      <h1 className="text-3xl font-bold mt-4">{pandal.name}</h1>
      <p className="text-lg text-gray-700">
        📍 {districtNames[district]} | ☎ {pandal.helpline}
      </p>

      {/* Inspiration */}
      <h2 className="text-2xl mt-6 font-semibold">Inspiration</h2>
      <p className="text-gray-600">{pandal.inspiration}</p>

      {/* Address & Google Maps */}
      <h2 className="text-2xl mt-6 font-semibold">Address</h2>
      <p>{pandal.address}</p>
      <a
        href={pandal.direction}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 inline-block"
      >
        Get Directions
      </a>

      {/* Feature Images */}
      <h2 className="text-2xl mt-6 font-semibold">Feature Images</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {pandal.featureImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`feature-${idx}`}
            className="rounded-xl shadow-md"
          />
        ))}
      </div>

      {/* Nearby Food */}
      <h2 className="text-2xl mt-6 font-semibold">Nearby Food Places</h2>
      <ul className="list-disc pl-6 mt-2">
        {pandal.nearbyFood.map((place, idx) => (
          <li key={idx}>
            {place.name} (PIN: {place.pin})
          </li>
        ))}
      </ul>
    </div>
  );
}
