import Sidebar from "@/components/sidebar";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
