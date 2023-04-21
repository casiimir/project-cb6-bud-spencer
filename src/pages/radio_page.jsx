import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Artist_Page_TrackItem from "@/components/artist_page_trackItem";
import Radio_Page_radioItem from "@/components/radio_page_radioItem";
import styles from "../pages/radio_page/styles.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "@/components/navbar";
export default function RadioPage({ dataRadioList, dataRadioTracks }) {
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
      <div className={styles.radio_page}>
   
       <div className={styles.navbar_container}> <Navbar title={"Radio"} /></div>
        <div className={styles.container}>
          <div className={styles.genre_list}>
            {dataRadioList?.data.map((data, i) => (
              <div key={i} className={styles.genre_item} index={i}>
                <Radio_Page_radioItem setSelectValue={setSelectValue}
                  data={data}
                  key={i}
                />
              </div>
            ))}
          </div>
          <div className={styles.track_list}>
            {dataRadioTracks?.data.map((data, i) => (
              <div key={i} className={styles.track_item} index={i}>
                <Artist_Page_TrackItem 
                  data={data}
                  key={i}
                  action={single_track}
                />
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const resRadioList = await fetch("https://api.deezer.com/radio/genres");
  const resRadioTracks = await fetch(
    "https://api.deezer.com/radio/37151/tracks"
  );

  const dataRadioList = await resRadioList.json();
  const dataRadioTracks = await resRadioTracks.json();

  return {
    props: {
      dataRadioList,
      dataRadioTracks,
    },
  };
}

