import Header from "../../Shared/Header/Header"
import LeftNav from "../LeftNav/LeftNav"
import styles from './CanvasPage.module.scss'

const CanvasPage = () => {
    return (<div className={styles.container}>
        <Header />
        <LeftNav />
    </div>)
}

export default CanvasPage