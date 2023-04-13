import styles from "../pages/artist_page/styles.module.scss";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import ArtistItem from "@/components/artistItem";
import Image from "next/image";

export default function ArtistPage({ artist, topArtistAlbum }) {
  return (
    <MainLayout>
      <div
        className={styles.ArtistPage}
        style={{ backgroundImage: `url(${artist.picture_xl})` }}
      >
        <div className={styles.container}>
          <Navbar title={"Artist"} />
          <ArtistItem topArtistAlbum={topArtistAlbum} artist={artist} />
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.deezer.com/artist/10583405");
  const artist = await res.json();

  const response = await fetch(
    "https://api.deezer.com/artist/10583405/top?limit=10"
  );
  const topArtistAlbum = await response.json();
  return {
    props: {
      artist,
      topArtistAlbum,
    },
  };
}
