import styles from "../pages/favoriteAlbum_page/favoriteAlbum_page.module.scss";
import { useState, useEffect } from "react";
import { BiUser,  BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import {AiOutlineFolder, AiFillFolder} from "react-icons/ai"
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Home_Page_AlbumItem from "@/components/home_page_albumItem";
import { useRouter } from "next/router";
import Image from "next/image";


 const FavoriteAlbum_Page = ({data, trackIndex }) => {
  const router = useRouter();

  
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    } catch (error) {
      console.error(error);
    }
  }, []);


  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((f) => f.id !== id);
    setFavorites(updatedFavorites);

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
  }, []);
  

  const single_album = () => {
    router.push(`/album_page/${data.id}`);
  };


  return (
    <MainLayout>
    <div className={styles.FavoriteAlbumPage}>
      <h1 className={styles.title}>Your favourite Albums</h1>

      <Home_Page_AlbumItem></Home_Page_AlbumItem>
      
    </div>
    </MainLayout>
  );
};

export default FavoriteAlbum_Page;
