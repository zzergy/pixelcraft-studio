import styles from './Homepage.module.scss'
import logo from '../../images/logo.png'

const Homepage = () => {
    const introText = "WELCOME TO PIXEL PERFECT CANVAS WHERE YOUR CREATIVITY MEETS PIXEL ART EXCELLENCE. CRAFT STUNNING AND DETAILED PIXEL ART WITH EASE. DIVE INTO A WORLD OF ENDLESS POSSIBILITIES AND BRING YOUR IMAGINATION TO LIFE, ONE PIXEL AT A TIME. START CREATING YOUR PIXELATED MASTERPIECE TODAY"

    return (
        <div className={styles.container}>
            <div className={styles.blurContainer}>
                <h2 className={styles.span}>UNLEASH YOUR INNER ARTIST WITH</h2>
                <img src={logo} alt='logo' className={styles.logo} />
                <span className={styles.span}>
                    {introText}
                </span>
                <button className={styles.button}>BEGIN YOUR PIXEL QUEST</button>
            </div>
            <a href='https://www.markferrari.com/recent-artwork' className={styles.artworkCredits}>
                ARTWORK BY: MARK FERRARI
            </a>
        </div>
    )
}

export default Homepage