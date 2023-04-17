import Image from "next/image";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.hero_content}>
        <div className={styles.content_img}>
          <Image
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
            width={100}
            height={250}
            alt="image-hero"
          />
        </div>
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
