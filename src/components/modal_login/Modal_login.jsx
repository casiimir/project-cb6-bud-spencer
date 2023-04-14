import styles from "./index.module.scss";

const Modal_login = () => {
    return (
    <div className={styles.Modal_login}>
      <div className={styles.overlay}></div>
      <form>
        <input
          value
          onChange
          type="text"
          placeholder="Username..."
          required
        />
        <input
          value
          onChange
          type="text"
          placeholder="Password..."
          required
        />
        <button >Log In</button>
      </form>
    </div>
    )
  }


export default Modal_login







