import FileMenu from './FileMenu/CreateCanvas/FileMenu'
import styles from './LeftNav.module.scss'

const LeftNav = () => {

    return (
        <div className={styles.container}>
            <FileMenu />
        </div>
    )
}

export default LeftNav