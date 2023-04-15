import Sidebar from "@/components/sidebar";
import styles from "./index.module.scss";

const MainLayout = ({ children, setModalIsVisibility }) => {
  return (
    <div className={styles.MainLayout}>
      <Sidebar 
      setModalIsVisibility={setModalIsVisibility}/>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
