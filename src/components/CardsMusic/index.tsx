
import './styles.css'

const MusicCard = ({ music }) => {
  return (
    <div className="music-card">
      <div>
        <p>{music.name}</p>
      </div>
      <div>
      <p>{music.album_name}</p>
      </div>
      <div>
      <p>3:20</p>
      </div>
      
    </div>
  );
};

export default MusicCard;
