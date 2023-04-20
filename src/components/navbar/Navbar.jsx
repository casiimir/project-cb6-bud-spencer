import { HiMenuAlt1 } from "react-icons/hi";
import { BiSearchAlt, BiUserX } from "react-icons/bi";
import styles from "./index.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import Tendina_Menu from "../tendina_menu";

const Navbar = ({ title }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [tendina, setTendina] = useState(false);
  const router = useRouter();

  const toggleTendina = () => {
    setTendina((prev) => !prev);
  };

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
        <HiMenuAlt1 onClick={toggleTendina} className={styles.icon_menu} />
      </div>
      <Tendina_Menu tendina={tendina} />
      <div className={styles.content_icon_input}>
        <BiUserX className={styles.icon_bell} />
        <BiSearchAlt className={styles.icon_search} />
        <form onSubmit={onSubmit}>
          <input
            id="ancor"
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
