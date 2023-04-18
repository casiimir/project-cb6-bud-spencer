import styles from "./index.module.scss";
import Image from "next/image";

const Artist_Page_TrackItem = ({ data, action }) => {
  return (
    <div className={styles.container} onClick={() => action(data)}>
      <Image
        src={data.album.cover_medium}
        alt={data.title}
        width={120}
        height={120}
      />
      <div className={styles.text}>
        <h4>{data.title}</h4>
        <p>{`Album: ${data.album.title}`}</p>
      </div>
    </div>
  );
};

export default Artist_Page_TrackItem;
