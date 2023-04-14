import styles from "./index.module.scss";
import Image from "next/image";
import Sidebar from "../sidebar";
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BiHeart } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";

const TrackPage = () => {
  return (
    <div
      className={styles.Container}
      style={{
        backgroundImage: `url(
          "https://www.cure-naturali.it/.imaging/default/dam/cure-naturali/articoli/vita-naturale/cielo-stellato.jpg/jcr:content.jpg"
        )`,
      }}
    >
      {/* <div className={styles.backgroundopaquecontainer}>
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wlkNzN8Nvp1RUwLsgdtjTnR9WPM3_Sl1Eg&usqp=CAU"
          }
          width={800}
          height={800}
          className={styles.backgroundopaque}
        />
      </div> */}
      <div className={styles.overlay}>
        <Image
          src={
            "https://www.cure-naturali.it/.imaging/default/dam/cure-naturali/articoli/vita-naturale/cielo-stellato.jpg/jcr:content.jpg"
          }
          width={350}
          height={350}
          alt={"cielo stellato"}
          className={styles.image}
        />
        <Image
          src={"https://picsum.photos/100"}
          width={220}
          height={220}
          alt={"album"}
          className={styles.imagealbum}
        />
      </div>
      <div className={styles.sidebarcontainer}>
        <Sidebar />
      </div>

      <div className={styles.artistsong}>
        <h1>artista</h1>
        <h3>canzone</h3>
      </div>
      <div className={styles.commands}>
        <TbPlayerSkipBack />
        <button className={styles.button}>
          <TbPlayerPlayFilled className={styles.play} />
        </button>

        <TbPlayerSkipForward />
      </div>
      <div className={styles.desktop}>
        <BiHeart className={styles.iconhearthdesktop} />
        <RxShare2 className={styles.iconasharedesktop} />
        <AiOutlinePlus className={styles.iconaplusdesktop} />
      </div>
      <div className={styles.barra}>
        <p>ppppppppppppppppppppppppppppppppppppppp</p>
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, rerum.
        Quam nihil, eius quidem veniam, laborum, inventore optio recusandae
        perferendis beatae reprehenderit velit consequatur vero assumenda
        maiores eum error voluptatibus?
      </div>

      <div className={styles.containerfordesktoponly}></div>
    </div>
  );
};

export default TrackPage;
