import styles from "./index.module.scss";
import Image from "next/image";

const ArtistItem = ({ artist, topArtistAlbum }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ArtistItem}>
        <Image
          className={styles.img}
          src={artist.picture_medium}
          width={200}
          height={200}
          alt={artist.name}
        />
        <div className={styles.artist_text}>
          <h1>{artist.name}</h1>
          <p>{`N° Albums: ${artist.nb_album}`}</p>
          <p>{`Follower: ${artist.nb_fan}`}</p>
        </div>
      </div>
      <div className={styles.content_album}>
        {topArtistAlbum.data.map((data) => (
          <div className={styles.album} key={data.album.id}>
            <Image
              src={data.album.cover}
              alt={data.album.title}
              width={120}
              height={120}
            />
            <h2>{data.album.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistItem;
