import styles from "./index.module.scss";
import {BiUser,BiHeart, BiDotsHorizontalRounded,BiPlay} from "react-icons/bi";
import Image from "next/image";
import {secondsToMinutes,padTo2Digits} from "@/utils/func"

const Home_Page_TrackItem = ({data, trackIndex}) => {

  return (
    
    <div className={styles.TrackItem}>
      <div className={styles.mainContent}>
      <p className={styles.index}>{data?.position?padTo2Digits(data?.position):padTo2Digits(trackIndex+1)}</p>
      <BiPlay className={styles.playIcon}/>
      <Image src={data.artist.picture_medium? data.artist.picture_medium : data.album.cover_medium } width={65} height={65} alt={data.title} />
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
      <BiHeart className={styles.heart} />
      <BiDotsHorizontalRounded className={styles.dots}/>
      </div>
      
      </div>
    </div>
  );
};

export default Home_Page_TrackItem;
