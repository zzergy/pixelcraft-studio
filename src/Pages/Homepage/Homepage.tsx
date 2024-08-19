import styles from './Homepage.module.scss'
import { canvas } from '../../routes'
import { useNavigate } from 'react-router-dom'
import HomepageNav from './HomepageNav/HomepageNav'
import slogan from '../../images/slogan.png'
import laptop from '../../images/laptop.png'
import pcIcon from '../../images/computerIcon.svg'
import pallet from '../../images/pallet.svg'
import exportIcon from '../../images/export.svg'
import { Button } from 'antd'

interface CardsList {
    icon: string,
    title: string,
    content: string
}

const Homepage = () => {
    const navigate = useNavigate();
    const heroText = "Step into the world of pixel art with Pixel Craft Studio. Our intuitive tools and features help you bring your pixelated visions to life. Create, innovate, and share your art with ease. Begin your pixel journey now."

    const cardsList: CardsList[] = [
        {
            icon: pcIcon,
            title: "Intuitive Interface",
            content: "Easy-to-use interface for seamless navigation and effortless pixel art creation."
        },
        {
            icon: pallet,
            title: "Advanced Editing Tools",
            content: "Powerful tools like customizable brushes for detailed and precise artwork."
        },
        {
            icon: exportIcon,
            title: "Seamless Export",
            content: "Easily save and share your artwork in various formats without losing quality."
        }
    ]

    return (
        <div className={styles.container}>
            <HomepageNav />
            <div className={styles.content}>
                <div className={styles.hero}>
                    <div>
                        <img className={styles.slogan} src={slogan} />
                        <p className={styles.description}>{heroText}</p>
                        <Button type='primary' onClick={() => navigate(canvas)}>Get Started Now</Button>
                    </div>
                    <img className={styles.laptop} src={laptop} />
                </div>

                <div className={styles.cardsContainer}>
                    {cardsList.map((card: CardsList) => (
                        <div className={styles.card}>
                            <div className={styles.topSection}>
                                <img className={styles.icon} src={card.icon} />
                                <span className={styles.heading}>{card.title}</span>
                            </div>
                            <p className={styles.text}>{card.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Homepage