import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import MusicCard from "../../components/CardsMusic";
import { addNewTrack, getTracksByTracksId } from "../../api/apiFuntions";
import iconTime from "../../assets/time_15113432.png";
import "./styles.css";
import debounce from "lodash.debounce";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface AlbumFormInputs {
  name: string;
}

const albumSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
});
type AlbumFormData = z.infer<typeof albumSchema>;

const MusicList: React.FC = () => {

  const [filteredMusic, setFilteredMusic] = useState<any[]>([]);
  const [originalMusicList, setOriginalMusicList] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const albumId = new URLSearchParams(location.search).get("albumId");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AlbumFormData>({
    resolver: zodResolver(albumSchema),
  });


  const onSubmit = async (data: AlbumFormInputs) => {
    try {
        await addNewTrack({
            ...data,
            album_id: albumId
        });
      
      closeModal();
    } catch (error) {
      console.error('Erro ao adicionar álbum:', error);
    }
  };
  useEffect(() => {
    const fetchTracks = async () => {
      if (albumId) {
        try {
          const tracks = await getTracksByTracksId(albumId);
          setFilteredMusic(tracks);
          setOriginalMusicList(tracks);
        } catch (error) {
          setFilteredMusic([]);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTracks();
  }, [albumId]);

  const handleSearch = useCallback(
    debounce((query) => {
      const lowercasedQuery = query.toLowerCase().trim();

      if (lowercasedQuery === "") {
        setFilteredMusic(originalMusicList);
        return;
      }

      const filtered = originalMusicList.filter((music) =>
        music.name.toLowerCase().includes(lowercasedQuery)
      );

      setFilteredMusic(filtered);
    }, 300),
    [originalMusicList]
  );

  return (
    <div className="container">
      <main>
      <SearchBar onSearch={handleSearch} />
      <div className="conteintTitles">
        <div>
          <h2>Titulo</h2>
        </div>
        <div>
          <h2>Album</h2>
        </div>
        <div>
          <img src={iconTime} alt="" />
        </div>
      </div>
      <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title="Adicionar Musica"
      >
          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <label htmlFor="name">Nome</label>
          <input id="name" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
            </div>
            
            <div className="modal-footer">
              <button type="submit">Salvar</button>
              <button className="cancel" onClick={closeModal}>
                Cancelar
              </button>
            </div>
        </form>
      </Modal>

      <div className="music-list">
        {loading ? (
          <p>Loading...</p>
        ) : filteredMusic.length > 0 ? (
          filteredMusic.map((music) => (
            <MusicCard key={music.id} music={music} />
          ))
        ) : (
          <p>No music found</p>
        )}
        </div>
        </main>
      <Footer openModal={openModal} />
    </div>
  );
};

export default MusicList;
