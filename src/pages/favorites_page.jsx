import styles from "../pages/favorites_page/fave.module.scss";
import { useState, useEffect } from "react";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import { useRouter } from "next/router";
import Home_Page_TrackItem from "@/components/home_page_trackItem";

 const Favorites_Page = ({data, trackIndex }) => {
  const router = useRouter();

  const [favorites, setFavorites] = useState([]);

  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Definisco una funzione per rimuovere un brano dai preferiti
  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((f) => f.id !== id);
    setFavorites(updatedFavorites);

    // Salvo i dati dei brani preferiti in localStorage
    try {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (JSON.stringify(favorites) !== JSON.stringify(storedFavorites)) {
      setFavorites(storedFavorites);
    }
  }, [favorites]);
  

  const goToTrackPage = (trackId) => {
    router.push(`/track_page/${trackId}`);
  };


  return (
    <MainLayout>
    <div className={styles.FavoritesPage}>
      <h1 className={styles.title}>Your favourite tracks</h1>
      {favorites.length > 0 ? ( 
      <div className={styles.tracks}>
        {favorites.map((favTrack) => ( <Home_Page_TrackItem key={favTrack.id} 
        data={favTrack} 
        trackIndex={data?.position} 
        isHome={isHome}
        onRemoveFavorite={() => removeFavorite(favTrack.id)}
         />)
      )}
      </div>
    ) : (
        <p className={styles.noFavorites}>You do not have any favourites yet!</p>
      )
      }
    
    </div>
    </MainLayout>
  );
};

export default Favorites_Page;

