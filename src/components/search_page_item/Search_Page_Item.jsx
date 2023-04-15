import Image from "next/image";
import { shortDescription } from "@/utils/func";
import styles from "./index.module.scss";

const Search_Page_Item = ({ item }) => {
  return (
    <div className={styles.Search_Page_Item}>
      <Image
        src={item.album.cover_medium}
        width={200}
        height={200}
        alt={item.album.title}
      />
      <p className={styles.name_artist}>{item.artist.name}</p>
      <p className={styles.title_album}>{shortDescription(item.album.title)}</p>
    </div>
  );
};
export default Search_Page_Item;
