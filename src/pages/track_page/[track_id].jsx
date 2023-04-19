import styles from "./styles.module.scss";
import Image from "next/image";
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BiHeart } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";
import React, { useState, useRef, useEffect } from "react";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import cielostellato from "../../../public/globalimages/cielostellato.jpeg";

export default function TrackPage({ trackData }) {
  return (
    <MainLayout>
      <div
        className={styles.TrackPage}
        style={{ backgroundImage: `url(${trackData.album.cover_xl})` }}
      >
        <div className={styles.container}>
          <Image
            className={styles.img}
            src={trackData.artist.picture_xl}
            width={500}
            height={500}
            alt={trackData.title}
          />
          <div className={styles.deezerPlayer}>
            <iframe
              title="deezer-widget"
              src={`https://widget.deezer.com/widget/dark/track/${trackData.id}?tracklist=false`}
              width="100%"
              height="130"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media; clipboard-write"
            ></iframe>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const resTrack = await fetch(
    `https://api.deezer.com/track/${context.query.track_id}`
  );
  const trackData = await resTrack.json();

  return {
    props: {
      trackData,
    },
  };
}
