import references from "@/utils/references";
import Image from "next/image";
import styles from "../pages/login_page/index.module.scss";
import logo from "../../public/logo/budz.png";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  const onHandleHidePopup = () => {
    setErrorPopup(false);
  };

  const onHandleUsername = (e) => {
    setUserName(e.target.value);
  };

  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (userName === references.username && password === references.password) {
      if (typeof window !== "undefined") {
        localStorage.setItem("logged", true);
      }
      router.push(`/#`);
    } else {
      setErrorPopup(true);
    }
  };

  return (
    <div className={styles.Modal_login}>
      <p className={styles.info1}>
        Iscriviti per ricevere brani e podcast illimitati. Non è necessaria
        alcuna carta di credito.
      </p>
      {errorPopup && (
        <div className={styles.popup_container}>
          <div className={styles.popup_overlay}></div>
          <div className={styles.error_popup}>
            <p onClick={onHandleHidePopup}>x</p>
            <h4>Wrong Emeail or Password, please try again</h4>
          </div>
        </div>
      )}
      <div className={styles.containerLogin}>
        <Image
          src={logo}
          alt={"logo.png"}
          width={30}
          height={30}
          className={styles.logo}
        />
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="username"
            onChange={onHandleUsername}
            value={userName}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={onHandlePassword}
            value={password}
            required
          />
          <input type="submit" value="Login" className={styles.inputLogin} />
        </form>
      </div>
      <p className={styles.info2}>
        Per saperne di più su come Budz raccoglie, utilizza, condivide e
        protegge i tuoi dati personali, leggi l{"'"}informativa sulla privacy di
        budz.
      </p>
    </div>
  );
}
