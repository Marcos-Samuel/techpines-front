import api from './api';

export async function getArtistWithAlbumsAndTracks(id: string) {
  try {
    const response = await api.get(`/artists/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter artista com álbuns e faixas:', error);
    throw error;
  }
}

export async function addNewAlbum(album: { name: string; artist_id: string , image_url?: string}) {
  try {
    const response = await api.post('/albums', album);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar novo álbum:', error);
    throw error;
  }
}


export async function listAlbumByName(name: string) {
  try {
    const response = await api.get(`/albums/name/${name}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar álbum pelo nome:', error);
    throw error;
  }
}

export async function getTracksByTracksId(albumId: string) {
  try {
    const response = await api.get(`/tracks/album/${albumId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter faixas do álbum:', error);
    throw error;
  }
}


export async function deleteAlbum(id: string) {
  try {
    const response = await api.delete(`/albums/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir álbum:', error);
    throw error;
  }
}


export async function addNewTrack(track: { name: string; album_id: string }) {
  try {
    const response = await api.post('/tracks', track);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar nova faixa:', error);
    throw error;
  }
}


export async function listTrackByName(name: string) {
  try {
    const response = await api.get(`/tracks/${name}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar faixa pelo nome:', error);
    throw error;
  }
}


export async function deleteTrack(id: string) {
  try {
    const response = await api.delete(`/tracks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir faixa:', error);
    throw error;
  }
}
