import { useState } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import ArtistPageTrackItem from "@/components/artist_page_trackItem";
import styles from "../pages/shuffle_page/shuffle.module.scss";

export default function ShufflePage({ data }) {

  const [currentTrack, setCurrentTrack] = useState(false);
  const [playingTrackIndex, setPlayingTrackIndex] = useState(null);

  const playTrack = (trackUrl, index) => {  
    if (currentTrack) {
      currentTrack.pause();
      if (playingTrackIndex === index) {
        setPlayingTrackIndex(null);
        return;
      }
    }
    const audio = new Audio(trackUrl);

    audio.onended = () => {
      setPlayingTrackIndex(null);
    };

    audio?.play();
    setCurrentTrack(audio);
    setPlayingTrackIndex(index);
  };

  return (
    <MainLayout>
      
      <div className={styles.ShufflePage}>
      <h2>Shuffle</h2>
      <div className={styles.albumitm}>
        {data?.data.map((data, i) => (
          <div key={i} className={styles.trackItm}>
            <ArtistPageTrackItem data={data} />
            <button className={styles.playBtn}
              onClick={() => playTrack(data.preview, i)}>
              {playingTrackIndex === i ? (
                <BsFillPauseCircleFill size={30} />
                ) : (
              <BsFillPlayCircleFill size={30} />
            )}
            </button>
          </div>
        ))}
      </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.deezer.com/user/5277344544/flow");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}




  // const playTrack = (trackUrl, index) => {
  //   if (index === playingTrackIndex) {
  //     if (currentTrack.paused) {
  //       currentTrack.play();
  //     } else {
  //       currentTrack.pause();
  //     }
  //     return;
  //   }

  //   if (currentTrack) {
  //     currentTrack.pause();
  //   }

  //   const audio = new Audio(trackUrl);

  //   audio.addEventListener("ended", () => {
  //     setPlayingTrackIndex(null);
  //   });

  //   audio.play();
  //   setCurrentTrack(audio);
  //   setPlayingTrackIndex(index);
  // };


  ////


//   const playTrack = (trackUrl, index) => {
//     if (playingTrackIndex === index) {
//       if (currentTrack.paused) {
//         currentTrack.play();
//       } else {
//         currentTrack.pause();
//       }
//     } else {
//       if (currentTrack) {
//         currentTrack.pause();
//       }
//       const audio = new Audio(trackUrl);
//       audio.onended = () => {
//         setPlayingTrackIndex(null);
//       };
//       audio.play();
//       setCurrentTrack(audio);
//       setPlayingTrackIndex(index);
//     }
// };

/////

// const playTrack = (trackUrl, index) => {
//   if (playingTrackIndex === index) {
//     if (currentTrack.paused) {
//       currentTrack.play();
//     } else {
//       currentTrack.pause();
//     }
//   } else {
//     if (currentTrack) {
//       currentTrack.pause();
//     }
//     const audio = new Audio(trackUrl);
//     audio.onended = () => {
//       setPlayingTrackIndex(null);
//     };
//     audio.play();
//     setCurrentTrack(audio);
//     setPlayingTrackIndex(index);
//   }
// };


  

