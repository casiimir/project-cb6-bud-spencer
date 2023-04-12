import { BiHomeAlt, BiSearch, BiMusic, BiUser } from "react-icons/bi";
import styles from "./index.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.icons_sidebar}>
        <BiHomeAlt className={styles.icon} />
        <BiSearch className={styles.icon} />
        <BiMusic className={styles.icon} />
        <BiUser className={styles.icon} />
      </div>
    </div>
  );
};

export default Sidebar;
