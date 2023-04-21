import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Artist_Page_TrackItem from "@/components/artist_page_trackItem";
import styles from "../pages/genre_page/styles.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "@/components/navbar";
export default function GenrePage({ dataGenreList, dataGenreTracks }) {
  const router = useRouter();

  const single_track = (item) => {
    router.push(`/track_page/${item.id}`);
  };
  const [selectValue, setSelectValue] = useState("");
  //  const [optionFetch, setOptionFetch] = useState([]);

  const onHandleInput = (e) => setSelectValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    appSetSelectValue(() => selectValue);
  };

  // useEffect(() => {
  //   GET(`/products/categories/`).then((data) => setOptionFetch(() => data));
  // }, []);

  return (
    <MainLayout>
      <div className={styles.Genre_page}>
        <Navbar title={"Genre"} />
        {/* <div className={styles.track_list_container}>
          <div className={styles.track_list}>
            {dataFirstGenre?.data.map((data, i) => (
              <div key={i} className={styles.track_item}>
                <Artist_Page_TrackItem
                  data={data}
                  key={i}
                  action={single_track}
                />
              </div>
            ))}
          </div>
        </div> */}
        <div className={styles.select}>
          <form onSubmit={onHandleSubmit}>
            <label>Please select a category:</label>
            <select onChange={onHandleInput} name="selectcategory">
              {/* {dataGenreList.map((genre, i) => (
                <option value={genre.data.id} key={i}>
                  {genre.data.title}
                </option>
              ))} */}
            </select>
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const resGenreList = await fetch("https://api.deezer.com/genre/0/radios");
  const resGenreTracks = await fetch(
    "https://api.deezer.com/radio/42122/tracks"
  );

  const dataGenreList = await resGenreList.json();
  const dataGenreTracks = await resGenreTracks.json();

  return {
    props: {
      dataGenreList,
      dataGenreTracks,
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
