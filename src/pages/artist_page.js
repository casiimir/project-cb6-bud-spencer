import styles from "../pages/artist_page/styles.module.scss";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import ArtistItem from "@/components/artistItem";
import Image from "next/image";

export default function ArtistPage({artist}){


return(
<div className={styles.ArtistPage} >
    <div className={styles.overlay}></div>
    <div className={styles.img}>
<Image
            src={artist.picture_xl}
            width={700}
            height={250}
            alt={artist.name}
          />
</div>
<MainLayout>
<Navbar/>

        <ArtistItem  artist={artist} />
      

</MainLayout>   
</div>
)

}

export async function getStaticProps() {
    const res = await fetch("https://api.deezer.com/artist/10583405")
    const artist = await res.json() 
  
    return {
  props: {
    artist,
  }
    }
  }