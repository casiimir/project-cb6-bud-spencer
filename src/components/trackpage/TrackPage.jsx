import styles from "./index.module.scss";
import Image from "next/image";
import Sidebar from "../sidebar";
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BiHeart } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";
import React, { useState, useRef, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

// import globalsong from "../../../public/globalimages/traccia.mp3";
import globalimages from "../../../public/globalimages/cielostellato.jpeg";
import {
  ImLoop2,
  ImShuffle,
  ImVolumeMedium,
  ImHeart,
  ImPlus,
  ImShare2,
} from "react-icons/im";

const TrackPage = () => {
  return (
    <div
      className={styles.Container}
      style={
        {
          // backgroundImage: `url(
          //   "https://www.cure-naturali.it/.imaging/default/dam/cure-naturali/articoli/vita-naturale/cielo-stellato.jpg/jcr:content.jpg"
          // )`,
        }
      }
    >
      <div className={styles.layeropaco}>
        <Image
          src={globalimages}
          width={412}
          height={780}
          alt={"layeroffuscato"}
        />{" "}
      </div>
      <div className={styles.overlay}>
        <Image
          src={
            "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80"
            // "https://www.cure-naturali.it/.imaging/default/dam/cure-naturali/articoli/vita-naturale/cielo-stellato.jpg/jcr:content.jpg"
          }
          width={350}
          height={350}
          alt={"cielo stellato"}
          className={styles.image}
        />
        <Image
          src={
            "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg"
          }
          width={220}
          height={220}
          alt={"album"}
          className={styles.imagealbum}
        />
      </div>{" "}
      <div className={styles.sidebarcontainer}>
        <Sidebar />
      </div>
      <div className={styles.artistsong}>
        <h1>artista</h1>
        <h3>canzone</h3>
      </div>
      <div className={styles.commands}>
        <TbPlayerSkipBack size="1.5em" />
        <button className={styles.button}>
          <TbPlayerPlayFilled className={styles.play} size="3em" />
        </button>

        <TbPlayerSkipForward size="1.5em" />
      </div>
      <div className={styles.desktop}>
        {/* <BiHeart className={styles.iconhearthdesktop} /> */}
        <ImHeart className={styles.iconhearthdesktop} size="1.5em" />
        <ImShare2 className={styles.iconasharedesktop} size="1.5em" />
        {/* <RxShare2 className={styles.iconasharedesktop} /> */}
        {/* <AiOutlinePlus className={styles.iconaplusdesktop} /> */}
        <ImPlus className={styles.iconaplusdesktop} size="1.5em" />
        <div className={styles.iconsfordesktopflexend}>
          <ImShuffle size="1.8em" />
          <ImLoop2 size="1.8em" />

          <ImVolumeMedium size="1.8em" />
        </div>
      </div>
      {/* <LineDrawer className={styles.randomimage} /> */}
      <div className={styles.barra}>
        {/* <p>ppppppppppppppppppppppppppppppppppppppp</p> */}
        <img
          src={"https://media.tenor.com/y5DrU1cjqkYAAAAd/sound-waves.gif"}
          alt="ciai"
        />
      </div>
      {/* <div className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, rerum.
        Quam nihil, eius quidem veniam, laborum, inventore optio recusandae
        perferendis beatae reprehenderit velit consequatur vero assumenda
        maiores eum error voluptatibus?
      </div> */}
      <div className={styles.containerfordesktoponly}></div>{" "}
      <div className={styles.staticplayer}>
        <ReactAudioPlayer
          src="https://cdns-preview-c.dzcdn.net/stream/c-c7f32280916bc10e989ca5f4ed3b8afb-7.mp3"
          autoPlay
          controls
        />
      </div>
    </div>
  );
};

export default TrackPage;
