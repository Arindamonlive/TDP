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

export default function ShopList() {
  const { district } = useParams();
  const districtKey = district; // e.g., 'westTripura'
  const districtShops = shops[districtKey] || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        দোকানসমূহ (Shops) — {districtNames[districtKey] || districtKey}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {districtShops.map((shop) => (
          <Link
            key={shop.id}
            to={`/shops/${districtKey}/${shop.id}`}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={shop.heroImage || "/placeholder.png"} // fallback if missing
              alt={shop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{shop.name}</h2>
              <p className="text-gray-600">{shop.description || "No description available."}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
