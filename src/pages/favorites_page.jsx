import Link from "next/link";
import styles from "../pages/favorites_page/styles.module.scss"
import Artist_Page_TrackItem from "@/components/artist_page_trackItem";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";

export default function Favorites_page({data}) {
    return(
    <MainLayout>
      <div className={styles.Favorites_page}>
      <Link href="/">Go Back</Link>
        <p className={styles.title}>Favorites</p>
      <div className={styles.albumitem}>
        {data?.data.map((data, i) => (
          <div key={i} className={styles.trackItem}>
            <Artist_Page_TrackItem data={data} />
 
          </div>
        ))}
      </div>
      </div>
    </MainLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://api.deezer.com/artist/27/top?limit=10");
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }