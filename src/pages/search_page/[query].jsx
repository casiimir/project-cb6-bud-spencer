import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import Search_Page_Item from "@/components/search_page_item";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function Search_page({ data }) {
  console.log(data);
  const router = useRouter();

  return (
    <MainLayout>
      <Navbar title={"Budz"} />

      <p
        className={styles.text}
      >{`I risultati della tua ricerca '${router.query.query}'`}</p>
      <div className={styles.content_search}>
        {data.length === 0 && <h4>Nessun risultato</h4>}
        {data.map((item, i) => (
          <Search_Page_Item item={item} key={i} />
        ))}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.deezer.com/search?q=${context.query.query}`
  );
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
}
