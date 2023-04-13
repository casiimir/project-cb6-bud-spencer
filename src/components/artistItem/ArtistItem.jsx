import styles from "./index.module.scss";
import Image from "next/image";
import {RiHeartsFill} from "react-icons/ri";
import {BsSoundwave} from "react-icons/bs";

const ArtistItem = ({ singer }) => {

    return (
      <div className={styles.ArtistItem}>
        <Image src={singer?.picture_small} width={40} height={40} alt={singer.title} />
        <div className={styles.contentArtistName}>
          <p className={styles.ArtistName}>{singer.name}</p>
        <div className={styles.contentArtist}>
          <RiHeartsFill className={styles.hearts} />
          <p>Followers</p>
        </div>
        </div>
        <BsSoundwave className={styles.sound} />
        <p>...</p>
      </div>
    );
  };
  
  export default ArtistItem;