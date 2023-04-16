import styles from "./styles.module.scss";
import { useRef } from "react";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import Artist_Page_ArtistItem from "@/components/artist_page_artistItem";
import Artist_Page_TrackItem from "@/components/artist_page_trackItem";
import Artist_Page_AlbumItem from "@/components/artist_page_albumItem";
import Artist_Page_RelatedItem from "@/components/artist_page_relatedItem";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function ArtistPage({
  artistData,
  trackData,
  albumData,
  relatedData,
}) {
  const artistRef = useRef(null);
  const albumRef = useRef(null);
  const tracksRef = useRef(null);

  let scrollArtist = 0;
  let scrollAlbum = 0;
  let scrollTracks = 0;

  const forward = (refDiv, scrollItem) => {
    switch (scrollItem) {
      case "artist":
        if (scrollArtist < refDiv.current.scrollWidth) {
          scrollArtist += 400;
          refDiv.current.scrollLeft = scrollArtist;
        }
        break;
      case "album":
        if (scrollAlbum < refDiv.current.scrollWidth) {
          scrollAlbum += 400;
          refDiv.current.scrollLeft = scrollAlbum;
        }
        break;
      case "track":
        if (scrollTracks < refDiv.current.scrollWidth) {
          scrollTracks += 400;
          refDiv.current.scrollLeft = scrollTracks;
        }
        break;
    }
  };

  const back = (refDiv, scrollItem) => {
    switch (scrollItem) {
      case "artist":
        if (scrollArtist > 0) {
          scrollArtist -= 400;
          refDiv.current.scrollLeft = scrollArtist;
        }
        break;
      case "album":
        if (scrollAlbum > 0) {
          scrollAlbum -= 400;
          refDiv.current.scrollLeft = scrollAlbum;
        }
        break;
      case "track":
        if (scrollTracks > 0) {
          scrollTracks -= 400;
          refDiv.current.scrollLeft = scrollTracks;
        }
        break;
    }
  };

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
            <div className={styles.box_container}>
              <h2>Top songs </h2>
              <div className={styles.buttons}>
                <BiChevronLeft
                  className={styles.btn_scroll}
                  onClick={() => back(artistRef, "artist")}
                />

                <BiChevronRight
                  className={styles.btn_scroll}
                  onClick={() => forward(artistRef, "artist")}
                />
              </div>
            </div>
            <div className={styles.albumitem} ref={artistRef}>
              {trackData?.data.map((data, i) => (
                <Artist_Page_TrackItem key={i} data={data} />
              ))}
            </div>
            <div className={styles.box_container}>
              <h2>Top albums </h2>
              <div className={styles.buttons}>
                <BiChevronLeft
                  className={styles.btn_scroll}
                  onClick={() => back(albumRef, "album")}
                />

                <BiChevronRight
                  className={styles.btn_scroll}
                  onClick={() => forward(albumRef, "album")}
                />
              </div>
            </div>
            <div className={styles.albumitem} ref={albumRef}>
              {albumData?.data.map((data, i) => (
                <Artist_Page_AlbumItem key={i} data={data} />
              ))}
            </div>
            <div className={styles.box_container}>
              <h2>Related Artists </h2>
              <div className={styles.buttons}>
                <BiChevronLeft
                  className={styles.btn_scroll}
                  onClick={() => back(tracksRef, "track")}
                />

                <BiChevronRight
                  className={styles.btn_scroll}
                  onClick={() => forward(tracksRef, "track")}
                />
              </div>
            </div>
            <div className={styles.albumitem} ref={tracksRef}>
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

export async function getServerSideProps(context) {
  const resArtist = await fetch(
    `https://api.deezer.com/artist/${context.query.artist_id}`
  );
  const resTrack = await fetch(
    `https://api.deezer.com/artist/${context.query.artist_id}/top?limit=10`
  );
  const resAlbum = await fetch(
    `https://api.deezer.com/artist/${context.query.artist_id}/albums?limit=10`
  );
  const resRelated = await fetch(
    `https://api.deezer.com/artist/${context.query.artist_id}/related?limit=10`
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
