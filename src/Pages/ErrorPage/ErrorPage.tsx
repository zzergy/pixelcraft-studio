import { faFaceFrown } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faFaceFrown} className={styles.sadFaceIcon} size="8x" />
            <h2>Oops..</h2>
            <span className={styles.text}>The pixel path you're on doesn't exist!<br />
                Let's go back to the starting point and explore again.
            </span>
        </div>
    )
}

export default ErrorPage;