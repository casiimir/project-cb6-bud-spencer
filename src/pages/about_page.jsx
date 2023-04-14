import Link from "next/link";
import Image from "next/image";
import styles from "./about_page/styles.module.scss";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import AboutPage from "@/components/about_page";

export default function About( ) {
    return (
      <MainLayout>
      <AboutPage />
      </MainLayout>
  
    )
}
  

    
   