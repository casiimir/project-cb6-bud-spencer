import styles from "./index.module.scss";

const ItemList = ({ songs }) => {
  return (
    <div className={styles.songList}>
      {songs.map((song) => (
        <Item key={song.id} song={song} />
      ))}
    </div>
  );
};

export default ItemList;
