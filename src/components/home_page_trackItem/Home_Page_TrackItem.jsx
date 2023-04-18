import styles from "./index.module.scss";
import { useState, useCallback, useEffect } from "react";
import { BiUser, BiDotsHorizontalRounded, BiPlay } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import { secondsToMinutes, padTo2Digits } from "@/utils/func";

const Home_Page_TrackItem = ({ data, trackIndex }) => {

  const router = useRouter();

  const [favorites, setFavorites] = useState([]);

  const [isHeartFilled, setIsHeartFilled] = useState(false)

  const handleToggleFavorites = (item) => {
    const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = currentFavorites.findIndex((fav) => JSON.stringify(fav) === JSON.stringify(item));
  
    if (index !== -1)  {
      const updatedFavorites = [...currentFavorites];
      updatedFavorites.splice(index, 1);
      setIsHeartFilled(false)
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = currentFavorites.concat(item);
      setIsHeartFilled(true)
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  }

  useEffect(() => {
    const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = currentFavorites.findIndex((fav) => JSON.stringify(fav) === JSON.stringify(data));
    setIsHeartFilled(index !== -1);
  }, [data]);

  const goToTrackPage = () => {
    router.push(`/track_page/${data.id}`);
  };


  return (
    <div className={styles.TrackItem} onClick={() => goToTrackPage()}>
      <div className={styles.mainContent}>
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
          {isHeartFilled ? (
            <AiFillHeart
              className={`${styles.heart} ${styles.active}`}
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorites(data);
              }}
            />
          ) : (
            <AiOutlineHeart
              className={styles.heart}
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorites(data);
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

