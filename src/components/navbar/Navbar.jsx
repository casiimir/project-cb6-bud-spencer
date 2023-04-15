import { HiMenuAlt1, HiOutlineBell } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import styles from "./index.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = ({ title }) => {
  const [inputSearch, setInputSearch] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputSearch.trim()) {
      router.push(`/search_page/${inputSearch.trim()}`);
      setInputSearch("");
    }
  };
  return (
    <div className={styles.Navbar}>
      <h1 className={styles.title_home}>{title}</h1>
      <div className={styles.content_icon_navbar}>
        <HiMenuAlt1 className={styles.icon_menu} />
      </div>
      <div className={styles.content_icon_input}>
        <HiOutlineBell className={styles.icon_bell} />
        <BiSearchAlt className={styles.icon_search} />
        <form onSubmit={onSubmit}>
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
