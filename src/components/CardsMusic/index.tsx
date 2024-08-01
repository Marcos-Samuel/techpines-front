import { deleteTrack } from '../../api/apiFuntions';
import './styles.css';

interface IMusicCardProps {
  music: {
    id: string;
    name: string;
    album_name: string;
  };
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
}


const MusicCard: React.FC<IMusicCardProps> = ({ music, setIsDeleted }) => {

  const handleDelete = async (id: string) => {
    try {
      await deleteTrack(id);
      setIsDeleted(value => !value);
     
    } catch (error) {
        console.error('Erro ao deletar álbum:', error);
    }
  };
  return (
    <div className="music-card">
      <div className='conteint-name'>
        <p>{music.name}</p>
      </div>
      <div>
        <p>{music.album_name}</p>
      </div>
      <div>
      <p>3:20</p>
      </div>
 
      <p onClick={() => handleDelete(music.id)} >x</p>
     
    </div>
  );
};

export default MusicCard;
