import React from "react";
import { useParams } from "react-router-dom";
import { foodPlaces } from "../assets/food";

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

export default function FoodDetail() {
  const { district, id } = useParams();
  const food = foodPlaces[district]?.find((f) => f.id === parseInt(id));

  if (!food) return <p className="text-center mt-10">Food place not found</p>;

  return (
    <div className="p-6">
      <img
        src={food.heroImage}
        alt={food.name}
        className="w-full h-64 object-cover rounded-2xl shadow-lg"
      />

      <h1 className="text-3xl font-bold mt-4">{food.name}</h1>
      <p className="text-lg text-gray-700">
        📍 {districtNames[district]} | ☎ {food.helpline}
      </p>

      <p className="mt-4 text-gray-600">{food.description}</p>

      <h2 className="text-2xl mt-6 font-semibold">Address</h2>
      <p>{food.address}</p>
      <a
        href={food.direction}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 inline-block"
      >
        Get Directions
      </a>

      <h2 className="text-2xl mt-6 font-semibold">Gallery</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {food.featureImages.map((img, idx) => (
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
