import styles from "./index.module.scss";
import FaHeartbeat from "react-icons/fa";

// const Item = ({ song }) => {
const TrackItem = ({ song }) => {
  return (
    //qui si andrà a prendere dalla chiamata all'Api :  https://api.deezer.com/chart/0/tracks
    <div className={styles.songItem}>
      {/* <img src={song.album.picture_small} alt={song.album.title_short} /> */}
      {/* <img src={data.album.cover_small} alt={data.album.title_short} /> */}
      <h3>{song.title}</h3>
      {/* <p>{data.artist.name}</p> */}
      {/* <div className={styles.info}>
        <p>{data.duration} seconds</p>
        <p>{data.rank} streams</p>
        <button><FaHeartbeat /></button>
      </div> */}
    </div>
  );
};

export default TrackItem;
