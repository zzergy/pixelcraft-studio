import { faRotateRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './UndoRedo.module.scss'

const Redo = () => {
    return (
        <FontAwesomeIcon className={styles.icon} icon={faRotateRight} />
    )
}

export default Redo