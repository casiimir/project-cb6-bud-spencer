import styles from "./index.module.scss";
import Image from "next/image";

const Artist_Page_ArtistItem = ({ artistData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_artist}>
        <Image
          className={styles.img}
          src={artistData.picture_medium}
          width={200}
          height={200}
          alt={artistData.name}
        />
        <p>{`N° Albums: ${artistData.nb_album}`}</p>
        <p>{`Follower: ${artistData.nb_fan}`}</p>
      </div>
      <div className={styles.name_artist}>
        <h1>{artistData.name}</h1>
      </div>
    </div>
  );
};

export default Artist_Page_ArtistItem;
