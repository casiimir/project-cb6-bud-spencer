import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  BiUser,
  BiDotsHorizontalRounded,
  BiFolder,
  BiPlay,
} from "react-icons/bi";

const Home_Page_AlbumItem = ({ data }) => {
  const router = useRouter();

  const single_album = () => {
    router.push(`/album_page/${data.id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.AlbumItem} onClick={single_album}>
        <Image
          className={styles.img}
          src={data?.cover_medium}
          width={80}
          height={80}
          alt={data?.title}
        />
        <div className={styles.text}>
          <h4>{data?.title}</h4>
          <p className={styles.artist_name_fluo}>{data?.title}</p>
          <div className={styles.contentArtist}>
            <BiUser className={styles.icon} />
            <p className={styles.artist}>{data?.artist.name}</p>
          </div>
        </div>
      </div>
      <div className={styles.icons_play}>
        <div className={styles.playIcon}>
          <BiPlay />
        </div>
        <div className={styles.reactionIcons}>
          <BiFolder />
          <BiDotsHorizontalRounded className={styles.dots} />
        </div>
      </div>
    </div>
  );
};

export default Home_Page_AlbumItem;
