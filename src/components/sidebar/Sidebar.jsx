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
import styles from "./index.module.scss";
import Link from "next/link";

const Sidebar = ({ setModalIsVisibility }) => {
  const onHandleClick = () => {
    setModalIsVisibility(true);
  };

  return (
    <div className={styles.Sidebar}>
      <div className={styles.icons_sidebar}>
        <div className={styles.logo}>
          <h4>LOGO</h4>
        </div>
        <Link href="/">
          <BiHomeAlt className={styles.icon} />
        </Link>
        <BiFolder className={styles.icon_desktop} />
        <BiSearch className={styles.icon_search} />
        <BiMusic className={styles.icon} />
        <BiUser
          onClick={onHandleClick}
          setModalIsVisibility={setModalIsVisibility}
          className={styles.icon}
        />
        <hr className={styles.hr} />
        <BiHeart className={styles.icon_desktop} />
        <BiShuffle className={styles.icon_desktop} />
        <BiStar className={styles.icon_desktop} />
      </div>
    </div>
  );
};

export default Sidebar;
