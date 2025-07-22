import React, { useEffect, useState } from "react";
import axios from "axios";
import usePlaces from "../api/usePlaces";

const baseUrl = "http://localhost:3000"; // 백엔드 서버 주소

export default function PlaceListFrame() {
    const { places, loading, error } = usePlaces();

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;

    return (
        <div className="bg-white rounded-xl p-8 w-full max-w-6xl mx-auto shadow">
            <h2 className="text-center text-lg font-semibold mb-6">맛집 목록</h2>
            <div className="grid grid-cols-4 gap-8">
                {places.map((place) => (
                <div
                    key={place.id}
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
                ))}
            </div>
        </div>
    );
}