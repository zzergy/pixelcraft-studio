import styles from './Homepage.module.scss'
import logo from '../../images/logo.png'
import PixelButton from '../../Shared/PixelButton/PixelButton'
import { canvas, homepage } from '../../routes'
import { redirect, useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();

    const introText = "WELCOME TO PIXEL PERFECT CANVAS WHERE YOUR CREATIVITY MEETS PIXEL ART EXCELLENCE. CRAFT STUNNING AND DETAILED PIXEL ART WITH EASE. DIVE INTO A WORLD OF ENDLESS POSSIBILITIES AND BRING YOUR IMAGINATION TO LIFE, ONE PIXEL AT A TIME. START CREATING YOUR PIXELATED MASTERPIECE TODAY"

    const handleRedirect = () => {
        navigate(canvas)
    }

    return (
        <div className={styles.container}>
            <div className={styles.blurContainer}>
                <h2 className={styles.span}>UNLEASH YOUR INNER ARTIST WITH</h2>
                <img src={logo} alt='logo' className={styles.logo} />
                <span className={styles.span}>
                    {introText}
                </span>
            </div>
            <PixelButton label='BEGIN YOUR PIXEL QUEST' size='lg' onClick={handleRedirect} />
            <a href='https://www.markferrari.com/recent-artwork' className={styles.artworkCredits}>
                ARTWORK BY: MARK FERRARI
            </a>
        </div>
    )
}

export default Homepage