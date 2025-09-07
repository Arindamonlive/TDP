import React from "react";
import { useParams } from "react-router-dom";
import { shops } from "../assets/shops";

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

export default function ShopDetail() {
  const { district, id } = useParams();
  const shop = shops[district]?.find((s) => s.id === parseInt(id));

  if (!shop) return <p className="text-center mt-10">Shop not found</p>;

  return (
    <div className="p-6">
      {/* Hero Image */}
      <img
        src={shop.heroImage}
        alt={shop.name}
        className="w-full h-64 object-cover rounded-2xl shadow-lg"
      />

      {/* Title, District & Helpline */}
      <h1 className="text-3xl font-bold mt-4">{shop.name}</h1>
      <p className="text-lg text-gray-700">
        📍 {districtNames[district]} | ☎ {shop.helpline}
      </p>

      {/* Description */}
      <p className="mt-4 text-gray-600">{shop.description}</p>

      {/* Address & Google Maps */}
      <h2 className="text-2xl mt-6 font-semibold">Address</h2>
      <p>{shop.address}</p>
      <a
        href={shop.direction}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 inline-block"
      >
        Get Directions
      </a>

      {/* Feature Images */}
      <h2 className="text-2xl mt-6 font-semibold">Gallery</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {shop.featureImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`feature-${idx}`}
            className="rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
