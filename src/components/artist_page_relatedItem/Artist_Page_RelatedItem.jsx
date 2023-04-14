import styles from "./index.module.scss";
import Image from "next/image";

const Artist_Page_RelatedItem = ({ data }) => {
  return (
    <div className={styles.container}>
            <Image
              src={data.picture_medium}
              alt={data.name}
              width={120}
              height={120}
            />
            <div className={styles.text}>
            <h2>{data.name}</h2>
            <p>{`Album released: ${data.nb_album}`}</p>
            <p>{`Follwers: ${data.nb_fan}`}</p>
            </div>
          </div>
  );
};

export default Artist_Page_RelatedItem;
