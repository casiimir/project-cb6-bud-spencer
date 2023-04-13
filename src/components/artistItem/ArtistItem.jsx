import styles from "./index.module.scss";
import Image from "next/image";

const ArtistItem = ({ artist }) => {
  return (
    <div className={styles.ArtistItem}>
     <Image
            className={styles.img}
            src={artist.picture_medium}
            width={200}
            height={200}
            alt={artist.name}
          />
          <div className={styles.artist_text}>
          
      <h3>{artist.name}</h3>
      <p>{`N° Albums: ${artist.nb_album}`}</p>
      <p>{`Follower: ${artist.nb_fan}`}</p>
      </div>
    </div>
  );
};


export default ArtistItem;
