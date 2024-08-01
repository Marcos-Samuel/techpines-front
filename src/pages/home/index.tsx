import "./styles.css";
import { useState } from "react";
import Header from "../../components/Header";
import Cards, { IAlbum } from "../../components/Cards";
import Footer from "../../components/Footer";
import { addNewAlbum } from "../../api/apiFuntions";
import Modal from "../../components/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useUser from "../../hooks/useUser";

export interface IArtist {
  id: number;
  name: string;
  albums: IAlbum[];
  tracks: ITracks[];
}
interface ITracks {
  name: string;
}
interface AlbumFormInputs {
  name: string;
  release_year?: string;
  image_url?: string;
}

const albumSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  release_year: z.string().length(4, "Ano de lançamento deve ter 4 dígitos"),
  image_url: z.string().optional()
});

type AlbumFormData = z.infer<typeof albumSchema>;

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const { artist, fetchArtist } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AlbumFormData>({
    resolver: zodResolver(albumSchema),
  });

  const onSubmit = async (data: AlbumFormInputs) => {
    try {
      await addNewAlbum({
        ...data,
        artist_id: "1",
      });

      closeModal();
      fetchArtist("1")
    } catch (error) {
      console.error("Erro ao adicionar álbum:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <h1>Álbums</h1>
      <main>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Adicionar Album"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">Nome</label>
              <input id="name" {...register("name")} />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="release_year">Ano de Lançamento</label>
              <input id="release_year" {...register("release_year")} />
              {errors.release_year && (
                <span>{errors.release_year.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="image_url">Capa do album</label>
              <input id="image_url" {...register("image_url")} />
            </div>

            <div className="modal-footer">
              <button type="submit">Salvar</button>
              <button className="cancel" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        </Modal>
        {artist ? (
          <>
            {artist.albums.map((album) => (
              <Cards album={album} key={album.id} />
            ))}
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </main>
      <Footer openModal={openModal} />
    </div>
  );
}

export default Home;
