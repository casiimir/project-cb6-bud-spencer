import styles from "./index.module.scss";
import Image from "next/image";

const Artist_Page_ArtistItem = ({ artistData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ArtistItem}>
        <Image
          className={styles.img}
          src={artistData.picture_medium}
          width={200}
          height={200}
          alt={artistData.name}
        />
        <div className={styles.artist_text}>
          <h1>{artistData.name}</h1>
          <p>{`N° Albums: ${artistData.nb_album}`}</p>
          <p>{`Follower: ${artistData.nb_fan}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Artist_Page_ArtistItem;
