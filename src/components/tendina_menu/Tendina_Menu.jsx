import { BiFolder, BiHeart, BiShuffle, BiStar } from "react-icons/bi";
import logo from "../../../public/logo/cuffie.png";
import Image from "next/image";
import styles from "./index.module.scss";

const Tendina_Menu = ({ tendina }) => {
  return (
    <div className={`${styles.Tendina_Menu} ${tendina && styles.show}`}>
      <div className={styles.boxLogo}>
        <div className={styles.logo2}>
          <Image src={logo} height={40} width={45} alt={"logo"} />
        </div>
        </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <BiFolder className={styles.icon} />
          <p>Playlist</p>
        </div>
        <div className={styles.box}>
          <BiHeart className={styles.icon} />
          <p>Favorites</p>
        </div>
        <div className={styles.box}>
          <BiShuffle className={styles.icon} />
          <p>Shuffle</p>
        </div>
        <div className={styles.box}>
          <BiStar className={styles.icon} />
          <p>Non lo so</p>
        </div>
      </div>
    </div>
  );
};
export default Tendina_Menu;
