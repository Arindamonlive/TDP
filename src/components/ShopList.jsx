import React from "react";
import { Link, useParams } from "react-router-dom";
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

export default function FoodList() {
  const { district } = useParams();
  const districtKey = district; // this is 'southTripura', 'dhalai', etc.
  const districtFoods = shops[districtKey] || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        কোথায় খাবেন (Where to Eat) — {districtNames[districtKey] || districtKey}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {districtFoods.map((shops) => (
          <Link
            key={shops.id}
            to={`/shops/${districtKey}/${shops.id}`}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={shops.heroImage}
              alt={shops.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{shops.name}</h2>
              <p className="text-gray-600">{shops.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
