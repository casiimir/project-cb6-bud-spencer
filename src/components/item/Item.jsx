import styles from "./index.module.scss";

const Item = ({ song }) => {
  return (
    <div className={styles.songItem}>
      <img src={song.album.cover_medium} alt={song.album.title} />
      <div className={styles.info}>
        <h3>{song.title}</h3>
        <p>{song.artist.name}</p>
        <p>{song.duration} seconds</p>
        <p>{song.rank} streams</p>
        <button>Like</button>
      </div>
    </div>
  );
};

export default Item;
