import styles from './Homepage.module.scss'
import logo from '../../images/logo.png'
import PixelButton from '../../Shared/PixelButton/PixelButton'
import { canvas } from '../../routes'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();

    const introText = "Welcome to Pixel Perfect Canvas where your creativity meets pixel art excellence. Craft stunning and detailed pixel art with ease. Dive into a world of endless possibilities and bring your imagination to life, one pixel at a time. Start creating your pixelated masterpiece today."

    const handleRedirect = () => {
        navigate(canvas)
    }

    return (
        <div className={styles.container}>
            <div className={styles.blurContainer}>
                <h2 className={styles.title}>UNLEASH YOUR INNER ARTIST WITH</h2>
                <img src={logo} alt='logo' className={styles.logo} />
                <span className={styles.span}>
                    {introText}
                </span>
            </div>
            <PixelButton label='BEGIN YOUR PIXEL QUEST' size='lg' onClick={handleRedirect} />
        </div>
    )
}

export default Homepage