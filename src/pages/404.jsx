import { TbError404 } from "react-icons/tb";
import styles from "./404/styles.module.scss";
import budz from "../../public/logo/budz.png"
import broken_cassette from "../../public/logo/broken_cassette.png"
import deezer from "../../public/logo/deezer.png"
import { useRouter } from "next/router";
import Image from "next/image";

const ErrorPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push(`/`);
  };
  return (

    
    <div className={styles.ErrorPage}>

      <div className={styles.logo}>

      <Image
        src={budz}
        width={125}
        height={45}
        alt={"logo_budz"}
        className={styles.budz}
      
      />
     
      </div>
      <div className={styles.cassette}>
      <Image 
        src={broken_cassette}
        width={570}
        height={530}
        alt={"image_logo_404"}
      
      />
      </div>
      </div>
      <div className={styles.infoError}>
      <h1 className={styles.titleError}>Oops... I did it again!</h1>
      <h2 className={styles.textError}>Page not found</h2>
      <button onClick={() => goHome()} className={styles.btnError}>Rewind the tape!</button>
      </div>
      <div   className={styles.deezer_container}>
      <p className={styles.logo_title} >Powered by :</p>
      <Image
        src={deezer}
        width={120}
        height={23}
        alt={"logo_deezer"}
        className={styles.deezer}
      
      />
      </div>
    </div>
  );
};

export default ErrorPage;
