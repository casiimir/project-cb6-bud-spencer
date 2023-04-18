import styles from "../pages/favorites_page/fave.module.scss";
import { useState, useEffect } from "react";
import { BiUser,  BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart, AiFillPlayCircle } from "react-icons/ai";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import { secondsToMinutes, padTo2Digits } from "@/utils/func";

 const Favorites_Page = ({data, trackIndex }) => {
  const router = useRouter();

  // Recupero l'elenco dei brani preferiti da localStorage
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Definisco una funzione per rimuovere un brano dai preferiti
  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((f) => f.id !== id);
    setFavorites(updatedFavorites);

    // Salvo i dati dei brani preferiti in localStorage
    try {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (JSON.stringify(favorites) !== JSON.stringify(storedFavorites)) {
      setFavorites(storedFavorites);
    }
  }, []);
  

  const goToTrackPage = (trackId) => {
    router.push(`/track_page/${trackId}`);
  };


  return (
    <MainLayout>
    <div className={styles.FavoritesPage}>
      <h1 className={styles.title}>Your favourite tracks</h1>
      {favorites.length > 0 ? (
        <div className={styles.tracks}>
          {favorites.map((favTrack) => (
            <div key={favTrack.id} className={styles.TrackItem} >  
              <div className={styles.mainContent}>
                <p className={styles.index}>{data?.position ? padTo2Digits(data?.position) : padTo2Digits(trackIndex + 1)}</p>
                <Image
                  src={favTrack.album.cover_medium}
                  width={65}
                  height={65}
                  alt={favTrack.title}
                />
                <div className={styles.contentTitle}>
                  <p className={styles.title}>{favTrack.title}</p>
                  <div className={styles.contentArtist}>
                    <BiUser className={styles.icon} />
                    <p className={styles.artist}>{favTrack.artist.name}</p>
                  </div>
                </div>
              </div>
<div className={styles.icon}>
<AiFillPlayCircle onClick={() => goToTrackPage(favTrack.id)}/>
</div>
              <div className={styles.info}>
                <p className={styles.duration}>{secondsToMinutes(favTrack.duration)}</p>
                <p className={styles.followers}>{favTrack.rank}</p>
                <div className={styles.reactionsIcons}>
                  {/* Utilizza il cuore pieno se il brano è nei preferiti, altrimenti il cuore vuoto */}
                  {favorites.some((f) => f.id === favTrack.id) ? (
                    <AiFillHeart
                      className={styles.heart}
                      onClick={() => removeFavorite(favTrack.id)}
                    />
                  ) : (
                    <AiOutlineHeart className={styles.heart} onClick={() => removeFavorite(favTrack.id)} />
                  )}
                  <BiDotsHorizontalRounded className={styles.dots} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noFavorites}>You do not have any favourites yet!</p>
      )}
    
    </div>
    </MainLayout>
  );
};

export default Favorites_Page;



