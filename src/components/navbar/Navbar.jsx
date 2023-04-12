import { HiMenuAlt1, HiOutlineBell } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h1 className={styles.title_home}>Home</h1>
      <div className={styles.content_icon_navbar}>
        <HiOutlineBell className={styles.icon_bell} />
        <HiMenuAlt1 className={styles.icon_menu} />
      </div>
      <div className={styles.content_icon_input}>
        <BiSearch className={styles.icon_search} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Navbar;
