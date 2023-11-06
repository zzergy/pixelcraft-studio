import CreateCanvas from './CreateCanvas/CreateCanvas'
import styles from './LeftNav.module.scss'

const LeftNav = () => {

    return (
        <div className={styles.container}>
            <CreateCanvas />
        </div>
    )
}

export default LeftNav