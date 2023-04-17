import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import styles from "./styles.module.scss";
import Album_Page_AlbumItem from "@/components/album_page_albumItem";
import Home_Page_TrackItem from "@/components/home_page_trackItem";

export default function Search_page({ albumData }) {
  return (
    <MainLayout>
      <div
        className={styles.AlbumPage}
        style={{ backgroundImage: `url(${albumData?.cover_xl})` }}
      >
        <div className={styles.container}>
          <Navbar title={"Album"} />
          <div className={styles.albumItem}>
            <Album_Page_AlbumItem data={albumData} />
          </div>
          <h2 style={{ padding: `20px` }}>Tracks </h2>
          <div className={styles.trackItem}>
            {albumData?.tracks.data.map((data, i) => (
              <Home_Page_TrackItem key={i} data={data} trackIndex={i} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const resAlbum = await fetch(
    `https://api.deezer.com/album/${context.query.album_id}`
  );

  const albumData = await resAlbum.json();

  return {
    props: {
      albumData,
    },
  };
}
