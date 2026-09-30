import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';
export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error del servidor (${response.status})`);
      }
      const data = await response.json();
      setCharacters(data.results ?? []);
    } catch (e) {
      setError(e.message || 'No se pudo cargar la información');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { characters, loading, error, refetch: fetchCharacters };
}
