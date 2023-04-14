import styles from "../pages/artist_page/styles.module.scss";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import Artist_Page_ArtistItem from "@/components/artist_page_artistItem";
import Artist_Page_TrackItem from "@/components/artist_page_trackItem";
import Artist_Page_AlbumItem from "@/components/artist_page_albumItem";
import Artist_Page_RelatedItem from "@/components/artist_page_relatedItem";
import Image from "next/image";

export default function ArtistPage({ artistData,
  trackData,
  albumData,
  relatedData }) {
  return (
    <MainLayout>
      <div
        className={styles.ArtistPage}
        style={{ backgroundImage: `url(${artistData.picture_xl})` }}>
        <div className={styles.container}>
          <Navbar title={"Artist"} />
          <Artist_Page_ArtistItem artistData={artistData} />
          <h2>Top songs </h2>
          <div className={styles.trackitem}>
              {trackData?.data.map((data, i) => (
                <Artist_Page_TrackItem key={i} data={data} />
              ))}
            </div>
            <h2>Top albums </h2>
          <div className={styles.albumitem}>
              {albumData?.data.map((data, i) => (
                <Artist_Page_AlbumItem key={i} data={data} />
              ))}
            </div>
            <h2>Related Artists </h2>
          <div className={styles.albumitem}>
              {relatedData?.data.map((data, i) => (
                <Artist_Page_RelatedItem key={i} data={data} />
              ))}
            </div>
        </div>
      </div>
    </MainLayout>
  );
}



export async function getStaticProps() {
  const resArtist = await fetch("https://api.deezer.com/artist/10583405");
  const resTrack = await fetch("https://api.deezer.com/artist/10583405/top?limit=3");
  const resAlbum = await fetch("https://api.deezer.com/artist/10583405/albums?limit=3");
  const resRelated = await fetch("https://api.deezer.com/artist/10583405/related?limit=3");

  
  
  const artistData = await resArtist.json();
  const trackData = await resTrack.json();
  const albumData = await resAlbum.json();
  const relatedData = await resRelated.json();





  return {
    props: {
      artistData,
      trackData,
      albumData,
      relatedData
    },
  };
}
