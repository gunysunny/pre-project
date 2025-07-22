import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export default function usePlaces() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${baseUrl}/places`)
        .then(res => setPlaces(res.data.places))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }, []);

    return { places, loading, error };
}