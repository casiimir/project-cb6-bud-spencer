import {
  BiHomeAlt,
  BiSearch,
  BiMusic,
  BiUser,
  BiFolder,
  BiHeart,
  BiShuffle,
  BiStar,
} from "react-icons/bi";
import Link from "next/link";
import styles from "./index.module.scss";

const Sidebar = () => {

  return (
    <div className={styles.Sidebar}>
      <div className={styles.icons_sidebar}>
        <div className={styles.logo}>
          <h4>LOGO</h4>
        </div>
        <BiHomeAlt className={styles.icon} />
        <BiFolder className={styles.icon_desktop} />
        <BiSearch className={styles.icon_search} />
        <BiMusic className={styles.icon} />
        <Link href="/about_page">
        <BiUser className={styles.icon}  />
        </Link>
        <hr className={styles.hr} />
        <Link href="/favorites_page">
        <BiHeart className={styles.icon_desktop} />
        </Link>
        <BiShuffle className={styles.icon_desktop} />
        <BiStar className={styles.icon_desktop} />
      </div>
    </div>
  );
};

export default Sidebar;
