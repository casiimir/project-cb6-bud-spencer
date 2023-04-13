import styles from "./index.module.scss";
import {BiUser,BiHeart, BiDotsHorizontalRounded} from "react-icons/bi";
import Image from "next/image";
import {minuteToSeconds} from "@/utils/func"

const TrackItem = ({ song }) => {

  return (
    
    <div className={styles.TrackItem}>
      <div className={styles.indexIcon}>
      <p className={styles.indice}>{song?.position}</p>
      <Image src={song?.artist.picture_small} width={40} height={40} alt={song.title} />
      </div>
      <div className={styles.contentTitle}>
        <p className={styles.title}>{song?.title_short}</p>
      <div className={styles.contentArtist}>
        <BiUser className={styles.icon} />
        <p className={styles.artist}>{song?.artist.name}</p>
      </div>
      </div>
      <div className={styles.info}>
      <p>{parseInt(minuteToSeconds(song.duration))}</p>
      <p>{song.rank}</p>
      
      <BiHeart className={styles.heart} />
      <BiDotsHorizontalRounded />
      </div>
    </div>
  );
};

export default TrackItem;
