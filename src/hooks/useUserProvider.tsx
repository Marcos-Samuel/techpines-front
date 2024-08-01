import { useState, useEffect } from 'react';

import { IArtist } from '../pages/home'; 
import { getArtistWithAlbumsAndTracks } from '../api/apiFuntions';

export default function useUserProvider() {
  const [artist, setArtist] = useState<IArtist | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchArtist = async (id: string) => {
    setLoading(true);
    try {
      const data = await getArtistWithAlbumsAndTracks(id);
      setArtist(data);
    } catch (error) {
      console.error('Erro ao buscar artista:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtist('1'); 
  }, []);

  return {
    artist,
    loading,
    fetchArtist 
  };
}
