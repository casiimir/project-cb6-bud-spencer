import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiDotsHorizontalRounded, BiPlay } from "react-icons/bi";

const Home_Page_ArtistItem = ({ data }) => {
  const router = useRouter();

  const single_artist = () => {
    router.push(`/artist_page/${data.id}`);
  };

  return (
    <div className={styles.container} onClick={() => single_artist()}>
      <div className={styles.ArtistItem}>
        <Image
          className={styles.img}
          src={data?.picture_medium}
          width={80}
          height={80}
          alt={data?.name}
        />
        <h4 className={styles.artistName}>{data?.name}</h4>
      </div>
      <div className={styles.icons_play}>
        <p className={styles.artist_name}>
        {data?.name}
        </p>
        <div className={styles.playIcon}>
          <BiPlay />
        </div>
        <BiDotsHorizontalRounded className={styles.dots} />
      </div>
    </div>
  );
};

export default Home_Page_ArtistItem;
