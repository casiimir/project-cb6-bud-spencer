import styles from "./index.module.scss";
import {BiUser,BiHeart,} from "react-icons/bi";
import Image from "next/image";

const TrackItem = ({ song }) => {

  const minute = (second) => {
    const sec = second / 60;
    return sec;
  };
  return (
    
    <div className={styles.TrackItem}>
      <p className={styles.indice}>{1}</p>
      <Image src={song?.contributors[0].picture_small} width={40} height={40} alt={song.album.title} />
      <div className={styles.contentTitle}>
        <p className={styles.title}>{song.title_short}</p>
      <div className={styles.contentArtist}>
        <BiUser className={styles.icon} />
        <p className={styles.artist}>{song.artist.name}</p>
      </div>
      </div>
      <p>{parseInt(minute(song.duration))}</p>
      <p>{song.rank}</p>
      <BiHeart className={styles.heart} />
      <p>...</p>
    </div>
  );
};

export default TrackItem;
