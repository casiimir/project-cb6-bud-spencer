import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {AiOutlineFolder, AiFillFolder } from "react-icons/ai"
import {
  BiUser,
  BiDotsHorizontalRounded,
  BiFolder,
  BiPlay,
} from "react-icons/bi";

const Home_Page_AlbumItem = ({ data,  isHome, onRemoveFavorite }) => {
  const router = useRouter();

  const single_album = () => {
    router.push(`/album_page/${data.id}`);
  };


  const [favoriteAlbums, setFavoriteAlbums] = useState([]);

  const [isFolderFilled, setIsFolderFilled] = useState(false)

  const handleToggleFavorites = (item) => {

    if (!isHome) {
      onRemoveFavorite()
    }
    else{
      const currentFavoriteAlbums = JSON.parse(localStorage.getItem("favoriteAlbums")) || [];
      const index = currentFavoriteAlbums.findIndex((fav) => JSON.stringify(fav) === JSON.stringify(item));
    
      if (index !== -1)  {
        const updatedFavoriteAlbums = [...currentFavoriteAlbums];
        updatedFavoriteAlbums.splice(index, 1);
        setIsFolderFilled(false)
        setFavoriteAlbums(updatedFavoriteAlbums);
        localStorage.setItem("favoriteAlbums", JSON.stringify(updatedFavoriteAlbums));
      } else {
        const updatedFavoriteAlbums = currentFavoriteAlbums.concat(item);
        setIsFolderFilled(true)
        setFavoriteAlbums(updatedFavoriteAlbums);
        localStorage.setItem("favoriteAlbums", JSON.stringify(updatedFavoriteAlbums));
      }
    }
  }

  useEffect(() => {
    const currentFavoriteAlbums = JSON.parse(localStorage.getItem("favoriteAlbums")) || [];
    const index = currentFavoriteAlbums.findIndex((fav) => JSON.stringify(fav) === JSON.stringify(data));
    setIsFolderFilled(index !== -1);
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.AlbumItem} onClick={single_album}>
        <Image
          className={styles.img}
          src={data?.cover_medium}
          width={80}
          height={80}
          alt={data?.title}
        />
        <div className={styles.text}>
          <h4>{data?.title}</h4>
          <p className={styles.artist_name_fluo}>{data?.title}</p>
          <div className={styles.contentArtist}>
            <BiUser className={styles.icon} />
            <p className={styles.artist}>{data?.artist.name}</p>
          </div>
        </div>
      </div>
      <div className={styles.icons_play}>
        <div className={styles.playIcon}>
                <BiPlay />
        </div>
        <div className={styles.reactionIcons}>
        {isFolderFilled ? (
            <AiFillFolder
              className={`${styles.folder} ${styles.active}`}
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorites(data);
              }}
            />
          ) : (
            <AiOutlineFolder
              className={styles.folder}
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

export default Home_Page_AlbumItem;
