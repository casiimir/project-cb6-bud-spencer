import styles from "./index.module.scss";
import Image from "next/image";

const Artist_Page_TrackItem = ({ data }) => {
  return (
    <div className={styles.container}>
            <Image
              src={data.album.cover_small}
              alt={data.title}
              width={120}
              height={120}
            />
           <div className={styles.text}>
            <h2>{data.title}</h2>
            <p>{`Album: ${data.album.title}`}</p>
          </div>
      </div>
 
  );
};

export default Artist_Page_TrackItem;
