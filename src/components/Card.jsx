// src/components/PlaceCard.jsx
import React from "react";

const baseUrl = "http://localhost:3000";

export default function PlaceCard({ place }) {
    return (
        <div
            className="w-64 h-80 bg-gray-100 rounded-2xl flex flex-col items-center justify-start p-4 shadow-md cursor-pointer hover:bg-blue-100 transition"
        >
            <img
                src={`${baseUrl}/${place.image.src}`}
                alt={place.image.alt}
                className="w-full h-44 object-cover rounded-xl"
            />
            <div className="mt-3 text-base font-bold">{place.title}</div>
            <div className="text-xs text-gray-500 text-center mt-1">{place.description}</div>
        </div>
    );
}