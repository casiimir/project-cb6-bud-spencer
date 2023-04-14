import { TbError404 } from 'react-icons/tb';
import styles from "../pages/page_404/styles.module.scss"


const ErrorPage = () => {
    return(
        <div className={styles.ErrorPage}>
            <p>LOGO</p>
            <TbError404 className={styles.iconError}/>
            <p className={styles.titleError}>Ops I did it again</p>
            <input className={styles.inputError} type="button" 
            value="Reload" 
            onclick="window.location.reload()">
            </input>
        </div>
    )
}

export default ErrorPage