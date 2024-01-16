import Eraser from './Eraser/Eraser'
import FileMenu from './FileMenu/FileMenu'
import styles from './LeftNav.module.scss'

const LeftNav = () => {

    return (
        <div className={styles.container}>
            <FileMenu />
            <Eraser />
        </div>
    )
}

export default LeftNav