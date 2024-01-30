import { IconDefinition, faFaceFrown } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './ErrorPage.module.scss'
import PixelButton from "../PixelButton/PixelButton"
import { homepage } from "../../routes"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(homepage)
    }

    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faFaceFrown} className={styles.sadFaceIcon} size="8x" />
            <h2>Oops...</h2>
            <span className={styles.text}>The pixel path you're on doesn't exist!<br />
                Let's go back to the starting point and explore again.
            </span>
            <PixelButton label='GO BACK' onClick={handleRedirect} />
        </div>
    )
}

export default ErrorPage;