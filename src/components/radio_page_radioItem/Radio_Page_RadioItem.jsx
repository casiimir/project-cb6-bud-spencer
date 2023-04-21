import styles from "./index.module.scss";
import Image from "next/image";
import { useState } from "react";


const Genre_Page_GenreItem = ({ data }) => {

  const onHandleSetGenre = (setSelectValue, ) => {
    setSelectValue(`${data?.radios[0].tracklist}`)
  };
  
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${data?.radios[0].picture_medium})` }}
    onCLick={onHandleSetGenre}
    >
     <p className={styles.text}> {data?.title}</p>
       </div>
  );
};

export default Genre_Page_GenreItem;
