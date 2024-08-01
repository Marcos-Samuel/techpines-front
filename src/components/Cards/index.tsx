import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importe useNavigate para navegação
import violao from '../../assets/modaeviolão.jpeg';
import './styles.css';
import { deleteAlbum } from '../../api/apiFuntions';
import useUser from '../../hooks/useUser';

export interface IAlbum {
    id: string;
    name: string;
    artist_id: number;
    artist_name?: string;
    release_year?: string;
    image_url?: string; 
    created_at?: string; 
    updated_at?: string; 
}

export interface ICardProps {
    album: IAlbum; 
}

const Cards: React.FC<ICardProps> = ({ album }) => {
    const navigate = useNavigate(); 
    
  const { fetchArtist } = useUser();

    const handleDelete = async (id: string) => {
        try {
            await deleteAlbum(id);
            fetchArtist("1");
         
        } catch (error) {
            console.error('Erro ao deletar álbum:', error);
           
        }
    };

   
    const handleNavigateToMusicList = () => {
        navigate(`/music-list?albumId=${album.id}`);  
    };
    return (
        <div className='box-music' onClick={handleNavigateToMusicList}>
            <div className='delete-icon' onClick={(e) => { 
                e.stopPropagation(); 
                handleDelete(album.id);
            }}>
                <span>&times;</span>
            </div>
            <img src={album.image_url || violao} alt={album.name} />
            <h2>{album.name}</h2>
            <p>Artista: {album.artist_name}</p>
            <p>Ano de Lançamento: {album.release_year}</p>
        </div>
    );
}

export default Cards;
