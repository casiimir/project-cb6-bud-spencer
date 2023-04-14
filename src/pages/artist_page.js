import styles from "../pages/artist_page/styles.module.scss";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import Artist_Page_ArtistItem from "@/components/artist_page_artistItem";
import Artist_Page_TrackItem from "@/components/artist_page_trackItem";
import Artist_Page_AlbumItem from "@/components/artist_page_albumItem";
import Artist_Page_RelatedItem from "@/components/artist_page_relatedItem";
import Image from "next/image";

export default function ArtistPage({
  artistData,
  trackData,
  albumData,
  relatedData,
}) {
  return (
    <MainLayout>
      <div
        className={styles.ArtistPage}
        style={{ backgroundImage: `url(${artistData.picture_xl})` }}
      >
        <div className={styles.container}>
          <Navbar title={"Artist"} />
          <Artist_Page_ArtistItem artistData={artistData} />
          <div className={styles.content_category_page}>
            <h2>Top songs </h2>

            <div className={styles.albumitem}>
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
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const resArtist = await fetch("https://api.deezer.com/artist/7371074");
  const resTrack = await fetch(
    "https://api.deezer.com/artist/7371074/top?limit=10"
  );
  const resAlbum = await fetch(
    "https://api.deezer.com/artist/7371074/albums?limit=10"
  );
  const resRelated = await fetch(
    "https://api.deezer.com/artist/7371074/related?limit=10"
  );

  const artistData = await resArtist.json();
  const trackData = await resTrack.json();
  const albumData = await resAlbum.json();
  const relatedData = await resRelated.json();

  return {
    props: {
      artistData,
      trackData,
      albumData,
      relatedData,
    },
  };
}
