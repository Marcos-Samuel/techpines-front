import './styles.css';

interface IMusicCardProps {
  music: {
    name: string;
    album_name: string;
    duration: string; 
  };
}

const MusicCard: React.FC<IMusicCardProps> = ({ music }) => {
  return (
    <div className="music-card">
      <div>
        <p>{music.name}</p>
      </div>
      <div>
        <p>{music.album_name}</p>
      </div>
      <div>
        <p>{music.duration}</p>
      </div>
    </div>
  );
};

export default MusicCard;
