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
import Image from "next/image";
import logo from "../../../public/logo/cuffie.png";

const Sidebar = ({ setModalIsVisibility }) => {
  const onHandleClick = () => {
    setModalIsVisibility(true);
  };

  return (
    <div className={styles.Sidebar}>
      <div className={styles.icons_sidebar}>
        <div className={styles.containerLogo}>
        <div className={styles.logo}>
          <Image src={logo} height={40} width={45} alt={"logo"} />
        </div>
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
        <Link className={styles.icon_desktop} href="/favorites_page">
          <BiHeart />
        </Link>
        <Link className={styles.icon_desktop} href="/shuffle_page">
          <BiShuffle />
        </Link>

        <BiStar className={styles.icon_desktop} />
      </div>
    </div>
  );
};

export default Sidebar;
