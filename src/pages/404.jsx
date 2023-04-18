import { TbError404 } from "react-icons/tb";
import styles from "./404/styles.module.scss";
import logo from "../../public/logo/budz.png"
//import logo from "../../public/logo/budz_cuffie.png"

import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className={styles.ErrorPage}>
      <div className={styles.error}>
      <TbError404 className={styles.iconError} />
      <div className={styles.contentLogo}>
      <Image
        src={logo}
        width={80}
        height={80}
        alt={"image_logo_404"}
        className={styles.logo}
      />
      </div>
      </div>
      <div className={styles.infoError}>
      <p className={styles.titleError}>Ops... I did it again</p>
      <p className={styles.textError}>Page not found</p>
      <button className={styles.btnError}>Get back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
