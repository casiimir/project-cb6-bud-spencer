
import {BiUser,BiHeart, BiDotsHorizontalRounded,BiPlay} from "react-icons/bi";
import Image from "next/image";
import {secondsToMinutes,padTo2Digits} from "@/utils/func"
import styles from "./index.module.scss";


const Home_Page_TrackItem = ({ data }) => {

  return (
    
    <div className={styles.TrackItem}>
      <div className={styles.mainContent}>
      <p className={styles.indice}>{padTo2Digits(data?.position)}</p>
      <BiPlay className={styles.playIcon}/>
      <Image src={data?.artist.picture_medium} width={65} height={65} alt={data.title} />
      <div className={styles.contentTitle}>
        <p className={styles.title}>{data?.title_short}</p>
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
