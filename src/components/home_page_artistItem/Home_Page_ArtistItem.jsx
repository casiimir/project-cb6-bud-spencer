import styles from "./index.module.scss";
import Image from "next/image";
import { BiDotsHorizontalRounded,BiPlay} from "react-icons/bi";

const Home_Page_ArtistItem = ({ data }) => {
  return (
    <div className={styles.container}>
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
      <div className={styles.playIcon}>
      <BiPlay/>
      </div>
      <BiDotsHorizontalRounded className={styles.dots}/>
       </div>
  );
};

export default Home_Page_ArtistItem;
