import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import AboutPage from "@/components/about_page";
import Link from "next/link";

export default function About( ) {
    return (
      <MainLayout>
        <Link href="/">Go Back</Link>
      <AboutPage />
      </MainLayout>
  
    )
}
  
