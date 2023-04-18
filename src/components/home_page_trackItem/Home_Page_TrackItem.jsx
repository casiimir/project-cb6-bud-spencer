import styles from "./index.module.scss";
import { useState, useCallback, useEffect } from "react";
import { BiUser, BiDotsHorizontalRounded, BiPlay } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import { secondsToMinutes, padTo2Digits } from "@/utils/func";

const Home_Page_TrackItem = ({ data, trackIndex }) => {
  const router = useRouter();

  // Definisco uno stato per l'elenco dei brani preferiti
  const [favorites, setFavorites] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites")) || []
      : []
  );

  // Definisco una funzione di callback per aggiornare lo stato di favorites
  const handleToggleFavorite = useCallback(() => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((f) => f.id === data.id);
      if (isFavorite) {
        return prevFavorites.filter((f) => f.id !== data.id);
      } else {
        return [...prevFavorites, data];
      }
    });
  }, [data]);

  // Salvo i dati dei brani preferiti in localStorage ogni volta che favorites viene aggiornato
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const goToTrackPage = () => {
    router.push(`/track_page/${data.id}`);
  };


  return (
    <div className={styles.TrackItem} >
      <div className={styles.mainContent} onClick={() => goToTrackPage()} >
        <p className={styles.index}>
          {data?.position ? padTo2Digits(data?.position) : padTo2Digits(trackIndex + 1)}
        </p>
        <BiPlay className={styles.playIcon} />
        <Image
          src={data.artist.picture_medium ? data.artist.picture_medium : data.album.cover_medium}
          width={65}
          height={65}
          alt={data.title}
        />
        <div className={styles.contentTitle}>
          <p className={styles.title}>{data.title}</p>
          <div className={styles.contentArtist}>
            <BiUser className={styles.icon} />
            <p className={styles.artist}>{data?.artist.name}</p>
          </div>
        </div>

      </div>

      <div className={styles.info}>
        <p className={styles.duration}>{secondsToMinutes(data.duration)}</p>
        <p className={styles.followers}>{data.rank}</p>
        <div className={styles.reactionsIcons}>
          {/* Mostra il cuore pieno se il brano è nei preferiti, altrimenti il cuore vuoto */}
          {favorites.some((f) => f.id === data.id) ? (
            <AiFillHeart
              className={`${styles.heart} ${styles.active}`}
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorite();
              }}
            />
          ) : (
            <AiOutlineHeart
              className={styles.heart}
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorite();
              }}
            />
          )}
          <BiDotsHorizontalRounded className={styles.dots} />
        </div>
      </div>
    </div>
  );
};

export default Home_Page_TrackItem;

