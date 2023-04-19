import styles from "./styles.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import YoutubeModal from "@/components/youtubeModal";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";

export default function TrackPage({ trackData, youtubeId }) {
  const [youtubeModal, setYoutubeModal] = useState(false);

  const openModalYoutube = () => {
    setYoutubeModal(true);
  };
  const closeModalYoutube = () => {
    setYoutubeModal(false);
  };

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
          <div className={styles.player}>
            <div className={styles.deezerPlayer}>
              <iframe
                title="deezer-widget"
                src={`https://widget.deezer.com/widget/dark/track/${trackData.id}?tracklist=false`}
                width="100%"
                height="130"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media; clipboard-write"
              ></iframe>
            </div>
            <h4 onClick={openModalYoutube}>Guarda il video</h4>
          </div>
          {youtubeModal && (
            <YoutubeModal
              closeModalYoutube={closeModalYoutube}
              youtubeId={youtubeId}
            />
          )}
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

  const searchQuery =
    trackData.title
      .replaceAll(" ", "+")
      .replaceAll(",", "+")
      .replaceAll(".", "+") +
    "+" +
    trackData.artist.name
      .replaceAll(" ", "+")
      .replaceAll(",", "+")
      .replaceAll(".", "+");

  const resYoutube = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=AIzaSyDXm7O6AY7HQGSWdWBLmvyMM1RC9D1NHro`
  );

  const youtubeData = await resYoutube.json();

  return {
    props: {
      trackData,
      youtubeId: youtubeData.items[0].id.videoId,
    },
  };
}
