import styles from "./index.module.scss";
import Image from "next/image";
import {BiUser, BiDotsHorizontalRounded,BiPlay} from "react-icons/bi";


const Home_Page_AlbumItem = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.AlbumItem}>
        <Image
          className={styles.img}
          src={data?.cover_medium}
          width={80}
          height={80}
          alt={data?.name}
        />
        <div className={styles.text}>
          <h4>{data?.title}</h4> 
          <div className={styles.contentArtist}>
        <BiUser className={styles.icon} />
        <p className={styles.artist}>{data?.artist.name}</p>
      </div>       
            </div>

      </div>
      <div className={styles.playIcon}>
      <BiPlay/>
      </div>
      <BiDotsHorizontalRounded className={styles.dots}/>
       </div>
  );
};

export default Home_Page_AlbumItem;
