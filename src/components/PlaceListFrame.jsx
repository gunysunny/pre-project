import React, { useEffect, useState } from "react";
import axios from "axios";
import usePlaces, { fetchPlaces } from "../api/placeAPI";
import PlaceCard from "./Card";


const baseUrl = "http://localhost:3000"; // 백엔드 서버 주소

export default function PlaceListFrame() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetchPlaces() 
            .then(setPlaces) // fetchplace가 성공적으로 불러와지면 then이 실행됨.
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;

    return (
        <div className="bg-white rounded-xl p-8 w-full max-w-6xl mx-auto shadow">
            <h2 className="text-center text-lg font-semibold mb-6">맛집 목록</h2>
            <div className="grid grid-cols-4 gap-8">
                {places.map((place) => (
                <PlaceCard key={place.id} place={place} />
                ))}
            </div>
        </div>
    );
}