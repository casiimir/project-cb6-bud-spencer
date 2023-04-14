import { TbError404 } from 'react-icons/tb';
import { BsSoundwave } from 'react-icons/bs';
import styles from "../pages/page_404/styles.module.scss"
import Image from "next/image";


const ErrorPage = () => {
    return(
        <div className={styles.ErrorPage}>
            <p>LOGO</p>
            <BsSoundwave className={styles.icon}/>
            <BsSoundwave className={styles.icon2}/>
            <Image src="https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={1400} height={1310} alt="image_page_404" />
            <TbError404 className={styles.iconError04}/>
            <p className={styles.titleError}>Ops... I did it again</p>
            <p className={styles.textError}>Page not found</p>
            <input className={styles.inputError} type="button" 
            value="Get Back" 
            onclick="window.location.reload()">
            </input>
        </div>
    )
}

export default ErrorPage
